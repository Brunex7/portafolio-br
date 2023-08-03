import RyM from '../assets/portada RyM.jpg';
import PI from '../assets/portada PI.jpg';
import BR from '../assets/portada BR.jpg';
import primate from '../assets/Logo primate.jpeg';
import mont from '../assets/rootMont.jpeg';
import Root from '../assets/portada Root.jpg';

const projects = [
  {
    image: primate,
    description: 'Logo Primate.',
  },
  {
    image: mont,
    description: 'Second Brand Logo (Root.bl)',
  },
  {
    image: Root,
    description: '(Logo Root) The design of the website is being finished at the moment it is not enabled.',
    deployLink: '',
    codeLink: ''
  },
  {
    image: RyM,
      description: 'A front-end development project focused solely on enhancing and practicing pure CSS styles and route flow.',
      deployLink: 'https://rick-and-morty-app-sooty.vercel.app/',
      codeLink: 'https://github.com/Brunex7/rick_and_morty',
    },
    {
      image: PI,
      description: 'This project was developed during the bootcamp and is a full-stack project, encompassing both front-end and back-end development.',
      deployLink: 'https://example.com/project2-deploy',
      codeLink: 'https://github.com/Brunex7/PI-Videogames-main'
    },
    {
      image: BR,
      description: 'You are browsing through it, although I leave here below the display of my previous portfolio, you can see it and compare one project with another.',
      deployLink: 'https://portafolio-br.vercel.app/',
      codeLink: 'https://github.com/Brunex7/portafolio-br.git'
    },
];

export default projects;