import { useEffect, useState } from "react";

import "../Delete.css";

function DeleteOperation() {
  let [Operationdata, setOperationdata] = useState([]);
  let [deleteoperation, setdeleted] = useState("");

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
  }, [deleteoperation]);

  function deletedata(id) {

    console.log(id);
    

    let bodyData = {
      'operation_id': id,
    };

    try {
      fetch("http://localhost:3000/deleteoperation", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .catch((error) => {
          console.log("Error fetching data:", error);
        });

      alert("Operation Deleted Sucessfully");
    } catch (error) {
      console.error("Error:", error);
    }

    setdeleted(id);
  }

  return (
    <div>
      <div className="details-container">
        <table className="details-table">
          <tr>
            <th className="details-table-header"> Operation ID</th>
            <th className="details-table-header"> Operation Name</th>
            <th className="details-table-header"> Outcome </th>
            <th className="details-table-header"> Start Date </th>
            <th className="details-table-header"> End Date </th>
            <th className="details-table-header"> Soldier ID </th>
            <th className="details-table-header"> Department_ID</th>
            <th className="details-table-header"> </th>

          </tr>

          {Operationdata.map((elem) => (
            <tr key={elem.operation_id} className="deatils-table-row">
              <td className="details-table-data">{elem.operation_id}</td>
              <td className="details-table-data">{elem.operation_name}</td>
              <td className="details-table-data">{elem.outcome}</td>
              <td className="details-table-data">{elem.start_date.slice(0, 10)} </td>
              <td className="details-table-data">{elem.end_date.slice(0, 10)}</td>
              <td className="details-table-data">{elem.soldier_id}</td>
              <td className="details-table-data">{elem.department_id}</td>

              <td className="details-table-data">
                <button
                  className="deletebutton"
                  onClick={() => {
                    deletedata(elem.operation_id);
                  }}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default DeleteOperation;
