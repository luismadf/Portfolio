import { useState } from "react";

export const useModal = () => {
  const [modalStatus, setModalStatus] = useState(true);
  const [modalInfo, setModalInfo] = useState({
    modalStatus: modalStatus,
    modalInformation: {
      name: "",
      image: "",
      laptopImage: "",
      description: "",
      contact: "",
      github: "",
      live: "",
    },
  });

  const handleOnClickModal = (information) => {
    setModalStatus(!modalStatus);
    setModalInfo({
      modalStatus: modalStatus,
      modalInformation: information ? information : {},
    });
  };

  return [modalInfo, handleOnClickModal];
};
