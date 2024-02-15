import { useState } from "react";

import '../Insert.css'


function InsertMedals() {
  
  let [medal_id, setmedal_id] = useState("");
  let [medalName , setmedalName] = useState("");
  let [soldier_id , setsoldier_id] = useState("");


  function send(){

    let data = {
      'medal_id' : medal_id,
      'medalName' : medalName,
      'soldier_id': soldier_id

    }


    try{
      fetch(`http://localhost:3000/insertmedal` ,
      { method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
      .then((res) => res.json())
      .catch((error) => console.log(error));
      alert('Medal added sucessfully');

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
                <label className="insert-label">Medal_ID</label>
              </td>
              <td className="input-row">
                <input  className="insert-input" type="text" required
                onChange={(val) => {setmedal_id(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">Medal_Name</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setmedalName(val.target.value)}}/>
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

export default InsertMedals;