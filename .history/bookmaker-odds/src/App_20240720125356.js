import React, { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get("https://bettingscraperodds.onrender.com/data")
      .then((response) => {
        console.log(response.data); // Inspect the structure here
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Update data every 30 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <LandingPage />
      {error && <div className="widget-error">Error: {error}</div>}
      {data && (
        <div className="widgets-container">
          {data
            .filter((match) => !match.urls.error)
            .map((match, index) => (
              <div key={index} className="widget">
                <header className="widget-header">
                  <h2>
                    {match.sportName} - {match.tournamentName}
                  </h2>
                </header>
                <section className="widget-content">
                  <p>
                    <strong>Home:</strong> {match.home}
                  </p>
                  <p>
                    <strong>Away:</strong> {match.away}
                  </p>
                  <p>
                    <strong>Country:</strong> {match.countryName}
                  </p>
                  {Object.keys(match.urls).map((key, idx) => (
                    <div key={idx}>
                      <h3>Odds Type: {key}</h3>
                      {Object.keys(match.urls[key]).map((bookmaker, id) => (
                        <div key={id} className="bookmaker">
                          <h4>{bookmaker}</h4>
                          <p>Home Win: {match.urls[key][bookmaker]["0"]}</p>
                          <p>Draw: {match.urls[key][bookmaker]["1"]}</p>
                          <p>Away Win: {match.urls[key][bookmaker]["2"]}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </section>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
