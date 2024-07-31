// src/Ev.js
import React, { useState, useEffect } from "react";
import "./Ev.css";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";

const Ev = () => {
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
        const betfairOdds = bookmakers["Betfair Exchange"];
        if (!betfairOdds) return; // Skip if no Betfair odds available

        Object.entries(bookmakers).forEach(([bookmaker, odds]) => {
          if (bookmaker === "Betfair Exchange") return; // Skip Betfair itself

          Object.entries(odds).forEach(([outcome, odd]) => {
            const betfairOdd = betfairOdds[outcome];
            if (!betfairOdd) return; // Skip if no corresponding Betfair odd

            const impliedProbability = 1 / odd;
            const fairProbability = 1 / betfairOdd;
            const ev = odd * 100 * fairProbability - 100;

            if (ev > 0) {
              positiveBets.push({
                game: `${game.home} vs ${game.away}`,
                market,
                bookmaker,
                outcome,
                odd,
                betfairOdd,
                ev: ev.toFixed(2),
                winProbability: (fairProbability * 100).toFixed(2),
              });
            }
          });
        });
      });
    });
    positiveBets.sort(
      (a, b) => parseFloat(b.winProbability) - parseFloat(a.winProbability)
    );

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
    <html
      data-wf-domain="lukas-dapper-site-ff64cc.webflow.io"
      data-wf-page="66a798c7ac0b5daec1a87a73"
      data-wf-site="66a798c7ac0b5daec1a87a18"
      data-wf-status="1"
      lang="en"
    >
      <head>
        <meta charset="utf-8" />
        <title>Zenden - Webflow HTML website template</title>
        <meta
          content="Zenden - Webflow HTML website template"
          property="og:title"
        />
        <meta
          content="Zenden - Webflow HTML website template"
          property="twitter:title"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/css/lukas-dapper-site-ff64cc.webflow.cc7b235a4.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossorigin="anonymous"
        />
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        ></script>

        <link
          href="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/66a798c7ac0b5daec1a87ab9_fav.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/66a798c7ac0b5daec1a87aba_webclip.png"
          rel="apple-touch-icon"
        />
      </head>
      <body>
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          class="navbar-container-2 w-nav"
        >
          <div class="container">
            <div class="navbar-wrapper-2">
              <a href="#" class="navbar-brand w-nav-brand">
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/66a798c7ac0b5daec1a87a8c_logo.svg"
                  alt=""
                  class="nav-logo"
                />
              </a>
              <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                <ul role="list" class="nav-menu-2 w-list-unstyled">
                  <li>
                    <Link to="/dashboard" class="nav-link-2">
                      Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/ev" class="nav-link-2">
                      Expected Value
                    </Link>
                  </li>
                  <li>
                    <Link to="/ac" class="nav-link-2">
                      Arbitrage Calculator
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" class="nav-link-2">
                      SportsBooks
                    </Link>
                  </li>
                </ul>
                <div class="nav-menu-cta-2">
                  <Link to="/" class="button w-button">
                    Log Out
                  </Link>
                </div>
              </nav>
              <div class="menu-button-2 w-nav-button">
                <div class="w-icon-nav-menu"></div>
              </div>
            </div>
            <div class="container"></div>
          </div>
        </div>
        <section className="section-8" name="calculator">
          <div className="w-layout-blockcontainer container-2 w-container">
            <div
              id="w-node-_7006779d-c343-ac8e-fc54-9423bdde4876-c1a87a73"
              className="w-form"
            >
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="post"
                className="contact-form-2"
              >
                <section className="section-2">
                  <div
                    id="w-node-_7006779d-c343-ac8e-fc54-9423bdde4879-c1a87a73"
                    className="div-block-2"
                  >
                    <label htmlFor="wager" className="field-label-2">
                      Wager:
                    </label>
                  </div>
                  <div className="div-block-5">
                    <input
                      className="text-field-2 w-input"
                      maxLength="256"
                      name="wager"
                      placeholder="2.2"
                      type="number"
                      id="wager"
                      required=""
                      value={wager}
                      onChange={(e) => setWager(e.target.value)}
                    />
                  </div>
                </section>
                <section
                  id="w-node-_7006779d-c343-ac8e-fc54-9423bdde487e-c1a87a73"
                  className="section-3"
                >
                  <div className="div-block-3">
                    <label htmlFor="odds" className="field-label-2">
                      <strong>Odds:</strong>
                    </label>
                  </div>
                  <div className="div-block-6">
                    <input
                      className="text-field-2 w-input"
                      maxLength="256"
                      name="odds"
                      placeholder="$ 100"
                      type="text"
                      id="odds"
                      required=""
                      value={selectedBet ? selectedBet.odd : ""}
                      readOnly
                    />
                  </div>
                </section>
                <section
                  id="w-node-_7006779d-c343-ac8e-fc54-9423bdde4885-c1a87a73"
                  className="section-4"
                >
                  <div className="div-block-4">
                    <label htmlFor="winProbability" className="field-label-2">
                      <strong>Win Probability</strong>
                    </label>
                  </div>
                  <div className="div-block-7">
                    <input
                      className="text-field-2 w-input"
                      maxLength="256"
                      name="winProbability"
                      placeholder="$ 0.00"
                      type="text"
                      id="winProbability"
                      required=""
                      value={
                        selectedBet ? `${selectedBet.winProbability}%` : ""
                      }
                      readOnly
                    />
                  </div>
                </section>
                <section
                  id="w-node-_7006779d-c343-ac8e-fc54-9423bdde488c-c1a87a73"
                  className="section-4"
                >
                  <div className="div-block-4">
                    <label htmlFor="expectedValue" className="field-label-2">
                      <strong>Expected Value</strong>
                    </label>
                  </div>
                  <div className="div-block-7">
                    <input
                      className="text-field-2 w-input"
                      maxLength="256"
                      name="expectedValue"
                      placeholder="$ 0.00"
                      type="text"
                      id="expectedValue"
                      required=""
                      value={`$ ${calculateExpectedValue()}`}
                      readOnly
                    />
                  </div>
                </section>
              </form>
            </div>
          </div>
        </section>
        <section className="section-5">
          
              {positiveEvBets.map((bet, index) => (
                <ScrollLink
                  key={index}
                  to="calculator"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  <div
                    id={`w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658f9-c1a87a71-${index}`}
                    className="licenses-item-2"
                  >
                  <div className="scrollable-section">
                    <div className="ev-container">
                    <li key={index} onClick={() => handleBetClick(bet)}>
                      {bet.game} - {bet.market} - {bet.bookmaker} -{" "}
                      {bet.outcome} - Odds: {bet.odd} - Betfair Odds:{" "}
                      {bet.betfairOdd} - EV: {bet.ev}%
                    </li>
                  </div>
                </ScrollLink>
              ))}
            
        </section>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66a798c7ac0b5daec1a87a18"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/js/webflow.a92efb1b7.js"
          type="text/javascript"
        ></script>
      </body>
    </html>
  );
};

