import { useParams } from "react-router-dom";
import { getProjectById } from "../../utils/projectList";

import "./project.scss";

const Project: React.FC = () => {
  let { id } = useParams();

  const [{ name, info, images, stack, code, live }] = getProjectById(id);

  return (
    <>
      <div className="container">
        <div className="project__intro mb-5">
          <div className="intro__text">
            <h1>{name}</h1>
            <p className="mb-3">{info.description}</p>
            <div className="intro__characteristics mb-3">
              {stack && (
                <ul>
                  <li className="title">STACK</li>
                  {stack.map((data) => (
                    <li>{data.toUpperCase()}</li>
                  ))}
                </ul>
              )}
              {code && (
                <ul>
                  <li className="title">CÓDIGO</li>
                  <li>
                    <a href={code} target="_blank" rel="noopener">
                      Ir al Código
                    </a>
                  </li>
                </ul>
              )}
              {live && (
                <ul>
                  <li className="title">LIVE</li>
                  <li>
                    <a href={live} target="_blank" rel="noopener">
                      Ir a la Web
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="intro__image">
            <img src={images.mobile} alt="" />
          </div>
        </div>

        <div className="project__purpose mb-5">
          <h2>Proposito del Projecto</h2>
          <p className="">Muy pronto</p>
        </div>

        <div className="project__planning mb-5">
          <img
            className="project__planning--img"
            src={images.desktop || "/images/Cover.png"}
            alt="Project Cover"
          />

          <div className="project__planning--text">
            <div className="project__stack mb-3">
              <h2>Explicación del Stack</h2>
              <p>Muy pronto</p>
            </div>
            <div className="mb-3">
              <h2>Proceso de planificación y problemas</h2>
              <p>Muy pronto</p>
            </div>
            <div className="project__stack ">
              <h2>Lección aprendida</h2>
              <p>Muy pronto</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
