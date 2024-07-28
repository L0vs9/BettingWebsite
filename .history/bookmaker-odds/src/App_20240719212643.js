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
    const intervalId = setInterval(fetchData, 3000); // Update data every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Features</h1>
      </header>
      <section className="content">
        <div className="section">
          <h2>Bookmakers</h2>
          <p>
            The Odds API covers odds from several global bookmakers including
          </p>
          <div className="bookmakers">
            {data.bookmakers &&
              data.bookmakers.map((category, index) => (
                <div key={index}>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.list.map((bookmaker, idx) => (
                      <li key={idx}>{bookmaker}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <p>
            See the <a href="#">full list of bookmakers</a> →
          </p>
        </div>
        <div className="section">
          <h2>Sports</h2>
          <p>The Odds API provides odds data for several in-season sports</p>
          <div className="sports">
            {data.sports &&
              data.sports.map((sport, index) => (
                <div key={index}>
                  <h3>{sport.title}</h3>
                  <p>{sport.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
