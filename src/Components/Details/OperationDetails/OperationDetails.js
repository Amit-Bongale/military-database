import { useEffect, useState } from "react";

import "../details.css";
function OperationDetails() {
  let [Operationdata, setOperationdata] = useState([]);

  let [operation, setoperationdetails] = useState("");
  let [result, setresult] = useState([]);

  // fetch operations
  useEffect(() => {
    try {
      fetch("http://localhost:3000/operationdetails", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setOperationdata(data);
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
      operation: operation,
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
  }, [operation]);

  let details = operation ? result : Operationdata;

  return (
    <div>
      <div className="details-container">
        <input
          type="text"
          placeholder="Enter soldier_id or Name"
          className="searchbar"
          onChange={(val) => setoperationdetails(val.target.value)}
        />

        <table className="details-table">
          <tr>
            <th className="details-table-header"> Operation_ID</th>
            <th className="details-table-header"> Operation_Name</th>
            <th className="details-table-header"> Outcome</th>
            <th className="details-table-header"> Start_date</th>
            <th className="details-table-header"> End_date</th>
            <th className="details-table-header"> Soldier_ID</th>
          </tr>

          {details.map((elem) => (
            <tr className="deatils-table-row">
              <td className="details-table-data">{elem.operation_id}</td>
              <td className="details-table-data">{elem.operation_name}</td>
              <td className="details-table-data">{elem.outcome}</td>
              <td className="details-table-data">{elem.start_date.slice(0, 10)}</td>
              <td className="details-table-data">{elem.end_date.slice(0, 10)}</td>
              <td className="details-table-data">{elem.solider_id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default OperationDetails;
