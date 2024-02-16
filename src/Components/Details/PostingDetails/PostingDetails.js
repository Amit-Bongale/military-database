import { useEffect , useState } from "react";

import '../details.css'

function PostingDetails() {

  let [Postingdata , setPostingdata] = useState([])

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

        <div className='details-container'>
          
            <table className='details-table'>

                <tr>
                  <th className="details-table-header"> Post_ID</th>
                  <th className="details-table-header"> Start_Date</th>
                  <th className="details-table-header"> End_Date</th>
                  <th className="details-table-header"> Location</th>
                  <th className="details-table-header"> Address</th>
                  <th className="details-table-header"> Salary</th>
                </tr>
                
                {
                    Postingdata.map((elem) => (
                     
                      <tr className="deatils-table-row">

                        <td className="details-table-data">
                            {elem.post_id} 
                        </td>
                        <td className="details-table-data">
                            {elem.start_date}
                        </td>
                        <td className="details-table-data">
                            {elem.end_date}
                        </td>
                        <td className="details-table-data">
                            {elem.loaction}
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

export default PostingDetails;