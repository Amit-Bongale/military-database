import { useState , useEffect  } from "react";

import '../Update.css'

function Updatesoldiervalues({id ,  setupdate}) {

    let [Soldierdata , setsoldierdata] = useState([])

    let [soldier_id, setsoldier_id] = useState("");
    let [name , setname] = useState("");
    let [dob , setdob] = useState("");
    let [gender , setgender] = useState("");
    let [address , setaddress] = useState("");
    let [salary , setsalary] = useState("");

    useEffect(() => {

      console.log(id)
      
      let bodyData = { 
        "soldier_id":id
      };

      try {
        fetch('http://localhost:3000/viewsoldiers', 
        {  method: "POST" , body:JSON.stringify(bodyData), 
          headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched data:', data);
          setsoldierdata(data);
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
      }
      catch (error) {
        console.error('Error:', error);
      }

    },[id])



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
          fetch(`http://localhost:3000/updatesoldier` ,
          { method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
          .then((res) => res.json())
          .catch((error) => console.log(error));
          alert('Soldier added sucessfully');
    
        }
        catch (error) {
          console.log("error :", error)
        }
    
        window.location.reload();
    }

  return (
    <div className="card-wrapper" >
      <div className="card">
            
        <button className="close-button" onClick={() => setupdate(false)}>close</button>
          {
              Soldierdata.map((elem) => (
              <div key={elem.soldier_id} className="input-container">
              <table className="input-table">
                <tbody>
      
                  <tr>
                    <td className="row">
                      <label className="insert-label">Soldier_ID</label>
                    </td>
                    <td className="input-row">
                      <input  className="insert-input" type="text" value={elem.soldier_id} required
                      onChange={(val) => {setsoldier_id(val.target.value)}} />
                    </td>
                  </tr>
      
                  <tr>
                    <td>
                      <label className="insert-label">Name</label>
                    </td>
                    <td>
                      <input className="insert-input" type="text" required value={elem.name}
                      onChange={(val) => {setname(val.target.value)}}/>
                    </td>
                  </tr>
      
                  <tr>
                    <td>
                      <label className="insert-label">Date of Birth</label>
                    </td>
                    <td>
                      <input className="insert-input" type="date" required value={elem.dob}
                      onChange={(val) => {setdob(val.target.value)}}/>
                    </td>
                  </tr>
      
                  <tr>
                    <td>
                      <label className="insert-label">Gender</label>
                    </td>
                    <td> 
                      <input className="insert-input" type="text" required value={elem.gender}
                      onChange={(val) => {setgender(val.target.value)}}/>
                    </td>
                  </tr>
      
                  <tr>
                    <td>
                      <label className="insert-label">Permanent Address</label>
                    </td>
                    <td>
                      <input className="insert-input" type="text" required value={elem.address}
                      onChange={(val) => {setaddress(val.target.value)}}/>
                    </td>
                  </tr>
      
                  <tr>
                    <td>
                      <label className="insert-label">Salary</label>
                    </td>
                    <td>
                      <input className="insert-input" type="text" required value={elem.salary}
                      onChange={(val) => {setsalary(val.target.value)}}/>
                    </td>
                  </tr>
      
                  <button type="submit" className="insert-button" onClick={() => send }> Update </button>
      
                </tbody>
      
              </table>
      
            </div>
          ))}

      </div>
    </div>
  )
}

export default Updatesoldiervalues