const data = {
  name: "Kshitij Girkar",
  role: "Software Engineer",
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
      skill: "TypeScript",
    },
    {
      id: 5,
      skill: "Node.js",
    },
    {
      id: 6,
      skill: "SQL",
    },
    {
      id: 7,
      skill: "MongoDB",
    },
    {
      id: 8,
      skill: "Git",
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
      name: "Learn 3D Geometry with AR",
      description:
        "An Android app implemented in Kotlin, AR functionality added using ARCore and Sceneform. Used Firebase for backend.",
      githuburl: "https://github.com/girkarkshitij/GeometryAR",
      siteurl: "https://github.com/girkarkshitij/GeometryAR",
      techstack: ["Kotlin", "Firebase", "ARCore", "Sceneform"],
    },
    {
      name: "AI Chat Landing Page",
      description:"Built a responsive landing page using React and Tailwind CSS with automated testing (Jest, React Testing Library) and CI/CD via GitHub Actions and Render.",
      githuburl: "https://github.com/girkarkshitij/ai-chat-landing-page",
      siteurl: "https://ai-chat-landing-page.onrender.com/",
      techstack: [
        "React.js",
        "Tailwind CSS",
        "Jest",
        "React Testing Library",
        "GitHub Actions",
        "Render",
      ],
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
