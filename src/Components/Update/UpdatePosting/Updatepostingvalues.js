import { useState , useEffect  } from "react";

import '../Update.css'

import closeicon from '../../../Assets/Icons/close.png'

function Updatepostingvalues({id ,  setupdate}) {

    let [post_id, setpost_id] = useState("");
    let [start_date , setstart_date] = useState("");
    let [end_date , setend_date] = useState("");
    let [soldier_id , setsoldier_id] = useState("");
    let [location , setlocation] = useState("");
    // let [newid , setnewid] = useState("")

    useEffect(() => {

      console.log(id)
      
      let bodyData = { 
        "post_id":id
      };

      try {
        fetch('http://localhost:3000/viewposting', 
        {  method: "POST" , body:JSON.stringify(bodyData), 
          headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched data:', data);

          setpost_id(data[0].post_id);
          setstart_date(data[0].start_date);
          setend_date(data[0].end_date);
          setsoldier_id(data[0].soldier_id);
          setlocation(data[0].location);

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
        'post_id' : post_id,
        'start_id' : start_date,
        'end_date' : end_date,
        'soldier_id': soldier_id,
        'location': location,
    
      }
  
      try{
        fetch(`http://localhost:3000/updateposting` ,
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
                  <label className="insert-label"> Post_ID : {post_id} </label>
                </td>
                <td className="input-row">
                  {/* <input  className="insert-input" type="text" value={soldier_id} 
                  onChange={(val) => {setsoldierid(val.target.value) }} ></input> */}
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">Start Date</label>
                </td>
                <td>
                  <input className="insert-input" type="date" required value={start_date}
                  onChange={(event) => {setstart_date(event.target.value)}}/>
                </td>
              </tr>

              <tr>
                <td>
                  <label className="insert-label">End Date</label>
                </td>
                <td>
                  <input className="insert-input" type="date" required value={end_date}
                  onChange={(event) => { setend_date(event.target.value) }}/>
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

              <tr>
                <td>
                  <label className="insert-label">Location</label>
                </td>
                <td>
                  <input className="insert-input" type="text" required value={location}
                  onChange={(event) => {setlocation(event.target.value)}}/>
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

export default Updatepostingvalues;