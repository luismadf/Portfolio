import { ProjectList } from "components";
import { projectList } from "utils";

const Home = () => {
  return (
    <main>
      <section className="container mx-auto mt-12 mb-20">
        <h2 className="text-4xl mb-4 font-light leading-snug">
          Hola, Soy Luis. <br />
          <span className="font-extrabold">Front End Developer</span> en
          Intelygenz.
        </h2>
        <h5 className="mb-6 text-lg">
          Me encanta solucionar problemas y entregar excelencia.
        </h5>
      </section>

      <section className="container mx-auto mb-24">
        <h2 className="mb-12 text-4xl font-light">
          Mis <span className="font-extrabold">proyectos</span>
        </h2>
        <ProjectList projects={projectList} />
      </section>
    </main>
  );
};

export default Home;
