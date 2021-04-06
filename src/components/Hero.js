import React from "react";
import ImgLuis from "../images/luis1.png";

const Hero = () => {
  return (
    <div class="hero">
      <div class="text">
        <h1 class="title">
          <span>Hi, </span>I'm Luis De Freites a Front-end Developer.
        </h1>
        <p class="text-p">I love to create solutions and deliver excellence.</p>
        <p class="sub-p">
          <a href="#projects">
            Take a look at what I've been working on
            <i class="fas fa-arrow-down"></i>
          </a>
        </p>
      </div>
      <div class="img">
        <img src={ImgLuis} alt="" />
      </div>
    </div>
  );
};

export default Hero;
