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

export const getProjectById = (id: any) => {
  return projectList.filter((project) => project.id === parseInt(id));
};

export const cvInfo = {
  name: "Luis",
  lastName: "De Freites",
  position: "Front-end Developer",
  image: "/images/cv-profile.png",
  description:
    "I’m a self-taught front-end developer, focused on the Marketing Automation domain. I primarily work with React and NextJs, but I’m equally capable in Vanilla javascript and Node. My experience includes coding/crafting Landing Pages and Emails, automation of Marketing Campaigns and segmentation, UI & UX, as well as integration with 3rd-party services and system like Hubspot and Wordpress. I'm agile on process optimization, and diligently work to improve our internal processes and reduce time-to-market for our tools and services. I’m an easy-going developer, naturally able to slide into any team and bring value from day 1.",
  social: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/luis-de-freites-6a5888181/",
    },
    {
      name: "email",
      url: "mailto:luisdefreites120@gmail.com",
    },
  ],
  experience: [
    {
      companyName: "Intelygenz",
      position: "Front-end Developer",
      time: "oct 2022 - now",
    },
    {
      companyName: "MyInvestor",
      position: "Front-end Developer",
      time: "jun 2021 - oct 2022",
    },
    {
      companyName: "Rentchester",
      position: "Front-end Developer",
      time: "abr 2021 - jun 2021",
    },
  ],
  skills: [
    "Component Architecture",
    "React, Next, Redux, React Native",
    "Node and Express",
    "Javascript / Typescript",
    "REST API Consumption",
    "Advanced CSS (Flexbox, Grid) and SASS",
    "Bootstrap, MaterialUI, Next UI, Storybook",
    "Marketing Automation",
    "Version Control through GIT, GitFlow",
  ],
  education: [
    {
      title: "title",
      description: "description",
    },
  ],
  languages: ["English - CI", "Spanish - Native"],
};
