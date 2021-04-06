import React from "react";
import styled from "@emotion/styled";
import Project from "./Project";
import Batatabit from "../../images/Cover.png";
import Crowfund from "../../images/Crowfund.png";
import CrowfundLaptop from "../../images/p5.png";
import Loopstudio from "../../images/Loopstudio.png";
import LoopstudioLaptop from "../../images/p6.png";
import Luisexchange from "../../images/Luisexchange.png";
import Bienesraices from "../../images/Bienesraices.png";
import MERNTask from "../../images/MERNTask.png";
import Digitalproduct from "../../images/Digitalproduct.png";

const Parent = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

const pList = [
  { name: "Batatabit", image: Batatabit },
  { name: "Crowdfund", image: Crowfund, laptopImage: CrowfundLaptop },
  { name: "Loopstudio", image: Loopstudio, laptopImage: LoopstudioLaptop },
  { name: "Luis Exchange", image: Luisexchange },
  { name: "Bienes Raices", image: Bienesraices },
  { name: "MERNTask", image: MERNTask },
  { name: "Digital Product", image: Digitalproduct },
];

const ProjectList = () => {
  return (
    <Parent>
      <List>
        {pList.map((project) => (
          <Project project={project} />
        ))}
      </List>
    </Parent>
  );
};

export default ProjectList;
