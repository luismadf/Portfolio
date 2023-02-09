import { Project } from "../../components";
import { projectList } from "../../utils/projectList";

import "./home.scss";

function Home() {
  return (
    <main>
      <div className="hero mt-2 mb-6">
        <div className="container">
          <div className="hero__text">
            <h2 className="hero__title">
              Hola, Soy Luis. <br /> <span>Front End Developer</span> en
              MyInvestor.
            </h2>
            <h5 className="hero__description">
              Me encanta solucionar problemas y entregar excelencia.
            </h5>
            <p className="hero__look">
              <a href="#projects">
                Echa un vistazo a mis proyectos
                <i className="fas fa-arrow-down"></i>
              </a>
            </p>
          </div>
          <div className="img">
            <img src="/images/luis1.png" alt="Luis" />
          </div>
        </div>
      </div>

      <div className="container mb-6" id="projects">
        <h2 className="projects__title mb-6">
          Mis <span>proyectos</span>
        </h2>
        <div className="projects__list">
          {projectList.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
