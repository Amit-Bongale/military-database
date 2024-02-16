import { useEffect , useState } from "react";

import '../details.css'
function DepartmentDetails() {
  
  let [Departmentdata , setDepartmentdata] = useState([])

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

        <div className='details-container'>
          
            <table className='details-table'>

                <tr>
                  <th className="details-table-header"> Department_ID</th>
                  <th className="details-table-header"> Department_Name</th>
                  <th className="details-table-header"> Department_Location</th>
                  <th className="details-table-header"> Soldier_ID</th>
                </tr>
                
                {
                    Departmentdata.map((elem) => (
                     
                      <tr className="deatils-table-row">

                        <td className="details-table-data">
                            {elem.Department_ID} 
                        </td>
                        <td className="details-table-data">
                            {elem.Department_Name}
                        </td>
                        <td className="details-table-data">
                            {elem.Department_Location}
                        </td>
                        <td className="details-table-data">
                            {elem.Solider_ID}
                        </td>
                      </tr>
                     
                    ))
                }
                
            </table>
        </div>

    </div>

  )

}

export default DepartmentDetails