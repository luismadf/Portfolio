import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div class="logo">
          luisma<span>.dev</span>
        </div>
        <ul>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact me</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
