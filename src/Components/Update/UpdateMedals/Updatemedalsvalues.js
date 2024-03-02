import { useState , useEffect  } from "react";

import '../Update.css'

import closeicon from '../../../Assets/Icons/close.png'

function Updatemedalsvalues({id ,  setupdate}) {

    let [medal_id, setmedal_id] = useState("");
    let [medal_name , setmedal_name] = useState("");
    let [soldier_id , setsoldier_id] = useState("");
    // let [newid , setnewid] = useState("")

    useEffect(() => {

      console.log(id)
      
      let bodyData = { 
        "medal_id":id
      };

      try {
        fetch('http://localhost:3000/viewmedals', 
        {  method: "POST" , body:JSON.stringify(bodyData), 
          headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched data:', data);

          setmedal_id(data[0].medal_id);
          setmedal_name(data[0].medal_name);
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
        'medal_id' : medal_id,
        'medal_name' : medal_name,
        'soldier_id' : soldier_id,
      }
  
      try{
        fetch(`http://localhost:3000/updatemedal` ,
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
                  <label className="insert-label">Medal_ID : {medal_id} </label>
                </td>
                <td className="input-row">
                  {/* <input  className="insert-input" type="text" value={soldier_id} 
                  onChange={(val) => {setsoldierid(val.target.value) }} ></input> */}
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Medal Name</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={medal_name}
                  onChange={(event) => {setmedal_name(event.target.value)}}/>
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

export default Updatemedalsvalues;