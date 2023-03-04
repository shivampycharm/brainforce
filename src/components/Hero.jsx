import React from "react";
import "./../Style/hero.css";
import Image from "./../images/spacex1.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={Image} alt="Hero-Img" />
      <div className="hero-text">
        <h1>SpaceX</h1>
        <p> Filter to Display Rockets or Capsules</p>
      </div>
    </section>
  );
}

export default Hero;
