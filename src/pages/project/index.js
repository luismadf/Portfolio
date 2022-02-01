import { useParams } from "react-router-dom";
import { getProjectById } from "../../utils/projectList";
import Image from "../../images/Cover.png";

import "./project.css";

const Project = () => {
  let { id } = useParams();
  const [{ name, info, desktop, mobile, stack, code, live }] =
    getProjectById(id);
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
                    <a href={code} target="_blank">
                      Ir al Código
                    </a>
                  </li>
                </ul>
              )}
              {live && (
                <ul>
                  <li className="title">LIVE</li>
                  <li>
                    <a href={live} target="_blank">
                      Ir a la Web
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="intro__image">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="
            0
            0
            414.34375
            32
          "
            style={{
              borderRadius: "8px 8px 0px 0px",
              backgroundColor: "rgb(232, 232, 232",
            }}
          >
            <g fill="none" fill-rule="nonzero">
              <rect width="100%" fill="#e8e8e8"></rect>
              <circle
                stroke="#F04744"
                fill="#FF5F56"
                cx="20"
                cy="17"
                r="6"
              ></circle>
              <circle
                stroke="#EBA03F"
                fill="#FFBD2E"
                cx="40"
                cy="17"
                r="6"
              ></circle>
              <circle
                stroke="#13AB42"
                fill="#27C93F"
                cx="60"
                cy="17"
                r="6"
              ></circle>
            </g>
          </svg> */}
            <img src={mobile} alt="" />
          </div>
        </div>

        <div className="project__purpose mb-5">
          <h2>Proposito del Projecto</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            fringilla purus. Cras at elit urna. Quisque quis neque iaculis,
            aliquam magna in, volutpat mi. Nullam commodo nisi turpis, quis
            venenatis orci malesuada non. Aliquam felis justo, suscipit et
            mauris non, tempus placerat nulla.
          </p>
        </div>

        <div className="project__planning mb-5">
          <div className="planning__img">
            <img src={desktop || Image} alt="Project Cover" />
          </div>

          <div className="plannig__text">
            <div className="project__stack mb-3">
              <h2>Explicación del Stack</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sed fringilla purus. Cras at elit urna. Quisque quis neque
                iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi
                turpis, quis venenatis orci malesuada non. Aliquam felis justo,
                suscipit et mauris non, tempus placerat nulla.
              </p>
            </div>
            <div className="mb-3">
              <h2>Proceso de planificación y problemas</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sed fringilla purus. Cras at elit urna. Quisque quis neque
                iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi
                turpis, quis venenatis orci malesuada non. Aliquam felis justo,
                suscipit et mauris non, tempus placerat nulla.
              </p>
            </div>
            <div className="project__stack ">
              <h2>Lección aprendida</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sed fringilla purus. Cras at elit urna. Quisque quis neque
                iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi
                turpis, quis venenatis orci malesuada non. Aliquam felis justo,
                suscipit et mauris non, tempus placerat nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
