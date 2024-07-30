// src/Ac.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ac.css";
import { Link as ScrollLink, Element } from "react-scroll";

const Ac = () => {
  return (
    <html
      data-wf-domain="lukas-dapper-site-ff64cc.webflow.io"
      data-wf-page="66a798c7ac0b5daec1a87a71"
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
        <link href="./Ac.css" rel="stylesheet" type="text/css" />
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
        <meta name="robots" content="noindex" />
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
              <nav role="navigation" class="nav-menu-wrapper-2 w-nav-menu">
                <ul role="list" class="nav-menu-2 w-list-unstyled">
                  <li>
                    <a href="#" class="nav-link-2">
                      Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link-2">
                      Expected Value Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link-2">
                      Arbitrage Calculator
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link-2">
                      SportsBooks
                    </a>
                  </li>
                </ul>
                <div class="nav-menu-cta-2">
                  <a href="#" class="button w-button">
                    Log Out
                  </a>
                </div>
              </nav>
              <div class="menu-button-2 w-nav-button">
                <div class="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
          <div class="container">
            <section class="home-hero-section">
              <div class="container right-no-margin">
                <div class="home-hero-grid">
                  <div
                    id="w-node-d455df47-19e3-1eda-1d6e-e6bf34b261d1-c1a87a71"
                    class="home-hero-left"
                  >
                    <h1 class="display-heading-1">
                      <span class="text-color-primary-gradient">
                        Arbitrage Calculator
                      </span>
                      .
                    </h1>
                    <p>
                      Hedge bet calculators are essential for reducing risk in
                      sports betting. Arbitrage betting involves placing
                      proportional bets on all possible outcomes across
                      different bookmakers to ensure a profit regardless of the
                      result.
                      <br />
                      <strong>
                        <em>
                          Our sports betting arbitrage calculator helps you:
                          <br />- Determine how to hedge a bet
                          <br />- Lock in returns
                          <br />- Capitalize on odds discrepancies between
                          bookmakers
                          <br />‍
                        </em>
                      </strong>
                      <br />
                      <strong>
                        <em>
                          To use:
                          <br />- Enter odds for a two-way market
                          <br />- Input your stake on one side
                          <br />- Calculator shows required stake on the other
                          side and potential profit
                        </em>
                      </strong>
                    </p>
                    <a href="#" class="button w-button">
                      Arbitrage Calculator
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="w-node-d455df47-19e3-1eda-1d6e-e6bf34b261f0-c1a87a71"
                class="w-form"
              >
                <form
                  id="email-form"
                  name="ac-eamil-form"
                  data-name="Email Form"
                  method="post"
                  class="contact-form-2"
                  data-wf-page-id="66a798c7ac0b5daec1a87a71"
                  data-wf-element-id="d455df47-19e3-1eda-1d6e-e6bf34b261f1"
                >
                  <section class="section-2">
                    <div
                      id="w-node-d455df47-19e3-1eda-1d6e-e6bf34b261f3-c1a87a71"
                      class="div-block-2"
                    >
                      <label for="message" class="field-label-2">
                        {" "}
                        Odds:
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
                    id="w-node-d455df47-19e3-1eda-1d6e-e6bf34b261f9-c1a87a71"
                    class="section-3"
                  >
                    <div class="div-block-3">
                      <label for="message" class="field-label-2">
                        <strong>Stake:</strong>
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
                      <input
                        class="text-field-2 w-input"
                        maxlength="256"
                        name="field-4"
                        data-name="Field 4"
                        placeholder="$ 100"
                        type="text"
                        id="field-4"
                        required=""
                      />
                    </div>
                  </section>
                  <section
                    id="w-node-d455df47-19e3-1eda-1d6e-e6bf34b26201-c1a87a71"
                    class="section-4"
                  >
                    <div class="div-block-4">
                      <label for="message" class="field-label-2">
                        <strong>Payout:</strong>
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
                    id="w-node-_0afdc14e-c836-efec-201f-7171f9214a76-c1a87a71"
                    class="section-4"
                  >
                    <div class="div-block-4">
                      <label for="message" class="field-label-2">
                        <strong>Total Stake:</strong>
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
                    id="w-node-_88cbff6e-ea8e-46dc-3c23-0bc28e6957ec-c1a87a71"
                    class="section-4"
                  >
                    <div class="div-block-4">
                      <label for="message" class="field-label-2">
                        <strong>Total Payout:</strong>
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
        <section class="section-7">
          <ScrollLink
            to="ac-email-form"
            smooth={true}
            duration={500}
            class="nav-link"
          >
            <div
              id="w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658f9-c1a87a71"
              class="licenses-item-2"
            >
              <h4 id="w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658fa-c1a87a71">
                <strong>Photography</strong>
              </h4>
              <p
                id="w-node-_5ea33a1d-1f91-6939-ba17-7d1d311658fd-c1a87a71"
                class="large-paragraph"
              >
                Mura
              </p>
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

export default Ac;
