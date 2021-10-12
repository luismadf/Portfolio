import React from "react";
import styled from "@emotion/styled";
import Project from "../Projects/Project";
import Batatabit from "../../images/Cover.png";
import BatatabitLaptop from "../../images/p4.jpg";
import Crowfund from "../../images/Crowfund.png";
import CrowfundLaptop from "../../images/p5.png";
import Loopstudio from "../../images/Loopstudio.png";
import LoopstudioLaptop from "../../images/p6.png";
import Luisexchange from "../../images/Luisexchange.png";
import LuisexchangeLaptop from "../../images/p7.jpg";
import Bienesraices from "../../images/Bienesraices.png";
import BienesraicesLaptop from "../../images/p10.jpg";
import MERNTask from "../../images/MERNTask.png";
import MERNTaskLaptop from "../../images/p8.jpg";
import Digitalproduct from "../../images/Digitalproduct.png";
import DigitalproductLaptop from "../../images/p9.jpg";

import "./ProjectList.css";

const pList = [
  {
    name: "Batatabit",
    image: Batatabit,
    laptopImage: BatatabitLaptop,
    github: "https://github.com/luismadf/Batatabit",
    live: "https://luismadf.github.io/Batatabit/",
  },
  {
    name: "Crowdfund",
    image: Crowfund,
    laptopImage: CrowfundLaptop,
    github: "https://github.com/luismadf/Crowdfund",
    live: "https://luismadf.github.io/Crowdfund/",
  },
  {
    name: "Loopstudio",
    image: Loopstudio,
    laptopImage: LoopstudioLaptop,
    github: "https://github.com/luismadf/Loopstudio",
    live: "https://luismadf.github.io/Loopstudio/",
  },
  {
    name: "Luis Exchange",
    image: Luisexchange,
    laptopImage: LuisexchangeLaptop,
    live: "https://luisexchange.netlify.app/",
    github: "https://github.com/luismadf/luis-exchange",
  },
  {
    name: "Bienes Raices",
    image: Bienesraices,
    laptopImage: BienesraicesLaptop,
    live: "https://frosty-swartz-1757ff.netlify.app/",
    github: "https://luismadf.github.io/Loopstudio/",
  },
  {
    name: "MERNTask",
    image: MERNTask,
    laptopImage: MERNTaskLaptop,
    live: "https://jolly-bell-a52ce9.netlify.app/",
    github: "https://luismadf.github.io/Loopstudio/",
  },
  {
    name: "Digital Product",
    image: Digitalproduct,
    laptopImage: DigitalproductLaptop,
    github: "https://github.com/luismadf/Digital_product_react",
    live: "https://digitalproductreact.netlify.app/",
  },
];

const ProjectList = () => {
  return (
    <div className="projectList">
      {pList.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
