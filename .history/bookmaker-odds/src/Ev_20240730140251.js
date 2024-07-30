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
    
  );
};

export default Ev;
