// Variables
const contenedorProyectos = document.querySelector(".projects-container");

// Proyectos
const proyectos = [
  {
    nombre: "VICTORYA!",
    descripcion:
      "Pagina web para un restaurante, realizada para practicar maquetacion a partir de un diseño.",
    url: "https://luismadf.github.io/Restaurant_Landing_Page/",
    imagen: "1.png",
  },
  {
    nombre: "Digital Product",
    descripcion:
      "Pagina web para un restaurante, realizada para practicar maquetacion a partir de un diseño.",
    url: "https://digitalproductreact.netlify.app/",
    imagen: "2.png",
  },
  {
    nombre: "Batata Bit",
    descripcion:
      "Pagina web para un restaurante, realizada para practicar maquetacion a partir de un diseño.",
    url: "https://luismadf.github.io/Batatabit/",
    imagen: "3.png",
  },
  {
    nombre: "Luis Exchange",
    descripcion:
      "Pagina web para un restaurante, realizada para practicar maquetacion a partir de un diseño.",
    url: "https://luisexchange.netlify.app/",
    imagen: "4.png",
  },
];

// Funciones

function mostrarProyectos() {
  proyectos.forEach((proyecto) => {
    const { nombre, descripcion, url, imagen } = proyecto;
    const cuerpo = document.createElement("article");
    cuerpo.classList.add("card");
    cuerpo.innerHTML = `
    <div class="card-img">
      <img src="./assets/${imagen}" alt="" />
    </div>
    <div class="card-texts">
      <h3 class="card-titulo">${nombre}</h3>
      <p class="card-desc">
        ${descripcion}
      </p>
      <a
        class="card-button"
        href="${url}"
        target="_blank"
        >VER DEMO</a
      >
      <a class="card-button">VER GITHUB</a>
    </div>`;
    contenedorProyectos.appendChild(cuerpo);
  });
}

mostrarProyectos();
