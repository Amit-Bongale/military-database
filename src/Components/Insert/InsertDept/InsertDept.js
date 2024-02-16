import { useState } from "react";

import '../Insert.css'


function InsertDept() {
  
  let [department_id, setdepartment_id] = useState("");
  let [department_Name , setdepartment_Name] = useState("");
  let [department_Location , setdepartment_Location] = useState("");
  let [soldier_id , setsoldier_id] = useState("");


  function send(){

    let data = {
      'department_id' : department_id,
      'department_Name' : department_Name,
      'department_Location': department_Location,
      'soldier_id': soldier_id

    }


    try{
      fetch(`http://localhost:3000/insertdept` ,
      { method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
      .then((res) => res.json())
      .catch((error) => console.log(error));
      alert('Department added sucessfully');

    }
    catch (error) {
      console.log("error :", error)
    }
  }



  return (
    <div>

      <div className="input-container">

        <table className="input-table">
          
          <tbody>

            <tr>
              <td className="row">
                <label className="insert-label">Department_ID</label>
              </td>
              <td className="input-row">
                <input  className="insert-input" type="text" required
                onChange={(val) => {setdepartment_id(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Department_Name</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setdepartment_Name(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Department_Location</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setdepartment_Location(val.target.value)}}/>
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

            <button type="submit" className="insert-button" onClick={send}> submit </button>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default InsertDept;