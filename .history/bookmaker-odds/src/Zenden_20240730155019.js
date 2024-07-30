import React, { useEffect } from "react";
import "./Zenden.css"; // Ensure you create this CSS file
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";

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
  data-wf-domain="lukas-fantabulous-site-2c8c5d.webflow.io"
  data-wf-page="66a7a4e071f06ded93eb7ab4"
  data-wf-site="66a7a4df71f06ded93eb7a71"
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
      href="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/css/lukas-fantabulous-site-2c8c5d.webflow.bad320b3e.css"
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
      href="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7afb_fav.png"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7afc_webclip.png"
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
            <a href="/" class="navbar-brand w-nav-brand"
              ><img
                src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7ace_logo.svg"
                loading="lazy"
                alt=""
                class="nav-logo"
            /></a>
            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
              <ul role="list" class="nav-menu w-list-unstyled">
                <li>
                  <a
                    href="/pricing"
                    aria-current="page"
                    class="nav-link w--current"
                    ><strong>About</strong></a
                  ><a href="/features" class="nav-link">Features</a>
                </li>
                <li>
                  <a href="/blog" class="nav-link">Pricing</a
                  ><a href="/blog" class="nav-link">FAQs</a>
                </li>
              </ul>
              <div class="nav-menu-cta">
                <a href="#" class="button muted w-button">Log in</a
                ><a href="#" class="button w-button">Sign up</a>
              </div>
            </nav>
            <div class="menu-button w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-hero-section">
      <div class="container">
        <div class="title-section">
          <h1>
            Pick the
            <span class="text-color-primary-gradient">perfect plan</span>.
          </h1>
          <p>Try Zenden free for 7 days. No credit card required.</p>
        </div>
        <div class="pricing-hero-container">
          <a href="#" class="pricing-hero-card w-inline-block"
            ><div class="pricing-hero-card-plan-title">Starter</div>
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
            </ul></a
          ><a href="#" class="pricing-hero-popular-card w-inline-block"
            ><div class="pricing-hero-card popular">
              <div
                class="pricing-hero-card-plan-title text-color-primary-gradient"
              >
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
            </div></a
          ><a href="#" class="pricing-hero-card w-inline-block"
            ><div class="pricing-hero-card-plan-title">Enterprise</div>
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
            </ul></a
          >
        </div>
      </div>
    </div>
    <div class="pricing-table-section"><div class="container"></div></div>
    <div class="faq-section">
      <div class="container">
        <div class="faq-container">
          <div
            id="w-node-_7b85f08d-d050-5b73-7de3-adbb5c3463c8-93eb7ab4"
            class="faq-left"
          >
            <h2>Frequently Asked Questions</h2>
          </div>
          <div
            id="w-node-_9f71dc1e-c8a2-1e96-3694-28d08dee5ff9-93eb7ab4"
            class="faq-right"
          >
            <div
              id="w-node-f9289148-125f-2b0d-c162-e6d10e97e31e-93eb7ab4"
              class="faq-item"
            >
              <div class="faq-question">
                <div class="faq-question-text">Is there a free plan?</div>
                <img
                  src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7ae3_faq-chevron.svg"
                  loading="lazy"
                  alt=""
                  class="faq-chevron"
                />
              </div>
              <div class="faq-answer-wrap">
                <p class="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
            </div>
            <div
              id="w-node-_174eee6c-f505-293d-aa62-5e5b35c1fe70-93eb7ab4"
              class="faq-item"
            >
              <div class="faq-question">
                <div class="faq-question-text">Is there a free plan?</div>
                <img
                  src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7ae3_faq-chevron.svg"
                  loading="lazy"
                  alt=""
                  class="faq-chevron"
                />
              </div>
              <div class="faq-answer-wrap">
                <p class="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
            </div>
            <div
              id="w-node-_4b4aea51-0476-e7bb-bff9-1353bdb19d13-93eb7ab4"
              class="faq-item"
            >
              <div class="faq-question">
                <div class="faq-question-text">Is there a free plan?</div>
                <img
                  src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7ae3_faq-chevron.svg"
                  loading="lazy"
                  alt=""
                  class="faq-chevron"
                />
              </div>
              <div class="faq-answer-wrap">
                <p class="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
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
            src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7adf_logo-cta.png"
            loading="lazy"
            alt=""
            class="cta-logo"
          />
          <div class="cta-content"><h2>Get started with Zenden today.</h2></div>
          <a href="#" class="button secondary w-button">Get Started</a>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-top-wrapper">
            <div class="footer-top-left">
              <img
                src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7ace_logo.svg"
                loading="lazy"
                alt=""
                class="footer-logo"
              />
              <p>
                Lorem ipsum dolor sit amet, consec adipiscing elit ut ali, purus
                sit ame elit ut aliqu ipsum dolor sit.
              </p>
              <div class="footer-social-links">
                <a href="#" class="footer-social-link-button w-inline-block"
                  ><img
                    src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7ae9_fb-icon.svg"
                    loading="lazy"
                    alt=""
                    class="footer-social-link-icon" /></a
                ><a href="#" class="footer-social-link-button w-inline-block"
                  ><img
                    src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7aea_twitter-icon.svg"
                    loading="lazy"
                    alt=""
                    class="footer-social-link-icon" /></a
                ><a href="#" class="footer-social-link-button w-inline-block"
                  ><img
                    src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7aeb_instagram-icon.svg"
                    loading="lazy"
                    alt=""
                    class="footer-social-link-icon" /></a
                ><a href="#" class="footer-social-link-button w-inline-block"
                  ><img
                    src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/66a7a4e071f06ded93eb7afa_linkedin-icon.svg"
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
                  class="footer-top-link"
                  >Home</a
                ><a href="/features" class="footer-top-link">Features</a
                ><a
                  href="/pricing"
                  aria-current="page"
                  class="footer-top-link w--current"
                  >Pricing</a
                ><a href="/about" class="footer-top-link">About</a
                ><a href="/blog" class="footer-top-link">Blog</a
                ><a href="/contact" class="footer-top-link">Contact</a>
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
                  >Style Guide</a
                ><a href="/licenses" class="footer-top-link">Licenses</a
                ><a href="/changelog" class="footer-top-link">Changelog</a>
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
                >Gareth Wan</a
              >
            </div>
            <div>
              Powered by
              <a href="http://webflow.com" target="_blank" class="text-link"
                >Webflow</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66a7a4df71f06ded93eb7a71"
      type="text/javascript"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.prod.website-files.com/66a7a4df71f06ded93eb7a71/js/webflow.bf40ae90e.js"
      type="text/javascript"
    ></script>
  </body>
</html>

  );
};

export default Zenden;
