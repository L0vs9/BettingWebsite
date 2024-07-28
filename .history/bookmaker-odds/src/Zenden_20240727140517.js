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
      if (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      ) {
        docEl.className += wMod + "touch";
      }
    };
    addTouchClass();
  }, []);

  return (
    <>
      <div className="navbar">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar-container w-nav"
        >
          <div className="container">
            <div className="navbar-wrapper">
              <a
                href="/"
                aria-current="page"
                className="navbar-brand w-nav-brand w--current"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc76_logo.svg"
                  loading="lazy"
                  alt=""
                  className="nav-logo"
                />
              </a>
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li>
                    <a href="/features" className="nav-link">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="nav-link">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="list-item">
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="nav-dropdown w-dropdown"
                    >
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                        <div>Pages</div>
                      </div>
                      <nav className="nav-dropdown-list w-dropdown-list">
                        <a
                          href="/contact"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Contact
                        </a>
                        <a
                          href="/styleguide"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Style Guide
                        </a>
                        <a
                          href="/licenses"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Licenses
                        </a>
                        <a
                          href="/changelog"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Changelog
                        </a>
                      </nav>
                    </div>
                  </li>
                </ul>
                <div className="nav-menu-cta">
                  <a href="#" className="button muted w-button">
                    Log in
                  </a>
                  <a href="#" className="button w-button">
                    Sign up
                  </a>
                </div>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="home-hero-section">
        <div className="container right-no-margin">
          <div className="home-hero-grid">
            <div
              id="w-node-b2e12125-c190-45ec-c0cd-abfcc0c780fb-aba3bc5b"
              className="home-hero-left"
            >
              <div className="subtitle">Get this template</div>
              <h1 className="display-heading-1">
                Make your product
                <span className="text-color-primary-gradient">easy to use</span>
                .
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo.
              </p>
              <a href="#" className="button w-button">
                Get Started
              </a>
              <p className="small-paragraph">
                No credit card needed. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
          loading="lazy"
          id="w-node-f2c32746-c749-900f-0aca-0ba4729df4ff-aba3bc5b"
          srcSet="
            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png 500w,
            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png 800w,
            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
            https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp 2560w
          "
          sizes="(max-width: 991px) 90vw, 50vw"
          alt=""
          className="home-hero-image"
        />
      </section>

      <div className="logo-cloud-section">
        <div className="container">
          <div className="logo-cloud-container">
            <div className="subtitle">Customers love us</div>
            <div className="logo-cloud-grid">
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

      <div className="how-it-works-section">
        <div className="container">
          <div className="how-it-works-container">
            <div
              id="w-node-_1fd70e8c-79ac-8035-b4cb-a2c6bf5404f5-aba3bc5b"
              className="how-it-works-left"
            >
              <div className="subtitle">Feature</div>
              <h2>
                This is a headline talking about some
                <span className="text-color-primary-gradient">
                  cool features
                </span>
                .
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus.
              </p>
              <a href="#" className="button secondary w-button">
                Get Started
              </a>
            </div>
            <div
              id="w-node-_424c595e-04cd-1954-8dc7-b4f16c82ad41-aba3bc5b"
              className="how-it-works-right"
            >
              <div
                id="w-node-_61cf71b8-e0d5-34a3-4c17-9ecad9f647a5-aba3bc5b"
                className="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                  loading="lazy"
                  alt=""
                  className="feature-item-icon"
                />
                <h4>Feature #1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus.
                </p>
              </div>
              <div
                id="w-node-c57906fa-0c78-605c-6b4a-8ea26db6f48c-aba3bc5b"
                className="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                  loading="lazy"
                  alt=""
                  className="feature-item-icon"
                />
                <h4>Feature #1</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus.
                </p>
              </div>
              <div
                id="w-node-_04a70456-1a30-3cc7-ca34-6eb6a0d99e42-aba3bc5b"
                className="feature-item-box"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                  loading="lazy"
                  alt=""
                  className="feature-item-icon"
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

      <div className="_2-testimonials-section">
        <div className="container">
          <div className="_2-testimonials-container">
            <h2>
              Our customers love
              <span className="text-color-primary-gradient">Zenden</span>
            </h2>
            <div className="_2-testimonials-grid">
              <div
                id="w-node-_087046d3-422b-5d9c-bcd8-29c48702acda-aba3bc5b"
                className="_2-testimonials-item"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7e_quote-icon.svg"
                  loading="lazy"
                  alt=""
                  className="feature-item-icon"
                />
                <div className="_2-testimonials-quote">
                  &quot;Lorem ipsum dolor sit amet, consecur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elentum facilisis leo, vel fringilla.&quot;
                </div>
                <div className="_2-testimonials-person">
                  <img
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7f_testimonial.png"
                    loading="lazy"
                    id="w-node-_166b0dd6-22a1-3125-8dd5-a120b7e87039-aba3bc5b"
                    alt=""
                    className="_2-testimonials-person-image"
                  />
                  <div
                    id="w-node-bb8ee3cd-98a1-6845-1f3c-a6717bf8a249-aba3bc5b"
                    className="_2-testimonials-person-details"
                  >
                    <div className="_2-testimonials-person-name">
                      Jessica Lee
                    </div>
                    <div className="_2-testimonials-person-company">
                      Job title at Company
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_6f1656bb-aceb-390a-ac27-0acfcfeb62d5-aba3bc5b"
                className="_2-testimonials-item"
              >
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7e_quote-icon.svg"
                  loading="lazy"
                  alt=""
                  className="feature-item-icon"
                />
                <div className="_2-testimonials-quote">
                  &quot;Lorem ipsum dolor sit amet, consecur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elentum facilisis leo, vel fringilla.&quot;
                </div>
                <div className="_2-testimonials-person">
                  <img
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7f_testimonial.png"
                    loading="lazy"
                    id="w-node-_6f1656bb-aceb-390a-ac27-0acfcfeb62da-aba3bc5b"
                    alt=""
                    className="_2-testimonials-person-image"
                  />
                  <div
                    id="w-node-_6f1656bb-aceb-390a-ac27-0acfcfeb62db-aba3bc5b"
                    className="_2-testimonials-person-details"
                  >
                    <div className="_2-testimonials-person-name">
                      Jessica Lee
                    </div>
                    <div className="_2-testimonials-person-company">
                      Job title at Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-section">
        <div className="container">
          <div className="feature-container">
            <img
              src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
              loading="lazy"
              id="w-node-adf9a269-e03c-4ff0-e19c-c61fe119939c-aba3bc5b"
              srcSet="
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png 500w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png 800w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp 2560w
              "
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 50vw"
              alt=""
              className="feature-image"
            />
            <div
              id="w-node-e8d751f0-9716-6d3a-19e4-cef19aff37f7-aba3bc5b"
              className="feature-details"
            >
              <div className="subtitle">Feature</div>
              <h3>This is the feature</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla.
              </p>
              <div className="feature-button-wrapper">
                <a href="#" className="button secondary w-button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-section">
        <div className="container">
          <div className="feature-container reverse">
            <div
              id="w-node-e13045c4-d1d7-d562-d586-3a516e6180e6-aba3bc5b"
              className="feature-details"
            >
              <div className="subtitle">Feature</div>
              <h3>This is the feature</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla.
              </p>
              <div className="feature-button-wrapper">
                <a href="#" className="button secondary w-button">
                  Get Started
                </a>
              </div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
              loading="lazy"
              id="w-node-e13045c4-d1d7-d562-d586-3a516e6180e5-aba3bc5b"
              srcSet="
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png 500w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png 800w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
                https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp 2560w
              "
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 94vw, 50vw"
              alt=""
              className="feature-image"
            />
          </div>
        </div>
      </div>

      <div className="testimonial-slider-section">
        <div className="container">
          <div className="testimonial-slider-container">
            <div
              data-delay="4000"
              data-animation="slide"
              className="slider w-slider"
              data-autoplay="false"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit="0"
              data-nav-spacing="3"
              data-duration="500"
              data-infinite="true"
            >
              <div className="w-slider-mask">
                <div className="testimonial-slider-slide w-slide">
                  <div className="testimonial-slider-slide-grid">
                    <div
                      id="w-node-_70c388e4-87b6-8a71-3b93-fdb6fe454737-aba3bc5b"
                      className="testimonial-slider-slide-quote"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7e_quote-icon.svg"
                        loading="lazy"
                        alt=""
                        className="testimonial-slider-slide-quote-icon"
                      />
                      <div className="testimonial-slider-slide-quote-text">
                        Lorem ipsum dolor sit am, cov adipiscing elit ut aliam,
                        purus
                        <span className="text-color-primary-gradient">
                          sit amet luctus vetis
                        </span>
                        , lect adipiscing elit ut.
                      </div>
                    </div>
                    <div
                      id="w-node-_52cd5132-eb93-4512-ff0d-cf04e1ff02a2-aba3bc5b"
                      className="testimonial-slider-slide-person"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png"
                        loading="lazy"
                        srcSet="
                          https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image-p-500.png 500w,
                          https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png 800w
                        "
                        alt=""
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 67vw, 26vw"
                        className="testimonial-slider-slide-person-image"
                      />
                      <div className="testimonial-slider-slide-person-details-container">
                        <div className="testimonial-slider-slide-person-details">
                          <div className="testimonial-slider-slide-person-details-left">
                            <div className="testimonial-slider-slide-person-details-name">
                              Jessica Smith
                            </div>
                            <div className="testimonial-slider-slide-person-details-title">
                              Founder at Company
                            </div>
                          </div>
                          <img
                            src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc81_testimonial-slider-stars.svg"
                            loading="lazy"
                            id="w-node-_40c7ffc9-9925-3ba5-1351-c80d0b58d915-aba3bc5b"
                            alt=""
                            className="testimonial-slider-slide-person-details-stars"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slider-slide w-slide">
                  <div className="testimonial-slider-slide-grid">
                    <div
                      id="w-node-b1532858-e30f-cb22-aace-2da5fb134ac5-aba3bc5b"
                      className="testimonial-slider-slide-quote"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7e_quote-icon.svg"
                        loading="lazy"
                        alt=""
                        className="testimonial-slider-slide-quote-icon"
                      />
                      <div className="testimonial-slider-slide-quote-text">
                        Lorem ipsum dolor sit am, cov adipiscing elit ut aliam,
                        purus
                        <span className="text-color-primary-gradient">
                          sit amet luctus vetis
                        </span>
                        , lect adipiscing elit ut.
                      </div>
                    </div>
                    <div
                      id="w-node-b1532858-e30f-cb22-aace-2da5fb134acc-aba3bc5b"
                      className="testimonial-slider-slide-person"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png"
                        loading="lazy"
                        srcSet="
                          https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image-p-500.png 500w,
                          https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc80_testimonial-slider-image.png 800w
                        "
                        alt=""
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 67vw, 26vw"
                        className="testimonial-slider-slide-person-image"
                      />
                      <div className="testimonial-slider-slide-person-details-container">
                        <div className="testimonial-slider-slide-person-details">
                          <div className="testimonial-slider-slide-person-details-left">
                            <div className="testimonial-slider-slide-person-details-name">
                              Jessica Smith
                            </div>
                            <div className="testimonial-slider-slide-person-details-title">
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
              <div className="testimonial-slider-arrow left w-slider-arrow-left">
                <div className="testimonial-slider-arrow-icon w-icon-slider-left"></div>
              </div>
              <div className="testimonial-slider-arrow right w-slider-arrow-right">
                <div className="testimonial-slider-arrow-icon w-icon-slider-right"></div>
              </div>
              <div className="testimonial-slider-nav w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="_3-grid-feature-section">
        <div className="container">
          <div className="_3-grid-feature-container">
            <h2>
              Why do customers use
              <span className="text-color-primary-gradient">Zenden?</span>
            </h2>
          </div>
          <div className="_3-grid-feature-grid">
            <div
              id="w-node-_1b8e24cb-a4ce-c489-d0a7-cdebdb76d3da-aba3bc5b"
              className="feature-item-box"
            >
              <img
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                loading="lazy"
                alt=""
                className="feature-item-icon"
              />
              <h4>Feature #1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus.
              </p>
            </div>
            <div
              id="w-node-_26f8912b-e81e-b8e9-d859-e3a28fcab29a-aba3bc5b"
              className="feature-item-box"
            >
              <img
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                loading="lazy"
                alt=""
                className="feature-item-icon"
              />
              <h4>Feature #1</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus.
              </p>
            </div>
            <div
              id="w-node-_80015121-6913-86c6-4745-e6d54ee8f570-aba3bc5b"
              className="feature-item-box"
            >
              <img
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc7d_icon.svg"
                loading="lazy"
                alt=""
                className="feature-item-icon"
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

      <div className="big-ui-feature-section">
        <div className="container">
          <div className="big-ui-feature-container">
            <div className="title-section">
              <div className="subtitle">Feature</div>
              <h2>
                This is a headline talking about some
                <span className="text-color-primary-gradient">
                  cool features
                </span>
                .
              </h2>
            </div>
            <div className="big-ui-feature-main">
              <img
                src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp"
                loading="lazy"
                id="w-node-c0d117de-1f0e-fec3-eaeb-65cf0148fc1b-aba3bc5b"
                srcSet="
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-500.png 500w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-800.png 800w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1080.png 1080w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-1600.png 1600w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1-p-2000.png 2000w,
                  https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc77_ui-1.webp 2560w
                "
                sizes="(max-width: 479px) 92vw, (max-width: 991px) 94vw, 51vw"
                alt=""
                className="big-ui-feature-image"
              />
              <div
                id="w-node-_3f7c290e-1eed-baac-60e3-572e507c0c5a-aba3bc5b"
                className="big-ui-feature-side"
              >
                <div
                  id="w-node-_9f793c5a-dba5-a94c-ba5a-83db113ef7d1-aba3bc5b"
                  className="big-feature-side-item"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc82_big-feature-icon.svg"
                    loading="lazy"
                    alt=""
                    className="big-feature-side-item-icon"
                  />
                  <h4 className="big-feature-side-item-title">Feature name</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consec adipiscing elit ut
                    aliquam, purus sit ame elit ut aliqu ipsum dolor sit.
                  </p>
                </div>
                <div
                  id="w-node-_4651a2f3-91a6-d81f-adad-63cecdf2e263-aba3bc5b"
                  className="big-feature-side-item"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc82_big-feature-icon.svg"
                    loading="lazy"
                    alt=""
                    className="big-feature-side-item-icon"
                  />
                  <h4 className="big-feature-side-item-title">Feature name</h4>
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

      <div className="cta-section">
        <div className="container">
          <div className="cta-container">
            <img
              src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc84_logo-cta.png"
              loading="lazy"
              alt=""
              className="cta-logo"
            />
            <div className="cta-content">
              <h2>Get started with Zenden today.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non.
              </p>
            </div>
            <a href="#" className="button secondary w-button">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-wrapper">
              <div className="footer-top-left">
                <img
                  src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc76_logo.svg"
                  loading="lazy"
                  alt=""
                  className="footer-logo"
                />
                <p>
                  Lorem ipsum dolor sit amet, consec adipiscing elit ut ali,
                  purus sit ame elit ut aliqu ipsum dolor sit.
                </p>
                <div className="footer-social-links">
                  <a
                    href="#"
                    className="footer-social-link-button w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc91_fb-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-social-link-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link-button w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc92_twitter-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-social-link-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link-button w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc93_instagram-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-social-link-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link-button w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/65088655740ea01aaba3bc94_linkedin-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-social-link-icon"
                    />
                  </a>
                </div>
              </div>
              <div className="footer-top-links">
                <div
                  id="w-node-_099c564d-ea98-c218-2774-d4f825bf2f4c-19f04aa8"
                  className="footer-top-links-column"
                >
                  <div className="footer-top-links-title">Pages</div>
                  <a
                    id="w-node-_32e1ec2e-f8a4-1731-5b29-62ba57da303b-19f04aa8"
                    href="/"
                    aria-current="page"
                    className="footer-top-link w--current"
                  >
                    Home
                  </a>
                  <a href="/features" className="footer-top-link">
                    Features
                  </a>
                  <a href="/pricing" className="footer-top-link">
                    Pricing
                  </a>
                  <a href="/about" className="footer-top-link">
                    About
                  </a>
                  <a href="/blog" className="footer-top-link">
                    Blog
                  </a>
                  <a href="/contact" className="footer-top-link">
                    Contact
                  </a>
                </div>
                <div
                  id="w-node-e7ba1ad8-82c9-04e4-ca70-e1670d3cc182-19f04aa8"
                  className="footer-top-links-column"
                >
                  <div className="footer-top-links-title">Admin</div>
                  <a
                    id="w-node-e7ba1ad8-82c9-04e4-ca70-e1670d3cc185-19f04aa8"
                    href="/styleguide"
                    className="footer-top-link"
                  >
                    Style Guide
                  </a>
                  <a href="/licenses" className="footer-top-link">
                    Licenses
                  </a>
                  <a href="/changelog" className="footer-top-link">
                    Changelog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-container">
              <div>
                © Template by
                <a
                  href="https://webflow.com/templates/designers/wan-studio"
                  target="_blank"
                  className="text-link"
                >
                  Gareth Wan
                </a>
              </div>
              <div>
                Powered by
                <a
                  href="http://webflow.com"
                  target="_blank"
                  className="text-link"
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
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://uploads-ssl.webflow.com/65088655740ea01aaba3bc2a/js/webflow.71949f2f3.js"
        type="text/javascript"
      ></script>
    </>
  );
};

export default Zenden;
