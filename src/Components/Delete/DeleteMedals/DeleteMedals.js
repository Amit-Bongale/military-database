import { useEffect , useState } from "react";

import '../Delete.css'


function DeleteMedals() {
  
  let [Medalsdata , setMedalsdata] = useState([])
  let [deleteMedal , setdeleted] = useState('')

  useEffect(() => {
    try {
      fetch('http://localhost:3000/medaldetails', { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setMedalsdata(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
    }
    catch (error) {
      console.error('Error:', error);
    }
  },[deleteMedal])

  function deletedata(id){

    console.log(id)
    

    let bodyData = { 
      'medal_id':id
    };

    try {
      fetch('http://localhost:3000/deleteMedal',
      { 
        method: "POST" ,
        body:JSON.stringify(bodyData),
        headers: {'Content-Type': 'application/json'}
      })
      .then((res) => res.json())
      .catch(error => {
        console.log('Error fetching data:', error);
      });

      alert('Medal Deleted Sucessfully');

    }
    catch (error) {
      console.error('Error:', error);
    }

    setdeleted(id);
  }

  return (
    <div> 

        <div className='details-container'>
          
            <table className='details-table'>

                <tr>
                  <th className="details-table-header"> Medal ID</th>
                  <th className="details-table-header"> Medal Name</th>
                  <th className="details-table-header"> Soldier ID</th>
                  <th className="details-table-header"> </th>

                </tr>
                
                {
                  Medalsdata.map((elem) => (
                    
                    <tr key={elem.medal_id} className="deatils-table-row">

                      <td className="details-table-data">
                          {elem.medal_id} 
                      </td>
                      <td className="details-table-data">
                          {elem.medal_name}
                      </td>
                      <td className="details-table-data">
                          {elem.soldier_id}
                      </td>
                      
                      <td className="details-table-data">
                        <button className="deletebutton" onClick={() => { deletedata(elem.medal_id);}}>Delete</button>
                      </td>
                      
                    </tr>
                    
                  ))
                }
                
            </table>
        </div>

    </div>

  )
}

export default DeleteMedals;