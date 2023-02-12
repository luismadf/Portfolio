import { ProjectList } from "components";
import { projectList } from "utils";

const Home = () => {
  return (
    <main>
      <section className="container mx-auto mt-12 mb-24">
        <h2 className="text-2xl mb-6">
          Hola, Soy Luis. <br />{" "}
          <span className="font-bold">Front End Developer</span> en Intelygenz.
        </h2>
        <h5 className="mb-6">
          Me encanta solucionar problemas y entregar excelencia.
        </h5>
      </section>

      <section className="container mx-auto mb-24">
        <h2 className="mb-12 text-2xl">
          Mis <span className="font-bold">proyectos</span>
        </h2>
        <ProjectList projects={projectList} />
      </section>
    </main>
  );
};

export default Home;
