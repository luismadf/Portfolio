import ContactIcons from "../ContactIcons";
import "./Modal.css";

const Modal = ({ modalInfo, handleOnClosed }) => {
  const { status, info } = modalInfo;
  const { name, image, laptopImage, description, contact, github, live } = info;

  // console.log(status);

  return (
    <div className={`modal ${status ? "hide" : ""}`}>
      <div className="modal__wrapper">
        <i
          class="fas fa-times modal__closeicon"
          onClick={() => handleOnClosed()}
        ></i>
        <h2 className="modal__title">{name}</h2>

        {laptopImage ? <img src={laptopImage} alt="" /> : null}

        {contact ? null : (
          <div className="modal__buttons">
            <a
              className="modal__button GithubButton"
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              See on Github<i class="fab fa-github"></i>
            </a>
            <a
              className="modal__button NormalButton"
              href={live}
              rel="noreferrer"
              target="_blank"
            >
              See Online<i class="fas fa-globe-americas"></i>
            </a>
          </div>
        )}

        {description ? (
          <p className="modal__description">{description}</p>
        ) : null}
        {contact ? <ContactIcons /> : null}
      </div>
    </div>
  );
};

export default Modal;
