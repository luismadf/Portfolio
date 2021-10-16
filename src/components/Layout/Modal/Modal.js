import ContactIcons from "../../ContactIcons";
import "./Modal.css";

const Modal = ({ modalInfo, handleOnClosed }) => {
  const { modalStatus, modalInformation } = modalInfo;

  const { name, image, laptopImage, description, contact, github, live } =
    modalInformation;

  console.log(modalInformation);

  return (
    <div className={`overlay ${modalStatus ? "hide" : ""}`}>
      <div className="modal">
        <div className="container">
          <i
            class="fas fa-times modal__closeicon"
            onClick={() => handleOnClosed()}
          ></i>
          <h2 className="modal__title">Welcome to {name}!</h2>

          {laptopImage ? <img src={laptopImage} alt="" /> : null}

          {contact ? null : (
            <div className="button">
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
            </div>
          )}

          {description ? (
            <p className="modal__description">{description}</p>
          ) : null}
          {contact ? <ContactIcons /> : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
