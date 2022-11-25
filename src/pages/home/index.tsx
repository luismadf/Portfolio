import ImgLuis from "../../images/luis1.png";
import { Project } from "../../components";
import { projectList } from "../../utils/projectList";
import { Link, Text } from "@nextui-org/react";

import "./home.scss";

function Home() {
  return (
    <main>
      <div className="hero mt-2 mb-6">
        <div className="container">
          <div className="hero__text">
            <Text size="$5xl">
              Hi, I'm{" "}
              <Text span b>
                Luis
              </Text>
              .
            </Text>
            <Text size="$5xl" className="mb-1">
              Front End Developer at{" "}
              <Text span b>
                Intelygenz
              </Text>
              .
            </Text>
            <Text size="$5xl"></Text>
            <Text className="mb-2">
              Me encanta solucionar problemas y entregar excelencia.
            </Text>
            <Link color="primary">
              Echa un vistazo a mis proyectos
              <i className="fas fa-arrow-down ml-1" />
            </Link>
          </div>
          <div className="new__img">
            <img src="/images/luis1.png" alt="" />
          </div>
          {/* <div className="img">
            <img src={ImgLuis} alt="Luis" />
          </div> */}
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
