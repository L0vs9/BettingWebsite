import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://0.0.0.0:5000/data")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sports Odds</h1>
      </header>
      <section>
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
                    <div key={id}>
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
