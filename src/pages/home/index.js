import { Project } from "../../components";
import { projectList } from "../../utils/projectList";

import "./home.scss";

function Home() {
  return (
    <main>
      <div class="hero mt-2 mb-6">
        <div className="container">
          <div class="hero__text">
            <h2 class="hero__title">
              Hola, Soy Luis. <br /> <span>Front End Developer</span> en
              MyInvestor.
            </h2>
            <h5 class="hero__description">
              Me encanta solucionar problemas y entregar excelencia.
            </h5>
            <p class="hero__look">
              <a href="#projects">
                Echa un vistazo a mis proyectos
                <i class="fas fa-arrow-down"></i>
              </a>
            </p>
          </div>
          <div className="img">
            <img src="/images/luis1.png" alt="Luis" />
          </div>
        </div>
      </div>

      <div class="container mb-6" id="projects">
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
