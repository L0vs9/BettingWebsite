// src/Ev.js
import React, { useState, useEffect } from "react";
import "./Ev.css";

const Ev = () => {
  const [evData, setEvData] = useState([]);

  useEffect(() => {
    // Fetch the EV data from your backend or a static JSON file
    fetch("/path/to/ev/data.json")
      .then((response) => response.json())
      .then((data) => setEvData(data))
      .catch((error) => console.error("Error fetching EV data:", error));
  }, []);

  return (
    <div className="ev">
      <h1>EV Opportunities</h1>
      {evData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Bookmaker</th>
              <th>Market</th>
              <th>Outcome</th>
              <th>Odd</th>
              <th>Fair Win Decimal</th>
              <th>EV Percent</th>
              <th>Kelly Percent</th>
            </tr>
          </thead>
          <tbody>
            {evData.map((ev, index) => (
              <tr key={index}>
                <td>{ev.Bookmaker}</td>
                <td>{ev.Market}</td>
                <td>{ev.Outcome}</td>
                <td>{ev.Odd}</td>
                <td>{ev.FairWinDec}</td>
                <td>{ev.EVPercent}</td>
                <td>{ev.KellyPercent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No EV opportunities available.</p>
      )}
    </div>
  );
};

export default Ev;
