import { useEffect, useState } from "react";

import "../details.css";

function DepartmentDetails() {
  let [Departmentdata, setDepartmentdata] = useState([]);

  let [department, setdepartmentdetails] = useState("");
  let [result, setresult] = useState([]);

  // fetch department
  useEffect(() => {
    try {
      fetch("http://localhost:3000/departmentdetails", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setDepartmentdata(data);
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
      department: department,
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
  }, [department]);

  let details = department ? result : Departmentdata;

  return (
    <div>
      <div className="details-container">
        <input
          type="text"
          placeholder="Enter soldier_id or Name"
          className="searchbar"
          onChange={(val) => setdepartmentdetails(val.target.value)}
        />

        <table className="details-table">
          <tr>
            <th className="details-table-header"> Department_ID</th>
            <th className="details-table-header"> Department_Name</th>
            <th className="details-table-header"> Department_Location</th>
            <th className="details-table-header"> Soldier_ID</th>
          </tr>

          {details.map((elem) => (
            <tr className="deatils-table-row">
              <td className="details-table-data">{elem.department_id}</td>
              <td className="details-table-data">{elem.department_Name}</td>
              <td className="details-table-data">{elem.department_Location}</td>
              <td className="details-table-data">{elem.soldier_id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default DepartmentDetails;
