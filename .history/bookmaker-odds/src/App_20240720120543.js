import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get("https://bettingscraperodds.onrender.com/data")
      .then((response) => {
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

  if (error) return <div className="widget-error">Error: {error}</div>;
  if (!data) return <div className="widget-loading">Loading...</div>;

  return (
    <div className="widget">
      <header className="widget-header">
        <h1>Sports Odds</h1>
      </header>
      <section className="widget-content">
        {data.map((match, index) => (
          <div key={index} className="match">
            <h2>
              {match.sportName} - {match.tournamentName}
            </h2>
            <p>
              <strong>Home:</strong> {match.home}
            </p>
            <p>
              <strong>Away:</strong> {match.away}
            </p>
            <p>
              <strong>Country:</strong> {match.countryName}
            </p>
            {match.urls.error ? (
              <p className="error">Error: {match.urls.error}</p>
            ) : (
              Object.keys(match.urls).map((key, idx) => (
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
              ))
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
