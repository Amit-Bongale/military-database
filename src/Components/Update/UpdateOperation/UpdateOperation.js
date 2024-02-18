import { useState , useEffect } from "react"

import Updateoperationvalues from "./Updateoperationvalues"


function UpdateOperation() {
  
  let [Operationdata , setOperationdata] = useState([])
  let [update , setupdate] = useState(false)
  let [operation_id , setoperation_id] = useState('')

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
      {update &&  <Updateoperationvalues id={operation_id} setupdate={setupdate}></Updateoperationvalues> }

      <div className='details-container'>
        
        <table className='details-table'>

          <tr>
            <th className="details-table-header"> Operation_ID</th>
            <th className="details-table-header"> Operation Name</th>
            <th className="details-table-header"> Outcome </th>
            <th className="details-table-header"> Start Date</th>
            <th className="details-table-header"> End Date</th>
            <th className="details-table-header"> Soldier_ID</th>
            <th className="details-table-header"> </th>
          </tr>
          
          {
            Operationdata.map((elem) => (
              
              <tr key={elem.operation_id} className="deatils-table-row">

                <td className="details-table-data">
                    {elem.operation_id} 
                </td>
                <td className="details-table-data">
                    {elem.operation_name}
                </td>
                <td className="details-table-data">
                    {elem.outcome}
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
                  <button className="deletebutton"
                  onClick={() => { setoperation_id(elem.operation_id); setupdate(true) }}>
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

export default UpdateOperation;