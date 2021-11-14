import React from "react";
import ImgLuis from "../../images/luis1.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div class="hero">
      <div className="container">
        <div class="hero__text">
          <h1 class="hero__title">
            Hi, I'm Luis. <br /> <span>Front End Developer</span> at MyInvestor.
          </h1>
          <p class="hero__description">
            I love to create solutions and deliver excellence.
          </p>
          <p class="hero__look">
            <a href="#projects">
              Take a look at what I've been working on
              <i class="fas fa-arrow-down"></i>
            </a>
          </p>
        </div>
        <div className="img">
          <img src={ImgLuis} alt="Luis" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
