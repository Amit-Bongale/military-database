import { useEffect , useState } from "react";

import '../details.css'

function SoldierDetails() {

  let [Soldierdata , setsoldierdata] = useState([])

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

        <div className='details-container'>
          
            <table className='details-table'>

                <tr>
                  <th className="details-table-header"> Soldier ID</th>
                  <th className="details-table-header"> Name</th>
                  <th className="details-table-header"> Date of birth</th>
                  <th className="details-table-header"> Gender</th>
                  <th className="details-table-header"> Address</th>
                  <th className="details-table-header"> Salary</th>
                </tr>
                
                {
                    Soldierdata.map((elem) => (
                     
                      <tr className="deatils-table-row">

                        <td className="details-table-data">
                            {elem.soldier_id} 
                        </td>
                        <td className="details-table-data">
                            {elem.name}
                        </td>
                        <td className="details-table-data">
                            {elem.dob}
                        </td>
                        <td className="details-table-data">
                            {elem.gender}
                        </td>

                        <td className="details-table-data">
                            {elem.address}
                        </td>
                        <td className="details-table-data">
                            {elem.Salary}
                        </td>
                        
                      </tr>
                     
                    ))
                }
                
            </table>
        </div>

    </div>

  )
}

export default SoldierDetails