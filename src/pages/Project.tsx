import { useParams } from "react-router-dom";
import { getProjectById } from "utils";

const Project: React.FC = () => {
  let { id } = useParams();

  const [{ name, info, images, stack, code, live }] = getProjectById(id);

  return (
    <div className="container mx-auto my-12">
      <div className="mb-12 md:flex md:gap-6">
        <div className="md:w-2/4">
          <h1 className="text-2xl font-bold mb-6">{name}</h1>

          <p className="mb-6">{info.description}</p>

          <div className="grid grid-cols-3 mb-6">
            {stack && (
              <ul>
                <li className="font-bold uppercase mb-3">stack</li>
                {stack.map((data) => (
                  <li className="mb-1 uppercase">{data}</li>
                ))}
              </ul>
            )}
            {code && (
              <ul>
                <li className="font-bold uppercase mb-3">código</li>
                <li>
                  <a
                    className="font-medium text-blue-600 underline"
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir al Código
                  </a>
                </li>
              </ul>
            )}
            {live && (
              <ul>
                <li className="font-bold uppercase mb-3">live</li>
                <li>
                  <a
                    className="font-medium text-blue-600 underline"
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ir a la Web
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        <img
          src={images?.mobile}
          alt="project image"
          className="mx-auto w-4/5 md:w-2/5 lg:w-1/4"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-medium mb-6">Proposito del Projecto</h2>
        <p>Muy pronto</p>
      </div>

      <div className="md:flex md:gap-6">
        <img
          className="drop-shadow-xl mb-12 md:w-2/4"
          src={images.desktop || "/images/Cover.png"}
          alt="Project Cover"
        />

        <div className="md:w-2/4">
          <div className="mb-6">
            <h2 className="font-medium">Explicación del Stack</h2>
            <p>Muy pronto</p>
          </div>

          <div className="mb-6">
            <h2 className="font-medium">
              Proceso de planificación y problemas
            </h2>
            <p>Muy pronto</p>
          </div>

          <div className="mb-6">
            <h2 className="font-medium">Lección aprendida</h2>
            <p>Muy pronto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
