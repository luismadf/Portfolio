import React from "react";
import img from "../images/1.png";

const Project = () => {
  return (
    <div class="project-2">
      <img src={img} alt="" />
      <div class="project-overlay">
        <h2>Crowdfund</h2>
        <a href="https://luismadf.github.io/Crowdfund/" target="_blank">
          Live Preview <i class="fas fa-arrow-right"></i>
        </a>
        <a href="#">
          About this <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
