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
    <div>
      <head>
        <meta charSet="utf-8" />
        <title>Zenden</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Webflow" />
        <link
          href="https://uploads-ssl.webflow.com/650824d879d04aebae0ac3de/css/betting-app.webflow.415033636.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
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
        <div className="container">
          <h1 className="display-heading-1">
            Bet Smart, Play Safe,
            <span className="text-color-primary-gradient">Win Money</span>
          </h1>
          <p>
            Betting made smart and safe at Zenden. Explore strategies like
            positive EV and arbitrage betting to maximize wins while promoting
            responsible gambling. We provide data, insights, and tools to help
            you bet intelligently and enjoy the thrill of betting without
            compromising financial well-being. Start your journey to informed
            and profitable betting today!
          </p>
        </div>
      </body>
    </div>
  );
};

export default Zenden;
