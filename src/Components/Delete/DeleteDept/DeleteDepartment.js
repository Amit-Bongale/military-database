import { useEffect , useState } from "react";

import '../Delete.css'

function DeleteDepartment() {
  
  let [Departmentdata , setDepartmentdata] = useState([])
  let [deletedepartment , setdeleted] = useState('')

  useEffect(() => {
    try {
      fetch('http://localhost:3000/departmentdetails', { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setDepartmentdata(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
    }
    catch (error) {
      console.error('Error:', error);
    }
  },[deletedepartment])

  function deletedata(id){

    console.log(id)
    setdeleted(id);

    let bodyData = { 
      "department_id":id
    };

    try {
      fetch('http://localhost:3000/deletedepartment',
      { 
        method: "POST" ,
        body:JSON.stringify(bodyData),
        headers: {'Content-Type': 'application/json'}
      })
      .then((res) => res.json())
      .catch(error => {
        console.log('Error fetching data:', error);
      });

      alert('Department Deleted Sucessfully');

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
                  <th className="details-table-header"> Department ID</th>
                  <th className="details-table-header"> Department Name</th>
                  <th className="details-table-header"> Department Location</th>
                  <th className="details-table-header"> Soldier ID</th>
                  <th className="details-table-header"> </th>

                </tr>
                
                {
                  Departmentdata.map((elem) => (
                    
                    <tr key={elem.department_id} className="deatils-table-row">

                      <td className="details-table-data">
                          {elem.department_id} 
                      </td>
                      <td className="details-table-data">
                          {elem.department_name}
                      </td>
                      <td className="details-table-data">
                          {elem.department_location}
                      </td>
                      <td className="details-table-data">
                          {elem.soldier_id}
                      </td>

                      <td className="details-table-data">
                        <button className="deletebutton" onClick={() => { deletedata(elem.department_id);}}>Delete</button>
                      </td>
                      
                    </tr>
                    
                  ))
                }
                
            </table>
        </div>

    </div>

  )

}

export default DeleteDepartment;