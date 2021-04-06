import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../actions/generalActions";

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
  height: 800px;
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
    }

    img {
      width: 100%;
      margin: 50px 0;
    }
  }
`;

const Modal = () => {
  const dispatch = useDispatch();

  const modalInfo = useSelector((state) => state.general.modalInfo);

  const { name, image, laptopImage } = modalInfo;

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
        <img src={laptopImage} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tristique sodales magna, eget imperdiet enim lacinia aliquam. In
          facilisis fringilla.
        </p>
      </div>
    </ModalContainer>
  );
};

export default Modal;
