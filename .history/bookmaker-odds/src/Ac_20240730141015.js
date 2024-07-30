// src/Ac.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ac.css";

const Ac = () => {
  const [acData, setAcData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch Arbitrage data from the API or Redis
    axios
      .get("/api/arbitrage-opportunities")
      .then((response) => {
        setAcData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    
  );
};

export default Ac;
