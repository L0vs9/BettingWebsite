// src/Ev.js
import React, { useState, useEffect } from "react";
import "./Ev.css";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";

const Ev = () => {
  const [games, setGames] = useState([]);

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
        <link href="./Ev.css" rel="stylesheet" type="text/css" />
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
            <div class="container">
              <section class="home-hero-section">
                <div class="container right-no-margin">
                  <div class="home-hero-grid">
                    <div
                      id="w-node-d4bb1674-4365-972c-c500-d6687c54e5f2-c1a87a73"
                      class="home-hero-left"
                    >
                      <h1 class="display-heading-1">
                        <span class="text-color-primary-gradient">
                          Expected Value Calculator.
                        </span>
                      </h1>
                      <p>
                        <strong>
                          How to Use an Expected Value Calculator
                          <br />‍
                        </strong>
                        The Zenden expected value (EV) calculator determines
                        your profit margin over the sportsbook for a given
                        wager. It requires three inputs:
                        <br />- Your stake
                        <br />- Odds of your wager
                        <br />- Implied win percentage of your bet
                        <br />‍<br />
                        <strong>
                          <em>
                            Example:
                            <br />- $100 bet on Team A at +110 odds
                            <br />- True win probability: 50%
                            <br />- Calculator shows: EV = $5
                          </em>
                        </strong>
                        <br />‍<br />
                        Positive EV (+$5) means the bet is profitable
                        long-term.Negative EV means avoid the bet.Use this to
                        make smarter bets and increase your odds of winning over
                        time.
                      </p>
                      <a href="#" class="button w-button">
                        <strong>Expected Value Calculator</strong>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-d4bb1674-4365-972c-c500-d6687c54e615-c1a87a73"
                  class="w-form"
                >
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="post"
                    class="contact-form-2"
                    data-wf-page-id="66a798c7ac0b5daec1a87a73"
                    data-wf-element-id="d4bb1674-4365-972c-c500-d6687c54e616"
                  >
                    <section class="section-2">
                      <div
                        id="w-node-d4bb1674-4365-972c-c500-d6687c54e618-c1a87a73"
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
                      id="w-node-d4bb1674-4365-972c-c500-d6687c54e61d-c1a87a73"
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
                      id="w-node-d4bb1674-4365-972c-c500-d6687c54e624-c1a87a73"
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
                      id="w-node-d4bb1674-4365-972c-c500-d6687c54e62b-c1a87a73"
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
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section class="section-5">
          <ScrollLink
            to="ac-email-form"
            smooth={true}
            duration={500}
            class="nav-link"
          >
            <div className="ev-container">
              {games.map((game, index) => (
                <ScrollLink
                  key={index}
                  to={`game-${index}`}
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
          </ScrollLink>
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
