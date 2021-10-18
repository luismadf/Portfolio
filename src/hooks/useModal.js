import { useState } from "react";

const useModal = () => {
  const [modalInfo, setModalInfo] = useState({
    status: true,
    info: {
      name: "",
      image: "",
      laptopImage: "",
      description: "",
      contact: "",
      github: "",
      live: "",
    },
  });

  const handleOnClickModal = (info = {}) => {
    setModalInfo({ status: !modalInfo?.status, info });
  };

  return [modalInfo, handleOnClickModal];
};

export default useModal