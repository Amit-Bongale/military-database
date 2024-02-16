import { useEffect , useState } from "react";

import '../Delete.css'

function DeleteSoldier() {
  
  let [Soldierdata , setsoldierdata] = useState([])
  let [deletesoldier , setdeleted] = useState('')

  useEffect(() => {
    try {
      fetch('http://localhost:3000/soldierdetails', { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setsoldierdata(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
    }
    catch (error) {
      console.error('Error:', error);
    }
  },[deletesoldier])

  function deletedata(id){

    console.log(id)
    setdeleted(id);

    let bodyData = { 
      "soldier_id":id
    };

    try {
      fetch('http://localhost:3000/deletesoldier',
      { 
        method: "POST" ,
        body:JSON.stringify(bodyData),
        headers: {'Content-Type': 'application/json'}
      })
      .then((res) => res.json())
      .catch(error => {
        console.log('Error fetching data:', error);
      });

      alert('Soldier Deleted Sucessfully');

    }
    catch (error) {
      console.error('Error:', error);
    }

  }

  return (
    <div> 

        <div className='details-container'>
          
            <table className='details-table'>

                <tr>
                  <th className="details-table-header"> Soldier ID</th>
                  <th className="details-table-header"> Name</th>
                  <th className="details-table-header"> Date of birth</th>
                  <th className="details-table-header"> Gender</th>
                  <th className="details-table-header"> Address</th>
                  <th className="details-table-header"> Salary</th>
                  <th className="details-table-header"> </th>

                </tr>
                
                {
                  Soldierdata.map((elem) => (
                    
                    <tr key={elem.soldier_id} className="deatils-table-row">

                      <td className="details-table-data">
                          {elem.soldier_id} 
                      </td>
                      <td className="details-table-data">
                          {elem.name}
                      </td>
                      <td className="details-table-data">
                          {elem.dob.slice(0,10)}
                      </td>
                      <td className="details-table-data">
                          {elem.gender}
                      </td>

                      <td className="details-table-data">
                          {elem.address}
                      </td>
                      <td className="details-table-data">
                          {elem.salary}
                      </td>
                      <td className="details-table-data">
                        <button className="deletebutton" onClick={() => { deletedata(elem.soldier_id);}}>Delete</button>
                      </td>
                      
                    </tr>
                    
                  ))
                }
                
            </table>
        </div>

    </div>

  )

}

export default DeleteSoldier