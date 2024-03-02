import { useEffect, useState } from "react";

import "../details.css";
function MedalDetails() {
  let [Medaldata, setMedaldata] = useState([]);

  let [medals, setmedaldetails] = useState("");
  let [result, setresult] = useState([]);

  // Fetch medals
  useEffect(() => {
    try {
      fetch("http://localhost:3000/medaldetails", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setMedaldata(data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  // Search Function
  useEffect(() => {
    let data = {
      medals: medals,
    };

    try {
      fetch("http://localhost:3000/searchposting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setresult(data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [medals]);

  let details = medals ? result : Medaldata;

  return (
    <div>
      <div className="details-container">
        <input
          type="text"
          placeholder="Enter soldier_id or Name"
          className="searchbar"
          onChange={(val) => setmedaldetails(val.target.value)}
        />

        <table className="details-table">
          <tr>
            <th className="details-table-header"> Medal_ID</th>
            <th className="details-table-header"> Medal_Name</th>
            <th className="details-table-header"> Soldier_ID</th>
          </tr>

          {details.map((elem) => (
            <tr className="deatils-table-row">
              <td className="details-table-data">{elem.medal_id}</td>
              <td className="details-table-data">{elem.medal_name}</td>
              <td className="details-table-data">{elem.soldier_id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MedalDetails;
