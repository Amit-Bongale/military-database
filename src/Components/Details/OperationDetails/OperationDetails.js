import { useEffect , useState } from "react";

import '../details.css'
function OperationDetails() {

  let [Operationdata , setOperationdata] = useState([])

  useEffect(() => {
    try {
      fetch('http://localhost:3000/operationdetails', { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setOperationdata(data);
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
                  <th className="details-table-header"> Operation_ID</th>
                  <th className="details-table-header"> Operation_Name</th>
                  <th className="details-table-header"> Outcome</th>
                  <th className="details-table-header"> Start_date</th>
                  <th className="details-table-header"> End_date</th>
                  <th className="details-table-header"> Soldier_ID</th>
                </tr>
                
                {
                    Operationdata.map((elem) => (
                     
                      <tr className="deatils-table-row">

                        <td className="details-table-data">
                            {elem.Operation_Id} 
                        </td>
                        <td className="details-table-data">
                            {elem.Operation_Name}
                        </td>
                        <td className="details-table-data">
                            {elem.Outcome}
                        </td>
                        <td className="details-table-data">
                            {elem.Start_date}
                        </td>

                        <td className="details-table-data">
                            {elem.End_date}
                        </td>
                        <td className="details-table-data">
                            {elem.Solider_Id}
                        </td>
                        
                      </tr>
                     
                    ))
                }
                
            </table>
        </div>

    </div>

  )


}

export default OperationDetails;