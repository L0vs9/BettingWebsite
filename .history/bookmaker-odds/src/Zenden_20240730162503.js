import React, { useEffect } from "react";
import "./Zenden.css"; // Ensure you create this CSS file
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";

const Zenden = () => {
  return (
    <html
      data-wf-domain="mura-a00cc5.webflow.io"
      data-wf-page="66a8f0221200d4b2775dafcb"
      data-wf-site="66a8f0221200d4b2775dabdf"
      data-wf-status="1"
      lang="en"
    >
      <head>
        <meta charset="utf-8" />
        <title>Zenden - Webflow HTML website template</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="./zenden.css" rel="stylesheet" type="text/css" />
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
          href="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db01d_fav.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db01e_webclip.png"
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
                    src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff0_logo.svg"
                    loading="lazy"
                    alt=""
                    class="nav-logo"
                  />
                </a>
                <nav role="navigation" class="nav-menu-wrapper-3 w-nav-menu">
                  <ul role="list" class="nav-menu w-list-unstyled">
                    <li>
                      <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="features"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                      >
                        Features
                      </ScrollLink>
                      <ScrollLink
                        to="pricing"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                      >
                        Pricing
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="faq"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                      >
                        FAQs
                      </ScrollLink>
                    </li>
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
                id="w-node-b2e12125-c190-45ec-c0cd-abfcc0c780fb-775dafcb"
                class="home-hero-left"
              >
                <h1 class="display-heading-1">
                  Bet smarter
                  <span class="text-color-primary-gradient"> with Zenden</span>.
                </h1>
                <p>
                  At Zenden, we use advanced data analysis to bring you the best
                  odds from multiple bookmakers.
                </p>
                <a href="#" class="button w-button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1.webp"
            loading="lazy"
            id="w-node-f2c32746-c749-900f-0aca-0ba4729df4ff-775dafcb"
            sizes="(max-width: 991px) 90vw, 50vw"
            alt=""
            srcset="
          https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1-p-500.png   500w,
          https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1-p-800.png   800w,
          https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1-p-1080.png 1080w,
          https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1-p-1600.png 1600w,
          https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1-p-2000.png 2000w,
          https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff1_ui-1.webp       2560w
        "
            class="home-hero-image"
          />
        </section>
        <div class="how-it-works-section" name="features">
          <div class="container">
            <div class="how-it-works-container">
              <div
                id="w-node-_1fd70e8c-79ac-8035-b4cb-a2c6bf5404f5-775dafcb"
                class="how-it-works-left"
              >
                <div class="subtitle">Feature</div>
                <h2>
                  Be Smart ,
                  <span class="text-color-primary-gradient">
                    Win Big with Zenden.
                  </span>
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
                id="w-node-_424c595e-04cd-1954-8dc7-b4f16c82ad41-775dafcb"
                class="how-it-works-right"
              >
                <div
                  id="w-node-_61cf71b8-e0d5-34a3-4c17-9ecad9f647a5-775dafcb"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff7_icon.svg"
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
                  id="w-node-c57906fa-0c78-605c-6b4a-8ea26db6f48c-775dafcb"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff7_icon.svg"
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
                  id="w-node-_04a70456-1a30-3cc7-ca34-6eb6a0d99e42-775dafcb"
                  class="feature-item-box"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff7_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Real-Time Odds</h4>
                  <p>
                    Instantly updated odds from all major bookmakers in the EU
                    and the US.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="_3-grid-feature-section">
          <div class="container">
            <div class="_3-grid-feature-container">
              <h2>
                Why do customers use
                <span class="text-color-primary-gradient"> Zenden?</span>
              </h2>
            </div>
            <div class="_3-grid-feature-grid">
              <div
                id="w-node-_1b8e24cb-a4ce-c489-d0a7-cdebdb76d3da-775dafcb"
                class="feature-item-box"
              >
                <img
                  src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff7_icon.svg"
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
                id="w-node-_26f8912b-e81e-b8e9-d859-e3a28fcab29a-775dafcb"
                class="feature-item-box"
              >
                <img
                  src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff7_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Easy to Use</h4>
                <p>
                  Our user-friendly interface makes navigating and placing bets
                  simple, even for beginners.
                </p>
              </div>
              <div
                id="w-node-_80015121-6913-86c6-4745-e6d54ee8f570-775dafcb"
                class="feature-item-box"
              >
                <img
                  src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff7_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Real-Time Updates</h4>
                <p>
                  Stay ahead with instantly updated odds from all major
                  bookmakers.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="pricing-hero-section" name="pricing">
          <div class="container">
            <div class="title-section">
              <h1>
                Pick the
                <span class="text-color-primary-gradient"> perfect plan</span>.
              </h1>
              <p>Try Zenden free for 7 days. No credit card required.</p>
            </div>
            <div class="pricing-hero-container">
              <a href="#" class="pricing-hero-card w-inline-block">
                <div class="pricing-hero-card-plan-title">Starter</div>
                <div class="pricing-hero-card-price">
                  <div class="pricing-hero-card-price-number">$10</div>
                  <div class="pricing-hero-card-price-cycle">per month</div>
                </div>
                <div class="button muted">Get Started</div>
                <ul role="list" class="pricing-hero-card-list">
                  <li class="pricing-hero-card-list-item">
                    This is a detail about the plan.
                  </li>
                  <li class="pricing-hero-card-list-item">
                    This is a detail about the plan.
                  </li>
                  <li class="pricing-hero-card-list-item">
                    This is a detail about the plan.
                  </li>
                </ul>
              </a>
              <a href="#" class="pricing-hero-popular-card w-inline-block">
                <div class="pricing-hero-card popular">
                  <div class="pricing-hero-card-plan-title text-color-primary-gradient">
                    Pro
                  </div>
                  <div class="pricing-hero-card-price">
                    <div class="pricing-hero-card-price-number">$20</div>
                    <div class="pricing-hero-card-price-cycle">per month</div>
                  </div>
                  <div class="button">Get Started</div>
                  <ul role="list" class="pricing-hero-card-list">
                    <li class="pricing-hero-card-list-item">
                      This is a detail about the plan.
                    </li>
                    <li class="pricing-hero-card-list-item">
                      This is a detail about the plan.
                    </li>
                    <li class="pricing-hero-card-list-item">
                      This is a detail about the plan.
                    </li>
                  </ul>
                </div>
              </a>
              <a href="#" class="pricing-hero-card w-inline-block">
                <div class="pricing-hero-card-plan-title">Enterprise</div>
                <div class="pricing-hero-card-price">
                  <div class="pricing-hero-card-price-number">$30</div>
                  <div class="pricing-hero-card-price-cycle">per month</div>
                </div>
                <div class="button muted">Get Started</div>
                <ul role="list" class="pricing-hero-card-list">
                  <li class="pricing-hero-card-list-item">
                    This is a detail about the plan.
                  </li>
                  <li class="pricing-hero-card-list-item">
                    This is a detail about the plan.
                  </li>
                  <li class="pricing-hero-card-list-item">
                    This is a detail about the plan.
                  </li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div class="faq-section" name="faq">
          <div class="container">
            <div class="faq-container">
              <div
                id="w-node-fca0395b-e605-a087-111d-839949be4ddd-775dafcb"
                class="faq-left"
              >
                <h2>Frequently Asked Questions</h2>
              </div>
              <div
                id="w-node-fca0395b-e605-a087-111d-839949be4de0-775dafcb"
                class="faq-right"
              >
                <div
                  id="w-node-fca0395b-e605-a087-111d-839949be4de1-775dafcb"
                  class="faq-item"
                >
                  <div class="faq-question">
                    <div class="faq-question-text">Is there a free plan?</div>
                    <img
                      src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db005_faq-chevron.svg"
                      loading="lazy"
                      alt=""
                      class="faq-chevron"
                    />
                  </div>
                  <div class="faq-answer-wrap">
                    <p class="faq-answer">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-fca0395b-e605-a087-111d-839949be4de9-775dafcb"
                  class="faq-item"
                >
                  <div class="faq-question">
                    <div class="faq-question-text">Is there a free plan?</div>
                    <img
                      src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db005_faq-chevron.svg"
                      loading="lazy"
                      alt=""
                      class="faq-chevron"
                    />
                  </div>
                  <div class="faq-answer-wrap">
                    <p class="faq-answer">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-fca0395b-e605-a087-111d-839949be4df1-775dafcb"
                  class="faq-item"
                >
                  <div class="faq-question">
                    <div class="faq-question-text">Is there a free plan?</div>
                    <img
                      src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db005_faq-chevron.svg"
                      loading="lazy"
                      alt=""
                      class="faq-chevron"
                    />
                  </div>
                  <div class="faq-answer-wrap">
                    <p class="faq-answer">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cta-section">
          <div class="container">
            <div class="cta-container">
              <img
                src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db001_logo-cta.png"
                loading="lazy"
                alt=""
                class="cta-logo"
              />
              <div class="cta-content">
                <h2>Get started with Zenden today.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non.
                </p>
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
                    src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775daff0_logo.svg"
                    loading="lazy"
                    alt=""
                    class="footer-logo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consec adipiscing elit ut ali,
                    purus sit ame elit ut aliqu ipsum dolor sit.
                  </p>
                  <div class="footer-social-links">
                    <a
                      href="#"
                      class="footer-social-link-button w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db00b_fb-icon.svg"
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
                        src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db00c_twitter-icon.svg"
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
                        src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db00d_instagram-icon.svg"
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
                        src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/66a8f0221200d4b2775db01c_linkedin-icon.svg"
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
                    <a href="/about" class="footer-top-link">
                      About
                    </a>
                    <a href="/blog" class="footer-top-link">
                      Blog
                    </a>
                    <a href="/contact" class="footer-top-link">
                      Contact
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
          <div class="footer-bottom">
            <div class="container">
              <div class="footer-bottom-container">
                <div>
                  © Template by
                  <a
                    href="https://webflow.com/templates/designers/wan-studio"
                    target="_blank"
                    class="text-link"
                  >
                    Gareth Wan
                  </a>
                </div>
                <div>
                  Powered by
                  <a
                    href="http://webflow.com"
                    target="_blank"
                    class="text-link"
                  >
                    Webflow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66a8f0221200d4b2775dabdf"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.prod.website-files.com/66a8f0221200d4b2775dabdf/js/webflow.4382df4b1.js"
          type="text/javascript"
        ></script>
      </body>
    </html>
  );
};

export default Zenden;
