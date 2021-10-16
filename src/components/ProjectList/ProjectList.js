import React from "react";
import styled from "@emotion/styled";
import Project from "../Projects/Project";
import { projectList } from "../../utils/projectList";

import "./ProjectList.css";

const ProjectList = () => {
  return (
    <div className="projectList">
      {projectList.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
