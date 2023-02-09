import { useNavigate } from "react-router-dom";

import "./Project.css";

const Project = ({ project }) => {
  const { id, name, images, info, buttonColor } = project;
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      <div className="project">
        <img
          src={images?.show || "/images/Cover.png"}
          alt="Project Cover"
          onClick={() => handleClick(id)}
        />
        <h3 className="project__title" onClick={() => handleClick(id)}>
          {name || "Project Name"}
        </h3>
        <p className="project__description">
          {info.shortDescription ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristiqfacilisis fringilla."}
        </p>
        <button
          className={`project__button button__underline--${buttonColor}`}
          type="button"
          onClick={() => handleClick(id)}
        >
          Ver proyecto <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Project;
