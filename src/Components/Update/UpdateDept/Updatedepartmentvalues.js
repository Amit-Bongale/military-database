import { useState , useEffect  } from "react";

import '../Update.css'

import closeicon from '../../../Assets/Icons/close.png'

function Updatedepartmentvalues({id ,  setupdate}) {

    let [department_id, setdepartment_id] = useState("");
    let [department_name , setdepartment_name] = useState("");
    let [department_location , setdepartment_location] = useState("");
    let [commander_id , setcommander_id] = useState("");
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
          setdepartment_name(data[0].department_name);
          setdepartment_location(data[0].department_location);
          setcommander_id(data[0].commander_id);
          
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
        'department_name' : department_name,
        'department_location' : department_location,
        'commander_id': commander_id,
        
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
                  <input className="insert-input" type="text" required value={department_name}
                  onChange={(event) => {setdepartment_name(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Department Location</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={department_location}
                  onChange={(event) => { setdepartment_location(event.target.value) }}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Commander_ID</label>
                </td>
                <td> 
                  <input className="insert-input" type="text" required value={commander_id}
                  onChange={(event) => { setcommander_id(event.target.value) }}/>
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