import { Modal, Footer, Header } from "../";
import { useModal } from "../../hooks";

const Layout = (props) => {
  const [modalInfo, handleOnClickModal] = useModal();

  return (
    <>
      <Header onOpenModal={handleOnClickModal} />
      {props.children}
      <Footer onOpenModal={handleOnClickModal} />
      <Modal modalInfo={modalInfo} handleOnClosed={handleOnClickModal} />
    </>
  );
};

export default Layout;
