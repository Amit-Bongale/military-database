import { useState } from "react";

import '../Insert.css'


function InsertOperation() {

  let [operation_id, setoperation_id] = useState("");
  let [operation_name , setoperation_name] = useState("");
  let [outcome , setoutcome] = useState("");
  let [start_date , setstart_date] = useState("");
  let [end_date , setend_date] = useState("");
  let [department_id , setdepartment_id] = useState("")
  let [soldier_id , setsoldier_id] = useState("");


  function send(){

    let data = {
      'operation_id' : operation_id,
      'operation_name' : operation_name,
      'outcome': outcome,
      'start_date': start_date,
      'end_date' : end_date,
      'department_id' : department_id,
      'soldier_id': soldier_id
    }


    try{
      fetch(`http://localhost:3000/insertoperation` ,
      { method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
      .then((res) => res.json())
      .then((data) => {
        if (data.message){
          console.log(data.message);
          alert(data.message);
        }
        if(data.sqlMessage){
          console.log(data.sqlMessage); 
          alert(data.sqlMessage);
        }
        console.log(data.results); 
      })
      .catch((error) => {
        console.log(error);
      });

    }
    catch (error) {
      console.log("error :", error)
    }

    // window.location.reload();
  }



  return (
    <div>

      <div className="input-container">

        <table className="input-table">
          
          <tbody>

            <tr>
              <td className="row">
                <label className="insert-label">Operation_ID</label>
              </td>
              <td className="input-row">
                <input  className="insert-input" type="text" required
                onChange={(val) => {setoperation_id(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Operation_Name</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setoperation_name(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Outcome</label>
              </td>
              <td>
                <select className="insert-input"  onChange={(val) => {setoutcome(val.target.value)}} >
                  <option className="insert-input" value="" key="" ></option>
                  <option className="insert-input" value="successful" key="" > successful </option>
                  <option className="insert-input" value="failed" key=""> failed </option>
                  <option className="insert-input" value="in progress" key=""> in progress </option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Start_Date</label>
              </td>
              <td>
                <input className="insert-input" type="date" required
                onChange={(val) => {setstart_date(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">End_Date</label>
              </td>
              <td>
                <input className="insert-input" type="date" required
                onChange={(val) => {setend_date(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Soldier_ID</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setsoldier_id(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Department_ID</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setdepartment_id(val.target.value)}}/>
              </td>
            </tr>

            <button type="submit" className="insert-button" onClick={send}> submit </button>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default InsertOperation;