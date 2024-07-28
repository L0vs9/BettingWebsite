import React, { useEffect } from "react";
import "./Zenden.css"; // Ensure you create this CSS file

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
      data-wf-domain="betting-app.webflow.io"
      data-wf-page="650824d879d04aebae0ac46a"
      data-wf-site="650824d879d04aebae0ac3de"
    >
      <head>
        <meta charset="utf-8" />
        <title>Zenden </title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/css/betting-app.webflow.415033636.css"
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
        <script type="text/javascript">
          WebFont.load({
            google: {
              families: ["Work Sans:regular,500,600", "Mulish:regular,700"],
            },
          });
        </script>
        <script type="text/javascript">
          !(function (o, c) {
            var n = c.documentElement,
              t = " w-mod-";
            (n.className += t + "js"),
              ("ontouchstart" in o ||
                (o.DocumentTouch && c instanceof DocumentTouch)) &&
                (n.className += t + "touch");
          })(window, document);
        </script>
        <link
          href="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac4a4_fav.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac4a5_webclip.png"
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
                  ><img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac485_logo.svg"
                    loading="lazy"
                    alt=""
                    class="nav-logo"
                /></a>
                <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                  <ul role="list" class="nav-menu w-list-unstyled">
                    <li><a href="/features" class="nav-link">Features</a></li>
                    <li><a href="/pricing" class="nav-link">Pricing</a></li>
                    <li><a href="/about" class="nav-link">About</a></li>
                    <li class="list-item">
                      <div
                        data-hover="false"
                        data-delay="0"
                        class="nav-dropdown w-dropdown"
                      >
                      </div>
                    </li>
                  </ul>
                  <% if current_user.present? %>
                    <div class="nav-menu-cta">
                      <%= link_to "Sign out", destroy_user_session_path, class:"button muted w-button" %>
                      <% if current_user.subscription_status == "True" %>
                        <%= link_to "Dashboard", "http://localhost:3000/dashboard", class:"button w-button" %>
                      <% end %>
                    </div>
                  <% else %>
                    <div class="nav-menu-cta">
                      <%= link_to "Log in", new_user_session_path, class:"button muted w-button" %>
                      <%= link_to "Sign up", new_user_registration_path, class:"button w-button" %>
                    </div>
                  <% end %>
                </nav>
                <div class="menu-button w-nav-button">
                  <div class="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="home-hero-section">
          <div class="container right-no-margin">
            <div class="home-hero-grid">
              <div
                id="w-node-b2e12125-c190-45ec-c0cd-abfcc0c780fb-ae0ac46a"
                class="home-hero-left"
              >
                <h1 class="display-heading-1">
                  Bet Smart, Play Safe,
                  <span class="text-color-primary-gradient">Win Money </span>
                </h1>
                <p>
                  Betting made smart and safe at Zenden. 
                  Explore strategies like positive EV and arbitrage betting to maximize wins while promoting responsible gambling.
                  We provide data, insights, and tools to help you bet intelligently and enjoy the thrill of betting without compromising financial well-being.
                  Start your journey to informed and profitable betting today!
                </p>
               
                <p class="small-paragraph">
                  Cancel anytime.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1.webp"
            loading="lazy"
            id="w-node-f2c32746-c749-900f-0aca-0ba4729df4ff-ae0ac46a"
            srcset="
              https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1-p-500.png   500w,
              https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1-p-800.png   800w,
              https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1-p-1080.png 1080w,
              https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1-p-1600.png 1600w,
              https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1-p-2000.png 2000w,
              https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac486_ui-1.webp       2560w
            "
            sizes="(max-width: 991px) 90vw, 50vw"
            alt=""
            class="home-hero-image"
          />
        </section>
        <div class="logo-cloud-section">
          <div class="container">
            <div class="logo-cloud-container">
              <div class="subtitle">Customers love us</div>
              <div class="logo-cloud-grid">
                <img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac489_logo-1.svg"
                  loading="lazy"
                  id="w-node-_56c006df-b109-8cf5-d89b-bfd9c60b6c2a-ae0ac46a"
                  alt=""
                /><img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac488_logo-2.svg"
                  loading="lazy"
                  id="w-node-_542fcb29-780f-ccaa-c3cd-d4c8c9418d3a-ae0ac46a"
                  alt=""
                /><img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48b_logo-3.svg"
                  loading="lazy"
                  id="w-node-a5457c13-cabf-0012-7103-24380f2f21f3-ae0ac46a"
                  alt=""
                /><img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48a_logo-4.svg"
                  loading="lazy"
                  id="w-node-_537d0642-6140-7d67-b52b-193454a13721-ae0ac46a"
                  alt=""
                /><img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac487_logo-5.svg"
                  loading="lazy"
                  id="w-node-_7a086da8-1c25-d6ad-5829-077764f36847-ae0ac46a"
                  alt=""
                />
              </div>
            </div>
            -->
          </div>
        </div>
        <div class="how-it-works-section">
          <div class="container">
            <div class="how-it-works-container">
              <div
                id="w-node-_1fd70e8c-79ac-8035-b4cb-a2c6bf5404f5-ae0ac46a"
                class="how-it-works-left"
              >
                <div class="subtitle">Feature</div>
                <h2>
                  Explore unique features that 
                  <span class="text-color-primary-gradient">make money</span>.
                </h2>
              </div>
              <div
                id="w-node-_424c595e-04cd-1954-8dc7-b4f16c82ad41-ae0ac46a"
                class="how-it-works-right"
              >
                <div
                  id="w-node-_61cf71b8-e0d5-34a3-4c17-9ecad9f647a5-ae0ac46a"
                  class="feature-item-box"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48c_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Real-time Arbitrage Finder:</h4>
                  <p>
                    Our real-time arbitrage scanner identifies profit opportunities by tracking odds across bookmakers, allowing users to strategically bet across platforms for guaranteed profits
                  </p>
                </div>
                <div
                  id="w-node-c57906fa-0c78-605c-6b4a-8ea26db6f48c-ae0ac46a"
                  class="feature-item-box"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48c_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Real-time Positive EV Finder:</h4>
                  <p>
                    Our Real-time Positive EV Finder scans odds from multiple sources, instantly spotting profitable bets with higher expected returns. It's your ticket to consistent, smart betting – no guesswork, just guaranteed profits.
                  </p>
                </div>
                <div
                  id="w-node-_04a70456-1a30-3cc7-ca34-6eb6a0d99e42-ae0ac46a"
                  class="feature-item-box"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48c_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Discord Community Insights Hub:</h4>
                  <p>
                      Join our Discord Community Insights Hub to share tips, strategies, and gain access to expert analysis for a more profitable betting journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="_2-testimonials-section">
          <div class="container">
            <div class="_2-testimonials-container">
              <h2>
                Our customers love
                <span class="text-color-primary-gradient">Zenden</span>
              </h2>
              <div class="_2-testimonials-grid">
                <div
                  id="w-node-_087046d3-422b-5d9c-bcd8-29c48702acda-ae0ac46a"
                  class="_2-testimonials-item"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48d_quote-icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <div class="_2-testimonials-quote">
                    &quot;I've been using Zenden for a while now, and it's transformed my betting game. The Smart Bet Advisor has been a game-changer, consistently helping me make informed choices. I've seen my winnings increase, and I appreciate the responsible gambling emphasis. It's not just a betting platform; it's a community of like-minded bettors.&quot;
                  </div>
                  <div class="_2-testimonials-person">
                    <img
                      src=""
                      loading="lazy"
                      id="w-node-_166b0dd6-22a1-3125-8dd5-a120b7e87039-ae0ac46a"
                      alt=""
                      class="_2-testimonials-person-image"
                    />
                    <div
                      id="w-node-bb8ee3cd-98a1-6845-1f3c-a6717bf8a249-ae0ac46a"
                      class="_2-testimonials-person-details"
                    >
                      <div class="_2-testimonials-person-name">Sarah W</div>
                      
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_6f1656bb-aceb-390a-ac27-0acfcfeb62d5-ae0ac46a"
                  class="_2-testimonials-item"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48d_quote-icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <div class="_2-testimonials-quote">
                    &quot;I stumbled upon Zenden's Real-time Arbitrage Finder, and it's been a goldmine for me. The ability to spot arbitrage opportunities instantly has boosted my profits significantly. Plus, the Discord Community Insights Hub is fantastic for getting tips and sharing experiences with others. I can't recommend this platform enough for both beginners and experienced bettors.&quot;
                  </div>
                  <div class="_2-testimonials-person">
                    <img
                      src=""
                      loading="lazy"
                      id="w-node-_6f1656bb-aceb-390a-ac27-0acfcfeb62da-ae0ac46a"
                      alt=""
                      class="_2-testimonials-person-image"
                    />
                    <div
                      id="w-node-_6f1656bb-aceb-390a-ac27-0acfcfeb62db-ae0ac46a"
                      class="_2-testimonials-person-details"
                    >
                      <div class="_2-testimonials-person-name">James Maddof</div>
                    </div>
                  </div>
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
                <span class="text-color-primary-gradient">Zenden?</span>
              </h2>
            </div>
            <div class="_3-grid-feature-grid">
              <div
                id="w-node-_1b8e24cb-a4ce-c489-d0a7-cdebdb76d3da-ae0ac46a"
                class="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48c_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Community</h4>
                <p>
                  Join a community of like minded individuals that will help you make money with unique tactics leading the way.
                </p>
              </div>
              <div
                id="w-node-_26f8912b-e81e-b8e9-d859-e3a28fcab29a-ae0ac46a"
                class="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48c_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Money</h4>
                <p>
                  We all know why we are here. To make some mudafucking money and this app delivers on that.
                </p>
              </div>
              <div
                id="w-node-_80015121-6913-86c6-4745-e6d54ee8f570-ae0ac46a"
                class="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac48c_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Safe</h4>
                <p>
                  These betting strategies are tested and tried. Beat the bookies safely and efficiently without risking your money. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cta-section">
          <div class="container">
            <div class="cta-container">
              <img
                src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac493_logo-cta.png"
                loading="lazy"
                alt=""
                class="cta-logo"
              />
              <div class="cta-content">
                <h2>Get started with Zenden today.</h2>
              </div>
             
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-top">
            <div class="container">
              <div class="footer-top-wrapper">
                <div class="footer-top-left">
                  <img
                    src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac485_logo.svg"
                    loading="lazy"
                    alt=""
                    class="footer-logo"
                  />
                  <p>
                    Zenden, a place where you can safely 
                    make money with betting
                  </p>
                  <div class="footer-social-links">
                    <a href="#" class="footer-social-link-button w-inline-block"
                      ><img
                        src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac4a0_fb-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon" /></a
                    ><a href="#" class="footer-social-link-button w-inline-block"
                      ><img
                        src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac4a1_twitter-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon" /></a
                    ><a href="#" class="footer-social-link-button w-inline-block"
                      ><img
                        src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac4a2_instagram-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon" /></a
                    ><a href="#" class="footer-social-link-button w-inline-block"
                      ><img
                        src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/650824d879d04aebae0ac4a3_linkedin-icon.svg"
                        loading="lazy"
                        alt=""
                        class="footer-social-link-icon"
                    /></a>
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
                      >Home</a
                    ><a href="/features" class="footer-top-link">Features</a
                    ><a href="/pricing" class="footer-top-link">Pricing</a
                    ><a href="/about" class="footer-top-link">About</a
                    >
                  </div>
                  <div
                    id="w-node-e7ba1ad8-82c9-04e4-ca70-e1670d3cc182-19f04aa8"
                    class="footer-top-links-column"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="footer-bottom-container">
              </div>
            </div>
          </div>
        </div>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=650824d879d04aebae0ac3de"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/js/webflow.638fba5b7.js"
          type="text/javascript"
        ></script>
      </body>
    </html>
    
  );
};

export default Zenden;
