import { useState } from "react";

import '../Insert.css'



function InsertPosting() {

  let [post_id, setpost_id] = useState("");
  let [start_date , setstart_date] = useState("");
  let [end_date , setend_date] = useState("");
  let [soldier_id , setsoldier_id] = useState("");
  let [location , setlocation] = useState("");


  function send(){

    let data = {
      'post_id' : post_id,
      'start_date' : start_date,
      'end_date': end_date,
      'soldier_id' : soldier_id,
      'location': location

    }


    try{
      fetch(`http://localhost:3000/insertposting` ,
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
                <label className="insert-label">Post_ID</label>
              </td>
              <td className="input-row">
                <input  className="insert-input" type="text" required
                onChange={(val) => {setpost_id(val.target.value)}} />
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
                <label className="insert-label">Location</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setlocation(val.target.value)}}/>
              </td>
            </tr>


            <button type="submit" className="insert-button" onClick={send}> submit </button>

          </tbody>

        </table>

      </div>

    </div>
  );

}

export default InsertPosting;