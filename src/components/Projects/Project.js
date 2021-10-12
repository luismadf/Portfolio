import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../actions/generalActions";
import Image from "../../images/Cover.png";
import "./Project.css";

const Project = ({ project }) => {
  const { name, image, description } = project;

  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(toggleModal(project));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="project">
      <img
        src={image || Image}
        alt="Project Cover"
        onClick={() => showModal()}
      />
      <h3 className="project__title" onClick={() => showModal()}>
        {name || "Project Name"}
      </h3>
      <p className="project__description">
        {description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristiqfacilisis fringilla."}
      </p>
      <button
        className="project__button"
        type="button"
        onClick={() => showModal()}
      >
        Ver proyecto <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Project;
