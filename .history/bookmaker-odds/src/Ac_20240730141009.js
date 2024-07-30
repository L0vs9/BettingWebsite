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
    <div className="ac">
      <h1>Arbitrage Opportunities</h1>
      {acData.length === 0 ? (
        <p>No arbitrage opportunities available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Profit Percentage</th>
              <th>Stake Distribution</th>
            </tr>
          </thead>
          <tbody>
            {acData.map((opportunity, index) => (
              <tr key={index}>
                <td>{opportunity.ProfitPercentage}%</td>
                <td>
                  {Object.entries(opportunity.StakeDistribution).map(
                    ([outcome, stake]) => (
                      <div key={outcome}>
                        {outcome}: {stake}%
                      </div>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Ac;
