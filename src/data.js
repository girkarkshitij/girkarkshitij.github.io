const data = {
  name: 'Kshitij Girkar',
  role: 'passionate Software Engineer',
  socialLinks: [
    {
      name: 'github',
      url: 'http://github.com/girkarkshitij',
      className: 'fab fa-github',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/girkarkshitij/',
      className: 'fab fa-linkedin',
    },
    {
      name: 'twitter',
      url: 'http://twitter.com/girkarkshitij',
      className: 'fab fa-twitter',
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/kshitij_girkar/',
      className: 'fab fa-instagram',
    },
  ],
  address: 'Mumbai, India',
  website: 'https://kshitijgirkar.me',
  skills: [
    {
      id: 1,
      skill: 'React.js',
    },
    {
      id: 2,
      skill: 'Node.js',
    },
    {
      id: 3,
      skill: 'MongoDB',
    },
    {
      id: 4,
      skill: 'SQL',
    },
    {
      id: 5,
      skill: 'Git',
    },
    {
      id: 6,
      skill: 'Java',
    },
    {
      id: 7,
      skill: 'JavaScript',
    },
  ],
  projects: [
    // Project images in assets folder
    {
      name: 'Contact Manager',
      description:
        'A full-stack contacts manager used to store contact details. Front-end is built with React.js and back-end is built using Node.js, Express.js, MongoDB and JWT authentication',
      githuburl: 'https://github.com/girkarkshitij/contact-manager',
      siteurl: 'https://contact-keeper-kshitij.herokuapp.com/',
      techstack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT Authentication',
      ],
    },
    {
      name: 'Github Search App',
      description:
        'A React.js app to to search Github profiles using Github API. This app uses the Context API along with the React Hooks for state management.',
      githuburl: 'https://github.com/girkarkshitij/github-search-app',
      siteurl: 'https://github-search-app-girkarkshitij.netlify.app/',
      techstack: [
        'React.js',
        'Github API',
        'React Router',
        'React Hooks',
        'Context API',
      ],
    },
  ],
};

export default data;
