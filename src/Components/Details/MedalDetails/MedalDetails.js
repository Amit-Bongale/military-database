import { useEffect , useState } from "react";

import '../details.css'
function MedalDetails(){

  let [Medaldata , setMedaldata] = useState([])

  useEffect(() => {
    try {
      fetch('http://localhost:3000/medaldetails', { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setMedaldata(data);
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
                  <th className="details-table-header"> Medal_ID</th>
                  <th className="details-table-header"> Medal_Name</th>
                  <th className="details-table-header"> Soldier_ID</th>
                </tr>
                
                {
                    Medaldata.map((elem) => (
                     
                      <tr className="deatils-table-row">

                        <td className="details-table-data">
                            {elem.Medal_ID} 
                        </td>
                        <td className="details-table-data">
                            {elem.Medal_Name}
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


export default MedalDetails