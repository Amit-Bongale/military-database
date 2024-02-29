import { useState , useEffect } from "react"

import Updatemedalsvalues from "./Updatemedalsvalues"


function UpdateMedals() {
  
  let [Medalsdata , setMedalsdata] = useState([])
  let [update , setupdate] = useState(false)
  let [medal_id , setmedal_id] = useState('')

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
  },[])

  

  return (
    

    <div> 
      {update &&  <Updatemedalsvalues id={medal_id} setupdate={setupdate}></Updatemedalsvalues> }

      <div className='details-container'>
        
        <table className='details-table'>

          <tr>
            <th className="details-table-header"> Medal_ID</th>
            <th className="details-table-header"> Medal Name</th>
            <th className="details-table-header"> Soldier_ID</th>
            <th className="details-table-header"> </th>
          </tr>
          
          {
            Medalsdata.map((elem) => (
              
              <tr key={elem.medal_id} className="deatils-table-row">

                <td className="details-table-data">
                    {elem.medal_id} 
                </td>
                <td className="details-table-data">
                    {elem.medalName}
                </td>
                <td className="details-table-data">
                    {elem.soldier_id}
                </td>
                
                <td className="details-table-data">
                  <button className="deletebutton"
                  onClick={() => { setmedal_id(elem.medal_id); setupdate(true) }}>
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

export default UpdateMedals;