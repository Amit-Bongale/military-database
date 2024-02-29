import { useState , useEffect  } from "react";

import '../Update.css'

import closeicon from '../../../Assets/Icons/close.png'

function Updatedepartmentvalues({id ,  setupdate}) {

    let [department_id, setdepartment_id] = useState("");
    let [department_Name , setdepartment_Name] = useState("");
    let [department_Location , setdepartment_Location] = useState("");
    let [soldier_id , setsoldier_id] = useState("");
    // let [newid , setnewid] = useState("")

    useEffect(() => {

      console.log(id)
      
      let bodyData = { 
        "department_id":id
      };

      try {
        fetch('http://localhost:3000/viewdepartment', 
        {  method: "POST" , body:JSON.stringify(bodyData), 
          headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched data:', data);

          setdepartment_id(data[0].department_id);
          setdepartment_Name(data[0].department_Name);
          setdepartment_Location(data[0].department_Location);
          setsoldier_id(data[0].soldier_id);
          
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
        'department_id' : department_id,
        'department_Name' : department_Name,
        'department_Location' : department_Location,
        'soldier_id': soldier_id,
        
      }
  
      try{
        fetch(`http://localhost:3000/updatedepartment` ,
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
                  <label className="insert-label">Department_ID : {department_id} </label>
                </td>
                <td className="input-row">
                  {/* <input  className="insert-input" type="text" value={soldier_id} 
                  onChange={(val) => {setdepartment_id(val.target.value) }} ></input> */}
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Department Name</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={department_Name}
                  onChange={(event) => {setdepartment_Name(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Department Location</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={department_Location}
                  onChange={(event) => { setdepartment_Location(event.target.value) }}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Soldier_ID</label>
                </td>
                <td> 
                  <input className="insert-input" type="text" required value={soldier_id}
                  onChange={(event) => { setsoldier_id(event.target.value) }}/>
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

export default Updatedepartmentvalues;