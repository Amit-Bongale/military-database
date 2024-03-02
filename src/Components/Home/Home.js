import { useState, useEffect } from "react";
import "./home.css";

// import bg from '../../Assets/Images/military-soldier.jpg'

function Home() {

  let [data, setdata] = useState([]);

  let [search, setsearch] = useState('');

  let [soldiercount , setsoldiercount] = useState([])

  // Search Function
  useEffect(() => {

    let data = {
      'data': search,
    };

    try {
      fetch("http://localhost:3000/searchalldetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data)
          setdata(data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [search]);

  
  useEffect(() => {
    try {
      fetch("http://localhost:3000/countsoldiers", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data count:", data);
          setsoldiercount(data[0].no_of_soldier);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return (
    <div className="home-main-container">
      <div className="home-content-container">
        <div className="home-content">
            <h1 className="home-dbname"> Military Database </h1>

            <input
            type="text"
            placeholder="Search"
            className="searchbar"
            onChange={(val) => setsearch(val.target.value)}
            />
        </div>

        {search && (
          <div className="table">
            <table className="details-table">
              <tr>
                <th className="details-table-header"> Soldier ID</th>
                <th className="details-table-header"> Name</th>
                <th className="details-table-header"> Dept_id</th>
                <th className="details-table-header"> Dept_name</th>
                <th className="details-table-header"> Operation Name</th>
                <th className="details-table-header"> Outcome</th>
                <th className="details-table-header"> post_id</th>
                <th className="details-table-header"> medal Name</th>

              </tr>

              {data.map((elem) => (
                <tr className="deatils-table-row">
                  <td className="details-table-data">{elem.soldier_id}</td>
                  <td className="details-table-data">{elem.soldier_name}</td>
                  <td className="details-table-data">{elem.department_id}</td>
                  <td className="details-table-data">{elem.department_Name}</td>
                  <td className="details-table-data">{elem.operation_name}</td>
                  <td className="details-table-data">{elem.outcome}</td>
                  <td className="details-table-data">{elem.posting_id}</td>
                  <td className="details-table-data">{elem.medal_name}</td>
                </tr>
              ))}
            </table>
          </div>
        )}

        <div className="home-cards">
          <div className="data-card">
            <h2>No of Soldier</h2>
            <h1> {soldiercount} </h1>
          </div>

          <div className="data-card">
            <h2>No of department</h2>
            <h1> 3 </h1>
          </div>

          <div className="data-card flex">

            <div className="data-card-details">
              <h2>operations</h2>
              <h1> 2</h1>
            </div>

            {/* <div className="data-card-details">
              <h2> Status </h2>
              <h1> sucess</h1>
            </div>
     */}
          </div>

        </div>

        


      </div>
    </div>
  );
}

export default Home;
