import React from "react";
import Image from "../../images/Cover.png";
import "./Project.css";
import { useModal } from "../../hooks/useModal";
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
        <h3 className="project__title" /* onClick={() => showModal()} */>
          {name || "Project Name"}
        </h3>
        <p className="project__description">
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristiqfacilisis fringilla."}
        </p>
        <button
          className={`project__button button__underline--${buttonColor}`}
          type="button"
          /* onClick={() => showModal()} */
        >
          Ver proyecto <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Project;
