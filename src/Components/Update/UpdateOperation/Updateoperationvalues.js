import { useState , useEffect  } from "react";

import '../Update.css'

import closeicon from '../../../Assets/Icons/close.png'

function Updateoperationvalues({id ,  setupdate}) {

    let [operation_id, setoperation_id] = useState("");
    let [operation_name , setoperation_name] = useState("");
    let [outcome , setoutcome] = useState("");
    let [start_date , setstart_date] = useState("");
    let [end_date , setend_date] = useState("");
    let [soldier_id , setsoldier_id] = useState("");
    let [department_id , setdepartment_id] = useState("")
    // let [newid , setnewid] = useState("")

    useEffect(() => {

      console.log(id)
      
      let bodyData = { 
        "operation_id":id
      };

      try {
        fetch('http://localhost:3000/viewoperations', 
        {  method: "POST" , body:JSON.stringify(bodyData), 
          headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched data:', data);

          setoperation_id(data[0].operation_id);
          setoperation_name(data[0].operation_name);
          setoutcome(data[0].outcome);
          setstart_date(data[0].start_date);
          setend_date(data[0].end_date);
          setsoldier_id(data[0].soldier_id);
          setdepartment_id(data[0].department_id);

        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
      }
      catch (error) {
        console.error('Error:', error);
      }

    },[id])



    function update(){

      let data = {
        // 'soldier_id' : soldier_id,
        'operation_id' : operation_id,
        'operation_name' : operation_name,
        'outcome' : outcome,
        'start_date': start_date,
        'end_date': end_date,
        'department_id' : department_id,
        'soldier_id': soldier_id,
      }
  
      try{
        fetch(`http://localhost:3000/updateoperation` ,
        { method : "POST" ,
          headers:{'Content-Type': 'application/json'} , 
          body:JSON.stringify(data)
        })
        .then((res) => res.json())
        .catch((error) => console.log(error));
      }
      catch (error) {
        console.log("error:", error)
      }

      alert('updated sucessfully')

      window.location.reload();

    }

  return (
    <div  >
      
      <div className="card">
            
        <button className="close-button" onClick={() => setupdate(false)}><img id="closeimage"
        src={closeicon} alt="close" height={30} /></button>
           
          <div className="input-container">
          <table className="input-table">
            <tbody>
              <tr>
                <td className="row">
                  <label className="insert-label"> Operation_ID : {operation_id} </label>
                </td>
                <td className="input-row">
                  {/* <input  className="insert-input" type="text" value={soldier_id} 
                  onChange={(val) => {setsoldierid(val.target.value) }} ></input> */}
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Operation Name</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={operation_name}
                  onChange={(event) => {setoperation_name(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Outcome</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={outcome}
                  onChange={(event) => { setoutcome(event.target.value) }}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Start Date</label>
                </td>
                <td> 
                  <input className="insert-input" type="date" required value={start_date}
                  onChange={(event) => { setstart_date(event.target.value) }}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">End Date</label>
                </td>
                <td>
                  <input className="insert-input" type="date" required value={end_date}
                  onChange={(event) => {setend_date(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Soldier_ID</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={soldier_id}
                  onChange={(event) => { setsoldier_id(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Department_ID_ID</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={soldier_id}
                  onChange={(event) => { setdepartment_id(event.target.value)}}/>
                </td>
              </tr>

              <button type="submit" className="insert-button" onClick={() => update() }> Update </button>

            </tbody>
          </table>

        </div>
      </div>

      <div className="card-wrapper"></div>
    </div>
  )
}

export default Updateoperationvalues;