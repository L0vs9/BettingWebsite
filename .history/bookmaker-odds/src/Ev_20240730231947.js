import React, { useState, useEffect } from "react";

const EvCalculator = () => {
  const [games, setGames] = useState([]);
  const [positiveEvBets, setPositiveEvBets] = useState([]);
  const [selectedBet, setSelectedBet] = useState(null);
  const [wager, setWager] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://bettingscraperodds.onrender.com/data"
        );
        const data = await response.json();
        setGames(Object.values(data));
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    calculatePositiveEvBets();
  }, [games]);

  const calculatePositiveEvBets = () => {
    const positiveBets = [];
    games.forEach((game) => {
      Object.entries(game.urls).forEach(([market, bookmakers]) => {
        Object.entries(bookmakers).forEach(([bookmaker, odds]) => {
          Object.entries(odds).forEach(([outcome, odd]) => {
            const impliedProbability = 1 / odd;
            // Assume fair probability is 50% for simplicity. In a real scenario, you'd need a more sophisticated method to determine fair probability.
            const fairProbability = 0.5;
            const ev = odd * 100 * fairProbability - 100;
            if (ev > 0) {
              positiveBets.push({
                game: `${game.home} vs ${game.away}`,
                market,
                bookmaker,
                outcome,
                odd,
                ev: ev.toFixed(2),
                winProbability: (fairProbability * 100).toFixed(2),
              });
            }
          });
        });
      });
    });
    setPositiveEvBets(positiveBets);
  };

  const handleBetClick = (bet) => {
    setSelectedBet(bet);
    setWager("");
  };

  const calculateExpectedValue = () => {
    if (!selectedBet || !wager) return 0;
    const stake = parseFloat(wager);
    return (
      selectedBet.odd * stake * (selectedBet.winProbability / 100) -
      stake
    ).toFixed(2);
  };

  return (
    <div>
      <h2>Positive EV Bets</h2>
      <ul>
        {positiveEvBets.map((bet, index) => (
          <li key={index} onClick={() => handleBetClick(bet)}>
            {bet.game} - {bet.market} - {bet.bookmaker} - {bet.outcome} - Odds:{" "}
            {bet.odd} - EV: {bet.ev}%
          </li>
        ))}
      </ul>

      <h2>EV Calculator</h2>
      {selectedBet && (
        <div>
          <p>
            Selected Bet: {selectedBet.game} - {selectedBet.market} -{" "}
            {selectedBet.outcome}
          </p>
          <p>Odds: {selectedBet.odd}</p>
          <p>Win Probability: {selectedBet.winProbability}%</p>
          <label>
            Wager: $
            <input
              type="number"
              value={wager}
              onChange={(e) => setWager(e.target.value)}
            />
          </label>
          <p>Expected Value: ${calculateExpectedValue()}</p>
        </div>
      )}
    </div>
  );
};

export default EvCalculator;
