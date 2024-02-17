import { useState , useEffect } from "react"

import Updatepostingvalues from "./Updatepostingvalues"

function UpdatePosting() {
  
  let [Postingdata , setPostingdata] = useState([])
  let [update , setupdate] = useState(false)
  let [postid , setpostid] = useState('')

  useEffect(() => {
    
    try {
      fetch('http://localhost:3000/postingdetails', { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setPostingdata(data);
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
      {update &&  <Updatepostingvalues id={postid} setupdate={setupdate}></Updatepostingvalues> }

      <div className='details-container'>
        
        <table className='details-table'>

          <tr>
            <th className="details-table-header"> Post ID</th>
            <th className="details-table-header"> Start Date </th>
            <th className="details-table-header"> End Date </th>
            <th className="details-table-header"> Soldier ID </th>
            <th className="details-table-header"> Location </th>
            <th className="details-table-header"> </th>
          </tr>
          
          {
            Postingdata.map((elem) => (
              
              <tr key={elem.post_id} className="deatils-table-row">

                <td className="details-table-data">
                    {elem.post_id} 
                </td>
                <td className="details-table-data">
                    {elem.start_date.slice(0,10)}
                </td>
                <td className="details-table-data">
                    {elem.end_date.slice(0,10)}
                </td>
                <td className="details-table-data">
                    {elem.soldier_id}
                </td>

                <td className="details-table-data">
                    {elem.location}
                </td>
                
                <td className="details-table-data">
                  <button className="deletebutton"
                  onClick={() => { setpostid(elem.post_id); setupdate(true) }}>
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

export default UpdatePosting;