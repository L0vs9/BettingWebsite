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
    >
      <head>
        <meta charset="utf-8" />
        <title>Zenden - Webflow HTML website template</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/css/lukas-fantastic-site-2d7cd2.webflow.7c99a1ec9.css"
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
          href="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc95_fav.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc96_webclip.png"
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
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc76_logo.svg"
                    loading="lazy"
                    alt=""
                    class="nav-logo"
                  />
                </a>
                <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                  <ul role="list" class="nav-menu w-list-unstyled">
                    <li>
                      <ScrollLink
                        to="features"
                        class="nav-link"
                        smooth={true}
                        duration={500}
                      >
                        Features
                      </ScrollLink>
                    </li>
                    <li>
                      <a href="/pricing" class="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/blog" class="nav-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/about" class="nav-link">
                        About
                      </a>
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
        <section class="home-hero-section">
          <div class="container right-no-margin">
            <div class="home-hero-grid">
              <div
                id="w-node-b2e12125-c190-45ec-c0cd-abfcc0c780fb-aba3bc5b"
                class="home-hero-left"
              >
                <div class="subtitle">Get this template</div>
                <h1 class="display-heading-1">
                  Make your product
                  <span class="text-color-primary-gradient">easy to use</span>.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo.
                </p>
                <a href="#" class="button w-button">
                  Get Started
                </a>
                <p class="small-paragraph">
                  No credit card needed. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
            loading="lazy"
            id="w-node-f2c32746-c749-900f-0aca-0ba4729df4ff-aba3bc5b"
            srcset="
              https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png   500w,
              https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png   800w,
              https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
              https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
              https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
              https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp       2560w
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
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7a_logo-1.svg"
                  loading="lazy"
                  id="w-node-_56c006df-b109-8cf5-d89b-bfd9c60b6c2a-aba3bc5b"
                  alt=""
                />
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc79_logo-2.svg"
                  loading="lazy"
                  id="w-node-_542fcb29-780f-ccaa-c3cd-d4c8c9418d3a-aba3bc5b"
                  alt=""
                />
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7c_logo-3.svg"
                  loading="lazy"
                  id="w-node-a5457c13-cabf-0012-7103-24380f2f21f3-aba3bc5b"
                  alt=""
                />
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7b_logo-4.svg"
                  loading="lazy"
                  id="w-node-_537d0642-6140-7d67-b52b-193454a13721-aba3bc5b"
                  alt=""
                />
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc78_logo-5.svg"
                  loading="lazy"
                  id="w-node-_7a086da8-1c25-d6ad-5829-077764f36847-aba3bc5b"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="how-it-works-section" name="features">
          <div class="container">
            <div class="how-it-works-container">
              <div
                id="w-node-_1fd70e8c-79ac-8035-b4cb-a2c6bf5404f5-aba3bc5b"
                class="how-it-works-left"
              >
                <div class="subtitle">Feature</div>
                <h2>
                  This is a headline talking about some
                  <span class="text-color-primary-gradient">cool features</span>
                  .
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus.
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
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Feature #1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus.
                  </p>
                </div>
                <div
                  id="w-node-c57906fa-0c78-605c-6b4a-8ea26db6f48c-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Feature #1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus.
                  </p>
                </div>
                <div
                  id="w-node-_04a70456-1a30-3cc7-ca34-6eb6a0d99e42-aba3bc5b"
                  class="feature-item-box"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                    loading="lazy"
                    alt=""
                    class="feature-item-icon"
                  />
                  <h4>Feature #1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-section">
          <div class="container">
            <div class="feature-container">
              <img
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
                loading="lazy"
                id="w-node-adf9a269-e03c-4ff0-e19c-c61fe119939c-aba3bc5b"
                srcset="
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png   500w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png   800w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp       2560w
                "
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 50vw"
                alt=""
                class="feature-image"
              />
              <div
                id="w-node-e8d751f0-9716-6d3a-19e4-cef19aff37f7-aba3bc5b"
                class="feature-details"
              >
                <div class="subtitle">Feature</div>
                <h3>This is the feature</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla.
                </p>
                <div class="feature-button-wrapper">
                  <a href="#" class="button secondary w-button">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feature-section">
          <div class="container">
            <div class="feature-container reverse">
              <div
                id="w-node-e13045c4-d1d7-d562-d586-3a516e6180e6-aba3bc5b"
                class="feature-details"
              >
                <div class="subtitle">Feature</div>
                <h3>This is the feature</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla.
                </p>
                <div class="feature-button-wrapper">
                  <a href="#" class="button secondary w-button">
                    Get Started
                  </a>
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
                loading="lazy"
                id="w-node-e13045c4-d1d7-d562-d586-3a516e6180e5-aba3bc5b"
                srcset="
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png   500w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png   800w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp       2560w
                "
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 50vw"
                alt=""
                class="feature-image"
              />
            </div>
          </div>
        </div>
        <div class="testimonial-slider-section">
          <div class="container">
            <div class="testimonial-slider-container">
              <div
                data-delay="4000"
                data-animation="slide"
                class="slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div class="w-slider-mask">
                  <div class="testimonial-slider-slide w-slide">
                    <div class="testimonial-slider-slide-grid">
                      <div
                        id="w-node-_70c388e4-87b6-8a71-3b93-fdb6fe454737-aba3bc5b"
                        class="testimonial-slider-slide-quote"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7e_quote-icon.svg"
                          loading="lazy"
                          alt=""
                          class="testimonial-slider-slide-quote-icon"
                        />
                        <div class="testimonial-slider-slide-quote-text">
                          Lorem ipsum dolor sit am, cov adipiscing elit ut
                          aliam, purus
                          <span class="text-color-primary-gradient">
                            sit amet luctus vetis
                          </span>
                          , lect adipiscing elit ut.
                        </div>
                      </div>
                      <div
                        id="w-node-_52cd5132-eb93-4512-ff0d-cf04e1ff02a2-aba3bc5b"
                        class="testimonial-slider-slide-person"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png"
                          loading="lazy"
                          srcset="
                            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image-p-500.png 500w,
                            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png       800w
                          "
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 67vw, 26vw"
                          class="testimonial-slider-slide-person-image"
                        />
                        <div class="testimonial-slider-slide-person-details-container">
                          <div class="testimonial-slider-slide-person-details">
                            <div class="testimonial-slider-slide-person-details-left">
                              <div class="testimonial-slider-slide-person-details-name">
                                Jessica Smith
                              </div>
                              <div class="testimonial-slider-slide-person-details-title">
                                Founder at Company
                              </div>
                            </div>
                            <img
                              src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc81_testimonial-slider-stars.svg"
                              loading="lazy"
                              id="w-node-_40c7ffc9-9925-3ba5-1351-c80d0b58d915-aba3bc5b"
                              alt=""
                              class="testimonial-slider-slide-person-details-stars"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-slider-slide w-slide">
                    <div class="testimonial-slider-slide-grid">
                      <div
                        id="w-node-b1532858-e30f-cb22-aace-2da5fb134ac5-aba3bc5b"
                        class="testimonial-slider-slide-quote"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7e_quote-icon.svg"
                          loading="lazy"
                          alt=""
                          class="testimonial-slider-slide-quote-icon"
                        />
                        <div class="testimonial-slider-slide-quote-text">
                          Lorem ipsum dolor sit am, cov adipiscing elit ut
                          aliam, purus
                          <span class="text-color-primary-gradient">
                            sit amet luctus vetis
                          </span>
                          , lect adipiscing elit ut.
                        </div>
                      </div>
                      <div
                        id="w-node-b1532858-e30f-cb22-aace-2da5fb134acc-aba3bc5b"
                        class="testimonial-slider-slide-person"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png"
                          loading="lazy"
                          srcset="
                            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image-p-500.png 500w,
                            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png       800w
                          "
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 67vw, 26vw"
                        />
                        <div class="testimonial-slider-slide-person-details-container">
                          <div class="testimonial-slider-slide-person-details">
                            <div class="testimonial-slider-slide-person-details-left">
                              <div class="testimonial-slider-slide-person-details-name">
                                Jessica Smith
                              </div>
                              <div class="testimonial-slider-slide-person-details-title">
                                Founder at Company
                              </div>
                            </div>
                            <img
                              src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc81_testimonial-slider-stars.svg"
                              loading="lazy"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-slider-arrow left w-slider-arrow-left">
                  <div class="testimonial-slider-arrow-icon w-icon-slider-left"></div>
                </div>
                <div class="testimonial-slider-arrow right w-slider-arrow-right">
                  <div class="testimonial-slider-arrow-icon w-icon-slider-right"></div>
                </div>
                <div class="testimonial-slider-nav w-slider-nav w-round"></div>
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
                id="w-node-_1b8e24cb-a4ce-c489-d0a7-cdebdb76d3da-aba3bc5b"
                class="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Feature #1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus.
                </p>
              </div>
              <div
                id="w-node-_26f8912b-e81e-b8e9-d859-e3a28fcab29a-aba3bc5b"
                class="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Feature #1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus.
                </p>
              </div>
              <div
                id="w-node-_80015121-6913-86c6-4745-e6d54ee8f570-aba3bc5b"
                class="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                  loading="lazy"
                  alt=""
                  class="feature-item-icon"
                />
                <h4>Feature #1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="big-ui-feature-section">
          <div class="container">
            <div class="big-ui-feature-container">
              <div class="title-section">
                <div class="subtitle">Feature</div>
                <h2>
                  This is a headline talking about some
                  <span class="text-color-primary-gradient">cool features</span>
                  .
                </h2>
              </div>
              <div class="big-ui-feature-main">
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
                  loading="lazy"
                  id="w-node-c0d117de-1f0e-fec3-eaeb-65cf0148fc1b-aba3bc5b"
                  srcset="
                    https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png   500w,
                    https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png   800w,
                    https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
                    https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
                    https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
                    https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp       2560w
                  "
                  sizes="(max-width: 479px) 92vw, (max-width: 991px) 94vw, 51vw"
                  alt=""
                  class="big-ui-feature-image"
                />
                <div
                  id="w-node-_3f7c290e-1eed-baac-60e3-572e507c0c5a-aba3bc5b"
                  class="big-ui-feature-side"
                >
                  <div
                    id="w-node-_9f793c5a-dba5-a94c-ba5a-83db113ef7d1-aba3bc5b"
                    class="big-feature-side-item"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc82_big-feature-icon.svg"
                      loading="lazy"
                      alt=""
                      class="big-feature-side-item-icon"
                    />
                    <h4 class="big-feature-side-item-title">Feature name</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec adipiscing elit ut
                      aliquam, purus sit ame elit ut aliqu ipsum dolor sit.
                    </p>
                  </div>
                  <div
                    id="w-node-_4651a2f3-91a6-d81f-adad-63cecdf2e263-aba3bc5b"
                    class="big-feature-side-item"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc82_big-feature-icon.svg"
                      loading="lazy"
                      alt=""
                      class="big-feature-side-item-icon"
                    />
                    <h4 class="big-feature-side-item-title">Feature name</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consec adipiscing elit ut
                      aliquam, purus sit ame elit ut aliqu ipsum dolor sit.
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
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc84_logo-cta.png"
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
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc76_logo.svg"
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
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc91_fb-icon.svg"
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
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc92_twitter-icon.svg"
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
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc93_instagram-icon.svg"
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
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc94_linkedin-icon.svg"
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
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65088655740ea01aaba3bc2a"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script src="./Z.js" type="text/javascript"></script>
      </body>
    </html>
  );
};

export default Zenden;
