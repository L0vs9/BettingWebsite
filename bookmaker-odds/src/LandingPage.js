import React from "react";
import "./LandingPage.css";

const strategies = [
  {
    title: "Martingale Strategy",
    description:
      "This strategy involves doubling your bet after each loss, with the idea that you will eventually win and recover all previous losses.",
  },
  {
    title: "Fibonacci Strategy",
    description:
      "Based on the famous Fibonacci sequence, this strategy involves betting by following the sequence, aiming to gradually recover losses.",
  },
  {
    title: "Labouchere System",
    description:
      "A cancellation system where you create a sequence of numbers and adjust your bets based on wins and losses.",
  },
  {
    title: "Paroli System",
    description:
      "A positive progression system where you double your bet after each win, designed to maximize winning streaks.",
  },
  {
    title: "D'Alembert System",
    description:
      "A balanced betting strategy where you increase your bet by one unit after a loss and decrease it by one unit after a win.",
  },
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to BetKnights</h1>
      </header>
      <section className="content">
        <div className="section">
          <h2>Betting Strategies</h2>
          <p>
            At BetKnights, we offer a variety of betting strategies to help you
            maximize your chances of winning:
          </p>
          <div className="strategies">
            {strategies.map((strategy, index) => (
              <div key={index} className="strategy">
                <h3>{strategy.title}</h3>
                <p>{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
