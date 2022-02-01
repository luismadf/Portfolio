import Batatabit from "../images/batatabit_home.png";
import BatatabitDesktop from "../images/projects/batatabit/desktop.jpg";
import BatatabitMobile from "../images/projects/batatabit/mobile.png";
import Crowfund from "../images/crowfund_home.png";
import CrowfundDesktop from "../images/projects/crowdfund/desktop.jpg";
import CrowfundMobile from "../images/projects/crowdfund/mobile.png";
import Loopstudio from "../images/loopstudio_home.png";
import LoopstudioLaptop from "../images/p6.png";
import Sunnyside from "../images/sunnyside_home.png";
import Luisexchange from "../images/Luisexchange.png";
import LuisexchangeLaptop from "../images/p7.jpg";
import Bienesraices from "../images/Bienesraices.png";
import BienesraicesLaptop from "../images/p10.jpg";
import MERNTask from "../images/MERNTask.png";
import MERNTaskLaptop from "../images/p8.jpg";
import Digitalproduct from "../images/Digitalproduct.png";
import DigitalproductLaptop from "../images/p9.jpg";

export const projectList = [
  {
    id: 1,
    name: "Batatabit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi turpis, quis venenatis orci malesuada non. Aliquam felis justo, suscipit et mauris non, tempus placerat nulla. Aliquam erat volutpat. Aliquam velit ante, iaculis eu dignissim ut, luctus blandit enim. Vestibulum id aliquam lectus, convallis vehicula massa. Sed tempor auctor massa, sed porttitor massa euismod quis. Nulla vestibulum metus turpis. Ut lacinia eleifend lacus. Sed malesuada sed urna id efficitur.",
    image: Batatabit,
    desktop: BatatabitDesktop,
    mobile: BatatabitMobile,
    buttonColor: "orange",
    stack: ["html", "css", "javascript"],
    code: "https://github.com/luismadf/Batatabit",
    live: "https://luismadf.github.io/Batatabit/",
  },
  {
    id: 2,
    name: "Crowdfund",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed fringilla purus. Cras at elit urna. Quisque quis neque iaculis, aliquam magna in, volutpat mi. Nullam commodo nisi turpis, quis venenatis orci malesuada non. Aliquam felis justo, suscipit et mauris non, tempus placerat nulla. Aliquam erat volutpat. Aliquam velit ante, iaculis eu dignissim ut, luctus blandit enim. Vestibulum id aliquam lectus, convallis vehicula massa. Sed tempor auctor massa, sed porttitor massa euismod quis. Nulla vestibulum metus turpis. Ut lacinia eleifend lacus. Sed malesuada sed urna id efficitur.",
    image: Crowfund,
    desktop: CrowfundDesktop,
    mobile: CrowfundMobile,
    buttonColor: "blue",
    stack: ["html", "css", "javascript"],
    code: "https://github.com/luismadf/Crowdfund",
    live: "https://luismadf.github.io/Crowdfund/",
  },
  {
    id: 3,
    name: "Loopstudio",
    image: Loopstudio,
    laptopImage: LoopstudioLaptop,
    github: "https://github.com/luismadf/Loopstudio",
    live: "https://luismadf.github.io/Loopstudio/",
    buttonColor: "pink",
  },
  {
    id: 4,
    name: "Sunnyside Agency",
    image: Sunnyside,
    laptopImage: LoopstudioLaptop,
    github: "https://github.com/luismadf/SunnysideAgency",
    live: "https://sunnysideagencyproject.netlify.app/",
    buttonColor: "red",
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
