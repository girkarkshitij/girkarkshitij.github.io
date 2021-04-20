const data = {
  name: 'Kshitij Girkar',
  role: 'Full-Stack Developer',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/girkarkshitij/',
      className: 'fab fa-linkedin',
    },
    {
      name: 'github',
      url: 'http://github.com/girkarkshitij',
      className: 'fab fa-github',
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
  aboutMe:
    "I'm a third year student pursuing Bachelors's in Computer Engineering 🎓 from Mumbai University 🏛. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies ✨. 💻 I'm currently into Web Development 🕸️",
  address: 'Mumbai, India',
  website: 'https://kshitijgirkar.me',
  skills: [
    'Java',
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'SQL',
    'MongoDB',
    'Git',
  ],
  projects: [
    {
      name: 'Contact Keeper',
      description:
        'A full-stack contacts manager web-app used to store contact details. Front-end is built with React.js (Hooks and ContextAPI) and back-end is built using Node.js, Express.js, MongoDB, Mongoose and JWT authentication',
      imgurl: 'images/portfolio/phone.jpg',
    },
    {
      name: 'Github Search App',
      description:
        'A React.js app to to search Github profiles using Github API. This app uses the Context API along with the React Hooks for state management.',
      imgurl: 'images/portfolio/project.jpg',
    },
    {
      name: 'Random Quote Machine',
      description:
        'A React.js app which uses an quote API to displays random quotes on each click',
      imgurl: 'images/portfolio/project2.png',
    },
  ],
};

export default data;
