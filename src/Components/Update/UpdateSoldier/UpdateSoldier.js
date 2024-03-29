import { useState , useEffect } from "react"

import Updatesoldiervalues from "./Updatesoldiervalues"

function UpdateSoldier() {
  
  let [Soldierdata , setsoldierdata] = useState([])
  let [update , setupdate] = useState(false)
  let [soldier_id , setsoldier_id] = useState('')

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
  },[])

  

  return (
    

    <div> 
      {update &&  <Updatesoldiervalues id={soldier_id} setupdate={setupdate}></Updatesoldiervalues> }

      <div className='details-container'>
        
        <table className='details-table'>

          <tr>
            <th className="details-table-header"> Soldier ID</th>
            <th className="details-table-header"> Name</th>
            <th className="details-table-header"> Date of birth</th>
            <th className="details-table-header"> Gender</th>
            <th className="details-table-header"> Address</th>
            <th className="details-table-header"> Salary</th>
            <th className="details-table-header"> Department_ID</th>
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
                    {elem.department_id}
                </td>
                <td className="details-table-data">
                  <button className="deletebutton"
                  onClick={() => { setsoldier_id(elem.soldier_id); setupdate(true) }}>
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

export default UpdateSoldier;