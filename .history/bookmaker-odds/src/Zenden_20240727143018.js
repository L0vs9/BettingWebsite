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
    import React from "react";
    import { Link as ScrollLink, Element } from "react-scroll";
    import "./App.css"; // Ensure this CSS file contains the styling
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <nav className="navbar">
              <div className="navbar-container">
                <div className="logo">
                  <img src="/path-to-monster-logo.png" alt="Monster.bet Logo" />
                  <span>MONSTER.BET</span>
                </div>
                <div className="nav-menu-wrapper">
                  <ul className="nav-links nav-menu">
                    <li>
                      <ScrollLink to="features" smooth={true} duration={500}>
                        Features
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink to="pricing" smooth={true} duration={500}>
                        Pricing
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink to="blog" smooth={true} duration={500}>
                        Blog
                      </ScrollLink>
                    </li>
                  </ul>
                  <div className="nav-menu-cta">
                    <button className="login-btn">Log in</button>
                    <button className="signup-btn">Sign up</button>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <Element name="features" className="section">
              <h2>Features Section</h2>
              {/* Add your Features content here */}
            </Element>
            <Element name="pricing" className="section">
              <h2>Pricing Section</h2>
              {/* Add your Pricing content here */}
            </Element>
            <Element name="blog" className="section">
              <h2>Blog Section</h2>
              {/* Add your Blog content here */}
            </Element>
          </main>
          <footer>
            <button className="buy-token-btn">Buy $MONBET</button>
            <div className="social-links">
              <a href="#discord">
                <img src="/path-to-discord-icon.png" alt="Discord" />
              </a>
              <a href="#twitter">
                <img src="/path-to-twitter-icon.png" alt="Twitter" />
              </a>
              <a href="#tiktok">
                <img src="/path-to-tiktok-icon.png" alt="TikTok" />
              </a>
              <a href="#instagram">
                <img src="/path-to-instagram-icon.png" alt="Instagram" />
              </a>
            </div>
          </footer>
        </div>
      );
    }
    
    export default App;
    
  );
};

export default Zenden;
