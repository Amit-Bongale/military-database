import { useState } from "react";

import '../Insert.css'


function InsertSoldier() {

  let [soldier_id, setsoldier_id] = useState("");
  let [name , setname] = useState("");
  let [ dob , setdob] = useState("");
  let [gender , setgender] = useState("");
  let [address , setaddress] = useState("");
  let [salary , setsalary] = useState("");


  function send(){

    let data = {
      'soldier_id' : soldier_id,
      'name' : name,
      'dob' : dob,
      'gender':gender,
      'address':address,
      'salary':salary
    }


    try{
      fetch(`http://localhost:3000/insertsoldier` ,
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
      .catch((error) => console.log(error));
      // alert('Soldier added sucessfully');

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
                <label className="insert-label">Soldier_ID</label>
              </td>
              <td className="input-row">
                <input  className="insert-input" type="text" required
                onChange={(val) => {setsoldier_id(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Name</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setname(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Date of Birth</label>
              </td>
              <td>
                <input className="insert-input" type="date" required
                onChange={(val) => {setdob(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Gender</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setgender(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Permanent Address</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setaddress(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Salary</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setsalary(val.target.value)}}/>
              </td>
            </tr>

            <button type="submit" className="insert-button" onClick={send}> submit </button>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default InsertSoldier;