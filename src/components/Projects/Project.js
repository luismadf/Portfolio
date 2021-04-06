import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../actions/generalActions";
import styled from "@emotion/styled";
import Image from "../../images/Cover.png";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  padding: 10px;
  margin: 30px 0;

  img {
    object-fit: cover;
    object-position: 0% 0%;
    width: 100%;
    max-height: 600px;
    border-radius: 10px;
    box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 23px;
    display: block;
    width: 100%;
    text-align: left;
    margin: 20px 0;
  }
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 78% 22%;
  align-items: center;
  width: 100%;

  button {
    width: 112px;
    height: 40px;
    border-radius: 100px;
    border: none;
    background-color: #4398f1;
    color: white;
    font-size: 14px;
    font-family: "Commissioner", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const Project = ({ project }) => {
  const { name, image } = project;

  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(toggleModal(project));
  };

  return (
    <ProjectContainer>
      <img src={image || Image} alt="Project Cover" />
      <h3>{name || "Project Name"}</h3>
      <Description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tristique sodales magna, eget imperdiet enim lacinia aliquam. In
          facilisis fringilla.
        </p>
        <button type="button" onClick={() => showModal()}>
          Saber más
        </button>
      </Description>
    </ProjectContainer>
  );
};

export default Project;