export default Ev;
/*
<div>
  <ul>
    {positiveEvBets.map((bet, index) => (
      <li key={index} onClick={() => handleBetClick(bet)}>
        {bet.game} - {bet.market} - {bet.bookmaker} - {bet.outcome} - Odds:{" "}
        {bet.odd} - Betfair Odds: {bet.betfairOdd} - EV: {bet.ev}%
      </li>
    ))}
  </ul>
</div>;
*/
/*

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
        const betfairOdds = bookmakers["Betfair Exchange"];
        if (!betfairOdds) return; // Skip if no Betfair odds available

        Object.entries(bookmakers).forEach(([bookmaker, odds]) => {
          if (bookmaker === "Betfair Exchange") return; // Skip Betfair itself

          Object.entries(odds).forEach(([outcome, odd]) => {
            const betfairOdd = betfairOdds[outcome];
            if (!betfairOdd) return; // Skip if no corresponding Betfair odd

            const impliedProbability = 1 / odd;
            const fairProbability = 1 / betfairOdd;
            const ev = odd * 100 * fairProbability - 100;

            if (ev > 0) {
              positiveBets.push({
                game: `${game.home} vs ${game.away}`,
                market,
                bookmaker,
                outcome,
                odd,
                betfairOdd,
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
            {bet.odd} - Betfair Odds: {bet.betfairOdd} - EV: {bet.ev}%
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
          <p>Betfair Odds (Fair Probability): {selectedBet.betfairOdd}</p>
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

*/

/*
 <section className="section-5">
          <div className="scrollable-section">
            <div className="ev-container">
              {games.map((game, index) => (
                <ScrollLink
                  key={index}
                  to="calculator"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  <div
                    id={`w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658f9-c1a87a71-${index}`}
                    className="licenses-item-2"
                  >
                    <h4
                      id={`w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658fa-c1a87a71-${index}`}
                    >
                      <strong>{game.tournamentName}</strong>
                    </h4>
                    <p
                      id={`w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658fd-c1a87a71-${index}`}
                      className="large-paragraph"
                    >
                      {game.home} vs {game.away}
                    </p>
                    <p className="game-details">
                      Date: {game.date} | Time: {game.time}
                    </p>
                    <p className="odds">
                      Home: {game.homeOdds} | Draw: {game.drawOdds} | Away:{" "}
                      {game.awayOdds}
                    </p>
                  </div>
                </ScrollLink>
              ))}
            </div>
          </div>
        </section>

*/
