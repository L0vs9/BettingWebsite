// src/Ev.js
import React, { useState, useEffect } from "react";
import "./Ev.css";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

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
        <section class="section-8" name="calculator">
          <div class="w-layout-blockcontainer container-2 w-container">
            <div
              id="w-node-_7006779d-c343-ac8e-fc54-9423bdde4876-c1a87a73"
              class="w-form"
            >
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="post"
                class="contact-form-2"
                data-wf-page-id="66a798c7ac0b5daec1a87a73"
                data-wf-element-id="7006779d-c343-ac8e-fc54-9423bdde4877"
              >
                <section class="section-2">
                  <div
                    id="w-node-_7006779d-c343-ac8e-fc54-9423bdde4879-c1a87a73"
                    class="div-block-2"
                  >
                    <label for="message" class="field-label-2">
                      Wager:
                    </label>
                  </div>
                  <div class="div-block-5">
                    <input
                      class="text-field-2 w-input"
                      maxlength="256"
                      name="Field-2"
                      data-name="Field 2"
                      placeholder="2.2"
                      type="text"
                      id="Field-3"
                      required=""
                    />
                  </div>
                </section>
                <section
                  id="w-node-_7006779d-c343-ac8e-fc54-9423bdde487e-c1a87a73"
                  class="section-3"
                >
                  <div class="div-block-3">
                    <label for="message" class="field-label-2">
                      <strong>Odds:</strong>
                    </label>
                  </div>
                  <div class="div-block-6">
                    <input
                      class="text-field-2 w-input"
                      maxlength="256"
                      name="field-5"
                      data-name="Field 5"
                      placeholder="$ 100"
                      type="text"
                      id="field-5"
                      required=""
                    />
                  </div>
                </section>
                <section
                  id="w-node-_7006779d-c343-ac8e-fc54-9423bdde4885-c1a87a73"
                  class="section-4"
                >
                  <div class="div-block-4">
                    <label for="message" class="field-label-2">
                      <strong>Win Probability</strong>
                    </label>
                  </div>
                  <div class="div-block-7">
                    <input
                      class="text-field-2 w-input"
                      maxlength="256"
                      name="field-2"
                      data-name="Field 2"
                      placeholder="$ 0.00"
                      type="text"
                      id="field-2"
                      required=""
                    />
                  </div>
                </section>
                <section
                  id="w-node-_7006779d-c343-ac8e-fc54-9423bdde488c-c1a87a73"
                  class="section-4"
                >
                  <div class="div-block-4">
                    <label for="message" class="field-label-2">
                      <strong>Expected Value</strong>
                    </label>
                  </div>
                  <div class="div-block-7">
                    <input
                      class="text-field-2 w-input"
                      maxlength="256"
                      name="field-2"
                      data-name="Field 2"
                      placeholder="$ 0.00"
                      type="text"
                      id="field-2"
                      required=""
                    />
                  </div>
                </section>
              </form>
              <div class="success-form-2 w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="error-form w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-5">
          <div className="scrollable-section">
            <div className="container">
              {games.map((game, index) => (
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
