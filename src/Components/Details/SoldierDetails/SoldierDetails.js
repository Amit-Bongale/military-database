import { useEffect, useState } from "react";

function SoldierDetails() {
  let [Soldierdata, setsoldierdata] = useState([]);

  let [soldier, setsoldierdetails] = useState("");
  let [result, setresult] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/soldierdetails", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setsoldierdata(data);
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
      'soldier': soldier
    };

    try {
      fetch("http://localhost:3000/searchsoldier", {
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
  }, [soldier]);

  let details = soldier ? result : Soldierdata;

  return (
    <div>
      <div className="details-container">
        <input
          type="text"
          placeholder="Enter soldier_id or Name"
          className="searchbar"
          onChange={(val) => setsoldierdetails(val.target.value)}
        />

        <table className="details-table">
          <tr>
            <th className="details-table-header"> Soldier ID</th>
            <th className="details-table-header"> Name</th>
            <th className="details-table-header"> Date of birth</th>
            <th className="details-table-header"> Gender</th>
            <th className="details-table-header"> Address</th>
            <th className="details-table-header"> Salary</th>
            <th className="details-table-header"> Department_ID</th>
          </tr>

          {details.map((elem) => (
            <tr className="deatils-table-row">
              <td className="details-table-data">{elem.soldier_id}</td>
              <td className="details-table-data">{elem.name}</td>
              <td className="details-table-data">{elem.dob.slice(0, 10)}</td>
              <td className="details-table-data">{elem.gender}</td>
              <td className="details-table-data">{elem.address}</td>
              <td className="details-table-data">{elem.salary}</td>
              <td className="details-table-data">{elem.department_id}</td>

            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default SoldierDetails;
