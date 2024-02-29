import { useEffect, useState } from "react";

import "../details.css";

function PostingDetails() {
  let [Postingdata, setPostingdata] = useState([]);

  let [posting, setpostingdetails] = useState("");
  let [result, setresult] = useState([]);

  // fetch details
  useEffect(() => {
    try {
      fetch("http://localhost:3000/postingdetails", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setPostingdata(data);
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
      posting: posting,
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
  }, [posting]);

  let details = posting ? result : Postingdata;

  return (
    <div>
      <div className="details-container">
        <input
          type="text"
          placeholder="Enter soldier_id or Name"
          className="searchbar"
          onChange={(val) => setpostingdetails(val.target.value)}
        />

        <table className="details-table">
          <tr>
            <th className="details-table-header"> Post_ID</th>
            <th className="details-table-header"> Soldier_ID</th>
            <th className="details-table-header"> Start_Date</th>
            <th className="details-table-header"> End_Date</th>
            <th className="details-table-header"> Location</th>
          </tr>

          {details.map((elem) => (
            <tr className="deatils-table-row">
              <td className="details-table-data">{elem.post_id}</td>
              <td className="details-table-data">{elem.soldier_id}</td>
              <td className="details-table-data">{elem.start_date.slice(0, 10)}</td>
              <td className="details-table-data">{elem.end_date.slice(0, 10)}</td>
              <td className="details-table-data">{elem.location}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default PostingDetails;
