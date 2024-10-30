const data = {
  name: "Kshitij Girkar",
  role: "Frontend Developer",
  company: "Zeus Learning",
  socialLinks: [
    {
      name: "github",
      url: "http://github.com/girkarkshitij",
      className: "fab fa-github",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/girkarkshitij/",
      className: "fab fa-linkedin",
    },
    {
      name: "twitter",
      url: "http://twitter.com/girkarkshitij",
      className: "fab fa-twitter",
    },
  ],
  address: "Mumbai, India",
  skills: [
    {
      id: 1,
      skill: "React.js",
    },
    {
      id: 2,
      skill: "Redux",
    },
    {
      id: 3,
      skill: "JavaScript",
    },
    {
      id: 4,
      skill: "Node.js",
    },
    {
      id: 5,
      skill: "SQL",
    },
    {
      id: 6,
      skill: "Git",
    },
    {
      id: 7,
      skill: "Java",
    },
    {
      id: 8,
      skill: "MongoDB",
    },
  ],
  projects: [
    // Project images in assets folder
    {
      name: "Contact Manager",
      description:
        "A full-stack contact manager used to store contact details. Front-end is built with React.js and back-end is built using Node.js, Express.js, MongoDB and JWT authentication",
      githuburl: "https://github.com/girkarkshitij/contact-manager",
      siteurl: "https://contact-manager-mern-qelc.onrender.com/",
      techstack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
      ],
    },
    {
      name: "Github Search App",
      description:
        "A React.js app to to search Github profiles using Github API. This app uses the Context API along with the React Hooks for state management.",
      githuburl: "https://github.com/girkarkshitij/github-search-app",
      siteurl: "https://github-search-app-girkarkshitij.netlify.app/",
      techstack: [
        "React.js",
        "Github API",
        "React Router",
        "React Hooks",
        "Context API",
      ],
    },
    {
      name: "Learn 3D Geometry with AR",
      description:
        "An Android app implemented in Kotlin, AR functionality added using ARCore and Sceneform. Used Firebase for backend.",
      githuburl: "https://github.com/girkarkshitij/GeometryAR",
      siteurl: "https://github.com/girkarkshitij/GeometryAR",
      techstack: ["Kotlin", "Firebase", "ARCore", "Sceneform"],
    },
    {
      name: "TechShop : e-commerce",
      description:
        "A full-stack e-commerce site. Front-end is built with React.js and Redux. Back-end is built using Node.js, Express.js, MongoDB and JWT authentication.",
      githuburl: "https://github.com/girkarkshitij/e-commerce-mern",
      siteurl: "https://tech-shop-mern.onrender.com/",
      techstack: [
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
      ],
    },
  ],
};

export default data;
