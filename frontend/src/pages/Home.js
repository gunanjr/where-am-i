import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Where Am I?</h1>
      <p>Get a personalized study plan to reach your target CGPA.</p>
      <Link to="/dashboard" className="start-btn">Get Started</Link>
    </div>
  );
}

export default Home;
