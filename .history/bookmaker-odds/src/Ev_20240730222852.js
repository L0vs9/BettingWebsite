// src/Ev.js
import React, { useState, useEffect } from "react";
import "./Ev.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Ev = () => {
  const [games, setGames] = useState([]);
  const [positiveEvBets, setPositiveEvBets] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://bettingscraperodds.onrender.com/data"
        );
        const data = await response.json();
        setGames(Object.values(data));
        findPositiveEVBets(Object.values(data));
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGames();
  }, []);

  const findPositiveEVBets = (games) => {
    const stake = 100; // Assuming the stake amount is 100
    const positiveBets = [];

    games.forEach((game) => {
      Object.entries(game.urls).forEach(([market, bookmakers]) => {
        Object.entries(bookmakers).forEach(([bookmaker, odds]) => {
          Object.entries(odds).forEach(([outcome, odd]) => {
            const winProbability = 1 / odd; // Implied probability
            const ev = odd * winProbability * stake - stake;

            if (ev > 0) {
              positiveBets.push({
                game: `${game.home} vs ${game.away}`,
                market,
                bookmaker,
                outcome,
                odd,
                ev: ev.toFixed(2),
                winProbability: (winProbability * 100).toFixed(2),
              });
            }
          });
        });
      });
    });

    setPositiveEvBets(positiveBets);
  };

  return (
    <div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-container-2 w-nav"
      >
        <div className="container">
          <div className="navbar-wrapper-2">
            <a href="#" className="navbar-brand w-nav-brand">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/66a798c7ac0b5daec1a87a8c_logo.svg"
                alt=""
                className="nav-logo"
              />
            </a>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu-2 w-list-unstyled">
                <li>
                  <Link to="/dashboard" className="nav-link-2">
                    Guide
                  </Link>
                </li>
                <li>
                  <Link to="/ev" className="nav-link-2">
                    Expected Value
                  </Link>
                </li>
                <li>
                  <Link to="/ac" className="nav-link-2">
                    Arbitrage Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="nav-link-2">
                    SportsBooks
                  </Link>
                </li>
              </ul>
              <div className="nav-menu-cta-2">
                <Link to="/" className="button w-button">
                  Log Out
                </Link>
              </div>
            </nav>
            <div className="menu-button-2 w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
          <div className="container"></div>
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
              data-wf-page-id="66a798c7ac0b5daec1a87a73"
              data-wf-element-id="7006779d-c343-ac8e-fc54-9423bdde4877"
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
                    data-name="wager"
                    placeholder="Enter wager"
                    type="text"
                    id="wager"
                    required=""
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
                    data-name="odds"
                    placeholder="Enter odds"
                    type="text"
                    id="odds"
                    required=""
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
                    data-name="winProbability"
                    placeholder="Enter win probability"
                    type="text"
                    id="winProbability"
                    required=""
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
                    data-name="expectedValue"
                    placeholder="Calculated EV"
                    type="text"
                    id="expectedValue"
                    required=""
                  />
                </div>
              </section>
            </form>
            <div className="success-form-2 w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-form w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div className="scrollable-section">
          <div className="container">
            {positiveEvBets.length > 0 ? (
              positiveEvBets.map((bet, index) => (
                <ScrollLink
                  key={index}
                  to="calculator"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  <div
                    id={`w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658f9-c1a87a71-${index}`}
                    className="licenses-item-2"
                  >
                    <h4
                      id={`w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658fa-c1a87a71-${index}`}
                    >
                      <strong>{bet.game}</strong>
                    </h4>
                    <p className="large-paragraph">
                      Market: {bet.market} - {bet.bookmaker} - {bet.outcome} @{" "}
                      {bet.odd}
                    </p>
                    <p className="game-details">
                      Expected Value: {bet.ev} | Win Probability:{" "}
                      {bet.winProbability}%
                    </p>
                  </div>
                </ScrollLink>
              ))
            ) : (
              <p>No positive EV bets available.</p>
            )}
          </div>
        </div>
      </section>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66a798c7ac0b5daec1a87a18"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/66a798c7ac0b5daec1a87a18/js/webflow.a92efb1b7.js"
        type="text/javascript"
      ></script>
    </div>
  );
};

export default Ev;
