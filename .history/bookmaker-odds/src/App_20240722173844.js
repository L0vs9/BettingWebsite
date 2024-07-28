import React from "react";
import "./App.css"; // You'll need to create this CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">
            <img src="/path-to-monster-logo.png" alt="Monster.bet Logo" />
            <span>MONSTER.BET</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#token">Token</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
          <div className="auth-buttons">
            <button className="signup-btn">Sign Up</button>
            <button className="login-btn">Login</button>
          </div>
        </nav>
      </header>
      <main>{/* Add your main content here */}</main>
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
