import React, { useEffect } from "react";
import "./Zenden.css"; // Ensure you create this CSS file
import { Link as ScrollLink, Element } from "react-scroll";

const Zenden = () => {
  useEffect(() => {
    // Load Google Web Fonts
    const webFontScript = document.createElement("script");
    webFontScript.src =
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
    webFontScript.type = "text/javascript";
    webFontScript.onload = () => {
      window.WebFont.load({
        google: {
          families: ["Work Sans:regular,500,600", "Mulish:regular,700"],
        },
      });
    };
    document.head.appendChild(webFontScript);

    // Add custom class based on touch support
    const addTouchClass = () => {
      const docEl = document.documentElement;
      const wMod = " w-mod-";
      docEl.className += wMod + "js";
    };
    addTouchClass();
  }, []);

  return (
    <html
      data-wf-domain="lukas-fantastic-site-2d7cd2.webflow.io"
      data-wf-page="65088655740ea01aaba3bc5b"
      data-wf-site="65088655740ea01aaba3bc2a"
      data-wf-status="1"
    >
      <head>
        <meta charset="utf-8" />
        <title>Zenden - Webflow HTML website template</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="./Zenden.css" rel="stylesheet" type="text/css" />
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
          href="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc95_fav.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc96_webclip.png"
          rel="apple-touch-icon"
        />
      </head>
      <body>
        <div class="navbar">
          <div
            data-animation="default"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            class="navbar-container w-nav"
          >
            <div class="container">
              <div class="navbar-wrapper">
                <a
                  href="/"
                  aria-current="page"
                  class="navbar-brand w-nav-brand w--current"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc76_logo.svg"
                    loading="lazy"
                    alt=""
                    class="nav-logo"
                  />
                </a>
                <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                  <ul role="list" class="nav-menu w-list-unstyled">
                    <li>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        class="nav-link"
                      >
                        About
                      </ScrollLink>

                      <ScrollLink
                        to="features"
                        smooth={true}
                        duration={500}
                        class="nav-link"
                      >
                        Features
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="pricing"
                        smooth={true}
                        duration={500}
                        class="nav-link"
                      >
                        Pricing
                      </ScrollLink>
                    </li>
                    <li>
                      <a href="/blog" class="nav-link">
                        FAQs
                      </a>
                      <ScrollLink
                        to="FAQs"
                        smooth={true}
                        duration={500}
                        class="nav-link"
                      >
                        FAQs
                      </ScrollLink>
                    </li>
                    <li></li>
                    <li class="list-item"></li>
                  </ul>
                  <div class="nav-menu-cta">
                    <a href="#" class="button muted w-button">
                      Log in
                    </a>
                    <a href="#" class="button w-button">
                      Sign up
                    </a>
                  </div>
                </nav>
                <div class="menu-button w-nav-button">
                  <div class="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="home-hero-section" name="about">
          <div class="container right-no-margin">
            <div class="home-hero-grid">
              <div
                id="w-node-b2e12125-c190-45ec-c0cd-abfcc0c780fb-aba3bc5b"
                class="home-hero-left"
              >
                <div class="subtitle"></div>
                <h1 class="display-heading-1">
                  Bet smarter
                  <div></div>
                  <span class="text-color-primary-gradient">with Zenden</span>.
                </h1>
                <p>
                  At Zenden, we use advanced data analysis to bring you the best
                  odds from multiple bookmakers. Our platform specializes in EV
                  (Expected Value) betting and arbitrage betting to ensure you
                  always place the most profitable bets.
                </p>
                <a href="#" class="button w-button">
                  Get Started
                </a>
                <p class="small-paragraph"></p>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
            loading="lazy"
            id="w-node-f2c32746-c749-900f-0aca-0ba4729df4ff-aba3bc5b"
            sizes="(max-width: 991px) 90vw, 50vw"
            alt=""
            srcset="
            https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png   500w,
            https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png   800w,
            https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
            https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
            https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
            https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp       2560w
          "
            class="home-hero-image"
          />
        </section>
        <div class="how-it-works-section">
          <div class="container">
            <div class="how-it-works-container">
              <div
                id="w-node-_1fd70e8c-79ac-8035-b4cb-a2c6bf5404f5-aba3bc5b"
                class="how-it-works-left"
              >
                <h2>
                  Be Smart,<div></div>
                  <span class="text-color-primary-gradient">
                    Win Big with Zenden
                  </span>
                  .
                </h2>
                <p>
                  Harness data analysis to place the most profitable bets.
                  Zenden&#x27;s tools and real-time insights help you maximize
                  your winnings with confidence.
                </p>
                <a href="#" class="button secondary w-button">
                  Get Started
                </a>
              </div>
              <div
                id="w-node-_424c595e-04cd-1954-8dc7-b4f16c82ad41-aba3bc5b"
                class="how-it-works-right"
              >
                <div
                  id="w-node-_61cf71b8-e0d5-34a3-4c17-9ecad9f647a5-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>EV Betting</h4>
                  <p>
                    Use data-driven strategies to find bets with positive
                    expected value.
                  </p>
                </div>
                <div
                  id="w-node-c57906fa-0c78-605c-6b4a-8ea26db6f48c-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Arbitrage Betting</h4>
                  <p>
                    Identify risk-free bets that guarantee a profit by betting
                    on all possible outcomes across different bookmakers.
                  </p>
                </div>
                <div
                  id="w-node-_04a70456-1a30-3cc7-ca34-6eb6a0d99e42-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Real-Time Odds</h4>
                  <p>Instantly updated odds from all major bookmakers.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="_2-grid-feature-section">
            <div class="container">
              <div class="_3-grid-feature-container">
                <h2>
                  Why do customers use
                  <span class="text-color-primary-gradient"> Zenden?</span>
                </h2>
              </div>
              <div class="_3-grid-feature-grid">
                <div
                  id="w-node-_4011f03f-b1c5-b5ea-dfc0-f8c8f4545ba8-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Consistent Wins</h4>
                  <p>
                    Zenden’s data-driven approach helps users consistently find
                    the most profitable bets.
                  </p>
                </div>
                <div
                  id="w-node-_4011f03f-b1c5-b5ea-dfc0-f8c8f4545bae-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Easy to Use</h4>
                  <p>
                    Our user-friendly interface makes navigating and placing
                    bets simple, even for beginners.
                  </p>
                </div>
                <div
                  id="w-node-_4011f03f-b1c5-b5ea-dfc0-f8c8f4545bb4-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Real-Time Updates</h4>
                  <p>
                    Stay ahead with instantly updated odds from all major
                    bookmakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="_2-grid-feature-section">
            <div class="container">
              <div class="_3-grid-feature-container"></div>
            </div>
            <div class="pricing-hero-section">
              <div class="container">
                <div class="title-section">
                  <h1>
                    <span class="text-color-primary-gradient">
                      The perfect plan
                    </span>
                    .
                  </h1>
                </div>
                <div class="pricing-hero-container">
                  <a href="#" class="pricing-hero-popular-card w-inline-block">
                    <div class="pricing-hero-card popular">
                      <div class="pricing-hero-card-plan-title text-color-primary-gradient">
                        Pro
                      </div>
                      <div class="pricing-hero-card-price">
                        <div class="pricing-hero-card-price-number">$20</div>
                        <div class="pricing-hero-card-price-cycle">
                          per month
                        </div>
                      </div>
                      <div class="button">Get Started</div>
                      <ul role="list" class="pricing-hero-card-list">
                        <li class="pricing-hero-card-list-item">
                          Access to Real-Time Odds
                        </li>
                        <li class="pricing-hero-card-list-item">
                          Advanced EV Betting Strategies
                        </li>
                        <li class="pricing-hero-card-list-item">
                          Comprehensive Arbitrage Betting Tools
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cta-section">
          <div class="container">
            <div class="cta-container">
              <img
                src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc84_logo-cta.png"
                loading="lazy"
                alt=""
                class="cta-logo"
              />
              <div class="cta-content">
                <h2>Get started with Zenden today.</h2>
                <p></p>
              </div>
              <a href="#" class="button secondary w-button">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-top">
            <div class="container">
              <div class="footer-top-wrapper">
                <div class="footer-top-left">
                  <img
                    src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc76_logo.svg"
                    loading="lazy"
                    alt=""
                    class="footer-logo"
                  />
                  <p></p>
                  <div class="footer-social-links">
                    <a
                      href="#"
                      class="footer-social-link-button w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc91_fb-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon"
                      />
                    </a>
                    <a
                      href="#"
                      class="footer-social-link-button w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc92_twitter-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon"
                      />
                    </a>
                    <a
                      href="#"
                      class="footer-social-link-button w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc93_instagram-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon"
                      />
                    </a>
                    <a
                      href="#"
                      class="footer-social-link-button w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc94_linkedin-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon"
                      />
                    </a>
                  </div>
                </div>
                <div class="footer-top-links">
                  <div
                    id="w-node-_099c564d-ea98-c218-2774-d4f825bf2f4c-19f04aa8"
                    class="footer-top-links-column"
                  >
                    <div class="footer-top-links-title">Pages</div>
                    <a
                      id="w-node-_32e1ec2e-f8a4-1731-5b29-62ba57da303b-19f04aa8"
                      href="/"
                      aria-current="page"
                      class="footer-top-link w--current"
                    >
                      Home
                    </a>
                    <a href="/features" class="footer-top-link">
                      Features
                    </a>
                    <a href="/pricing" class="footer-top-link">
                      Pricing
                    </a>
                  </div>
                  <div
                    id="w-node-e7ba1ad8-82c9-04e4-ca70-e1670d3cc182-19f04aa8"
                    class="footer-top-links-column"
                  >
                    <div class="footer-top-links-title">Admin</div>
                    <a
                      id="w-node-e7ba1ad8-82c9-04e4-ca70-e1670d3cc185-19f04aa8"
                      href="/styleguide"
                      class="footer-top-link"
                    >
                      Style Guide
                    </a>
                    <a href="/licenses" class="footer-top-link">
                      Licenses
                    </a>
                    <a href="/changelog" class="footer-top-link">
                      Changelog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65088655740ea01aaba3bc2a"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/65088655740ea01aaba3bc2a/js/webflow.de227158c.js"
          type="text/javascript"
        ></script>
      </body>
    </html>
  );
};

export default Zenden;
