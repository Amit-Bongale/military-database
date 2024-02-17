import { useState , useEffect  } from "react";

import '../Update.css'

import closeicon from '../../../Assets/Icons/close.png'

function Updatesoldiervalues({id ,  setupdate}) {

    let [soldier_id, setsoldierid] = useState("");
    let [name , setname] = useState("");
    let [dob , setdob] = useState("");
    let [gender , setgender] = useState("");
    let [address , setaddress] = useState("");
    let [salary , setsalary] = useState("");
    // let [newid , setnewid] = useState("")

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

          setsoldierid(data[0].soldier_id);
          setname(data[0].name);
          setdob(data[0].dob);
          setgender(data[0].gender);
          setaddress(data[0].address);
          setsalary(data[0].salary);

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
        'soldier_id' : id,
        'name' : name,
        'dob' : dob,
        'gender':gender,
        'address':address,
        'salary':salary,
      }
  
      try{
        fetch(`http://localhost:3000/updatesoldier` ,
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
                  <label className="insert-label">Soldier_ID : {soldier_id} </label>
                </td>
                <td className="input-row">
                  {/* <input  className="insert-input" type="text" value={soldier_id} 
                  onChange={(val) => {setsoldierid(val.target.value) }} ></input> */}
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Name</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={name}
                  onChange={(event) => {setname(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Date of Birth</label>
                </td>
                <td>
                  <input className="insert-input" type="date" required value={dob}
                  onChange={(event) => { setdob(event.target.value) }}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Gender</label>
                </td>
                <td> 
                  <input className="insert-input" type="text" required value={gender}
                  onChange={(event) => { setgender(event.target.value) }}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Permanent Address</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={address}
                  onChange={(event) => {setaddress(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Salary</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={salary}
                  onChange={(event) => { setsalary(event.target.value)}}/>
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

export default Updatesoldiervalues