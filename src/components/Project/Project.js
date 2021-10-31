import React from "react";
import Image from "../../images/Cover.png";
import "./Project.css";
import { useModal } from "../../hooks";
import { Modal } from "..";

const Project = ({ project }) => {
  const { name, image, description, buttonColor } = project;
  const [modalInfo, handleOnClickModal] = useModal();

  return (
    <>
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
      <div className="project">
        <img
          src={image || Image}
          alt="Project Cover"
          onClick={() => handleOnClickModal(project)}
        />
        <h3
          className="project__title"
          onClick={() => handleOnClickModal(project)}
        >
          {name || "Project Name"}
        </h3>
        <p className="project__description">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristiqfacilisis fringilla."}
        </p>
        <button
          className={`project__button button__underline--${buttonColor}`}
          type="button"
          onClick={() => handleOnClickModal(project)}
        >
          Ver proyecto <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Project;