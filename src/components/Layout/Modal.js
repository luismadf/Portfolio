import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../actions/generalActions";
import ContactIcons from "../ContactIcons";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  margin: 5vh auto;
  background-color: white;
  width: 95%;
  max-width: 800px;
  border-radius: 10px;

  .container_modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 30px;

    .close_icon {
      position: absolute;
      top: 15px;
      right: 17px;
      font-size: 23px;
      cursor: pointer;
    }

    h2 {
      font-size: 35px;
      margin-bottom: 50px;

      @media (max-width: 1000px) {
        text-align: center;
      }
    }

    img {
      width: 100%;
      margin: 0px 0 50px 0;
    }

    p {
      line-height: 25px;
      text-align: center;
    }
  }
`;

const Buttons = styled.div`
  margin-bottom: 50px;

  .button {
    display: inline-block;
    height: 40px;
    padding: 10px 15px;
    border-radius: 100px;
    border: none;
    color: white;
    font-size: 14px;
    font-family: "Commissioner", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 20px;
    text-decoration: none;

    @media (max-width: 1000px) {
      display: block;
      margin-bottom: 20px;
      width: 100%;
      text-align: center;
      width: 100%;
    }
  }

  .GithubButton {
    background-color: #333;
  }

  .NormalButton {
    background-color: #4398f1;
  }

  @media (max-width: 1000px) {
    margin-bottom: 30px;
  }
`;

const Modal = () => {
  const dispatch = useDispatch();

  const modalInfo = useSelector((state) => state.general.modalInfo);

  const {
    name,
    image,
    laptopImage,
    description,
    contact,
    github,
    live,
  } = modalInfo;

  const showModal = () => {
    dispatch(toggleModal());
  };

  return (
    <ModalContainer>
      <div className="container_modal">
        <div className="close_icon">
          <i class="fas fa-times" onClick={() => showModal()}></i>
        </div>
        <h2>Welcome to {name}!</h2>

        {laptopImage ? <img src={laptopImage} alt="" /> : null}

        {contact ? null : (
          <Buttons>
            <a
              className="button GithubButton"
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              See on Github <i class="fab fa-github"></i>
            </a>
            <a
              className="button NormalButton"
              href={live}
              rel="noreferrer"
              target="_blank"
            >
              See Online <i class="fas fa-globe-americas"></i>
            </a>
          </Buttons>
        )}

        {description ? <p>{description}</p> : null}
        {contact ? <ContactIcons /> : null}
      </div>
    </ModalContainer>
  );
};

export default Modal;
