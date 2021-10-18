import { Project } from "../";
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
