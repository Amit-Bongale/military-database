import { useState , useEffect } from "react"

import Updatedepartmentvalues from "./Updatedepartmentvalues"

function UpdateDepartment() {
  
  let [Departmentdata , setDepartmentdata] = useState([])
  let [update , setupdate] = useState(false)
  let [department_id , setdepartment_id] = useState('')

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
  },[])

  

  return (
    

    <div> 
      {update &&  <Updatedepartmentvalues id={department_id} setupdate={setupdate}></Updatedepartmentvalues> }

      <div className='details-container'>
        
        <table className='details-table'>

          <tr>
            <th className="details-table-header"> Department ID</th>
            <th className="details-table-header"> Department Name</th>
            <th className="details-table-header"> Department Location</th>
            <th className="details-table-header"> Soldier_ID </th>
            <th className="details-table-header"> </th>
          </tr>
          
          {
            Departmentdata.map((elem) => (
              
              <tr key={elem.department_id} className="deatils-table-row">

                <td className="details-table-data">
                    {elem.department_id} 
                </td>
                <td className="details-table-data">
                    {elem.department_Name}
                </td>
                <td className="details-table-data">
                    {elem.department_Location}
                </td>
                <td className="details-table-data">
                    {elem.soldier_id}
                </td>

                <td className="details-table-data">
                  <button className="deletebutton"
                  onClick={() => { setdepartment_id(elem.department_id); setupdate(true) }}>
                    Update</button>
                </td>
                
              </tr>
              
            ))
          }
            
        </table>
      </div>

 

    </div>

  )
}

export default UpdateDepartment;