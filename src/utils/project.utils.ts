import { Project, CVInfo } from 'types'

export const projectList: Project[] = [
  {
    id: 1,
    name: "Batatabit",
    translationKey: "batatabit",
    info: {
      shortDescription: "",
      description: "",
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
    translationKey: "crowdfund",
    info: {
      shortDescription: "",
      description: "",
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
    translationKey: "loopstudio",
    info: {
      shortDescription: "",
      description: "",
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
    translationKey: "sunnyside",
    info: {
      shortDescription: "",
      description: "",
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
  {
    id: 5,
    name: "Portfolio",
    translationKey: "portfolio",
    info: {
      shortDescription: "",
      description: "",
    },
    images: {
      show: "/images/og-image.svg",
      desktop: "/images/og-image.svg",
      mobile: "/images/og-image.svg",
    },
    buttonColor: "after:bg-[#93C5FD]",
    stack: ["react", "typescript", "vite", "tailwind css", "framer motion", "i18n"],
    code: "https://github.com/luismadf/Portfolio",
    live: "https://luisma.dev",
  },
];

export const getProjectById = (id: string | undefined): Project | undefined => {
  if (!id) return undefined
  return projectList.find((project) => project.id === parseInt(id))
}

export const cvInfo: CVInfo = {
  name: "Luis",
  lastName: "De Freites",
  position: "Front-end Developer",
  image: "/images/cv-profile.png",
  description:
    "I'm a self-taught front-end developer, focused on the Marketing Automation domain. I primarily work with React and NextJs, but I'm equally capable in Vanilla javascript and Node. My experience includes coding/crafting Landing Pages and Emails, automation of Marketing Campaigns and segmentation, UI & UX, as well as integration with 3rd-party services and system like Hubspot and Wordpress. I'm agile on process optimization, and diligently work to improve our internal processes and reduce time-to-market for our tools and services. I'm an easy-going developer, naturally able to slide into any team and bring value from day 1.",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/luis-de-freites-6a5888181/",
    },
    {
      name: "Email",
      url: "mailto:luisdefreites120@gmail.com",
    },
    {
      name: "GitHub",
      url: "https://github.com/luismadf",
    },
  ],
  experience: [
    {
      companyName: "Intelygenz",
      position: "Front-end Developer",
      time: "oct 2022 - now",
      description: "Building web applications with React, Next.js, and TypeScript. Working with agile methodologies and CI/CD pipelines.",
    },
    {
      companyName: "MyInvestor",
      position: "Front-end Developer",
      time: "jun 2021 - oct 2022",
      description: "Developed and maintained fintech applications. Implemented responsive UI components and integrated with REST APIs.",
    },
    {
      companyName: "Rentchester",
      position: "Front-end Developer",
      time: "abr 2021 - jun 2021",
      description: "Built real estate platform features using React. Worked on property listing and search functionality.",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "React Native", "TypeScript", "JavaScript"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "SASS", "CSS Grid", "Flexbox", "Material UI", "Storybook"],
    },
    {
      category: "State & Data",
      items: ["Redux", "REST APIs", "Node.js", "Express"],
    },
    {
      category: "Tools",
      items: ["Git", "GitFlow", "Vite", "Webpack", "Figma"],
    },
    {
      category: "Other",
      items: ["Component Architecture", "Marketing Automation", "Agile/Scrum"],
    },
  ],
  education: [
    {
      title: "Self-taught Developer",
      description: "Continuous learning through online platforms, documentation, and hands-on projects. Focused on modern frontend technologies and best practices.",
      year: "2020 - Present",
    },
    {
      title: "Frontend Development",
      description: "Comprehensive study of HTML, CSS, JavaScript, React ecosystem, and web development fundamentals.",
      year: "2020",
    },
  ],
  languages: ["English - C1", "Spanish - Native"],
};
