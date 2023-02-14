export const projectList = [
  {
    id: 1,
    name: "Batatabit",
    info: {
      shortDescription:
        "Batatabit es un servicio que te ayuda a cumplir tus sueños a traves de la criptomonedas, si, como lo leiste, compra y vende con nosotros, no hay tasas escondidas.",
      description:
        "Batatabit es un servicio que te ayuda a cumplir tus sueños a traves de la criptomonedas, si, como lo leiste, compra y vende con nosotros, no hay tasas escondidas, te mostramos las tendencias del mercado para que estes preparados y ademas con nuestra API puedes obtener información y realizar tu ¡AL INSTANTE!",
    },
    images: {
      show: "/images/projects/batatabit/show.png",
      desktop: "/images/projects/batatabit/desktop.jpg",
      mobile: "/images/projects/batatabit/mobile.png",
    },
    buttonColor: "after:bg-[#FAE1BB]",
    stack: ["html", "css", "javascript"],
    code: "https://github.com/luismadf/Batatabit",
    live: "https://luismadf.github.io/Batatabit/",
  },
  {
    id: 2,
    name: "Crowdfund",
    info: {
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi turpis, quis venenatis orci malesuada non. Aliquam felis justo, suscipit et mauris non, tempus placerat nulla. Aliquam erat volutpat. Aliquam velit ante, iaculis eu dignissim ut, luctus blandit enim. Vestibulum id aliquam lectus, convallis vehicula massa. Sed tempor auctor massa, sed porttitor massa euismod quis. Nulla vestibulum metus turpis. Ut lacinia eleifend lacus. Sed malesuada sed urna id efficitur.",
    },
    images: {
      show: "/images/projects/crowdfund/show.png",
      desktop: "/images/projects/crowdfund/desktop.jpg",
      mobile: "/images/projects/crowdfund/mobile.png",
    },
    buttonColor: "after:bg-[#D0ECFC]",
    stack: ["html", "css", "javascript"],
    code: "https://github.com/luismadf/Crowdfund",
    live: "https://luismadf.github.io/Crowdfund/",
  },
  {
    id: 3,
    name: "Loopstudio",
    info: {
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi turpis, quis venenatis orci malesuada non. Aliquam felis justo, suscipit et mauris non, tempus placerat nulla. Aliquam erat volutpat. Aliquam velit ante, iaculis eu dignissim ut, luctus blandit enim. Vestibulum id aliquam lectus, convallis vehicula massa. Sed tempor auctor massa, sed porttitor massa euismod quis. Nulla vestibulum metus turpis. Ut lacinia eleifend lacus. Sed malesuada sed urna id efficitur.",
    },
    images: {
      show: "/images/projects/loopstudio/show.png",
      desktop: "/images/projects/loopstudio/desktop.jpg",
      mobile: "/images/projects/loopstudio/mobile.png",
    },
    buttonColor: "after:bg-[#FFD5F6]",
    stack: ["html", "css", "javascript"],
    code: "https://github.com/luismadf/Loopstudio",
    live: "https://luismadf.github.io/Loopstudio/",
  },
  {
    id: 4,
    name: "Sunnyside Agency",
    info: {
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi turpis, quis venenatis orci malesuada non. Aliquam felis justo, suscipit et mauris non, tempus placerat nulla. Aliquam erat volutpat. Aliquam velit ante, iaculis eu dignissim ut, luctus blandit enim. Vestibulum id aliquam lectus, convallis vehicula massa. Sed tempor auctor massa, sed porttitor massa euismod quis. Nulla vestibulum metus turpis. Ut lacinia eleifend lacus. Sed malesuada sed urna id efficitur.",
    },
    images: {
      show: "/images/projects/sunnyside/show.png",
      desktop: "/images/projects/sunnyside/desktop.jpg",
      mobile: "/images/projects/sunnyside/mobile.png",
    },
    buttonColor: "after:bg-[#F7A3A3]",
    stack: ["html", "css", "javascript"],
    code: "https://github.com/luismadf/SunnysideAgency",
    live: "https://sunnysideagencyproject.netlify.app/",
  },
  /*   {
    name: "Luis Exchange",
    image: Luisexchange,
    laptopImage: LuisexchangeLaptop,
    live: "https://luisexchange.netlify.app/",
    github: "https://github.com/luismadf/luis-exchange",
  },
  {
    name: "Bienes Raices",
    image: Bienesraices,
    laptopImage: BienesraicesLaptop,
    live: "https://frosty-swartz-1757ff.netlify.app/",
    github: "https://luismadf.github.io/Loopstudio/",
  },
  {
    name: "MERNTask",
    image: MERNTask,
    laptopImage: MERNTaskLaptop,
    live: "https://jolly-bell-a52ce9.netlify.app/",
    github: "https://luismadf.github.io/Loopstudio/",
  },
  {
    name: "Digital Product",
    image: Digitalproduct,
    laptopImage: DigitalproductLaptop,
    github: "https://github.com/luismadf/Digital_product_react",
    live: "https://digitalproductreact.netlify.app/",
  }, */
];

export const getProjectById = (id) => {
  return projectList.filter((project) => project.id === parseInt(id));
};
