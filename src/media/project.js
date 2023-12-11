import RyM from "../assets/portada RyM.jpg";
import PI from "../assets/portada PI.jpg";
import primate from "../assets/Logo primate.jpeg";
import creativity from "../assets/Creativity.png";
import Root from "../assets/logo root.png";

//mockups
import creativityM from "../assets/Creativitymockup.png";
import rootM from "../assets/Rootmockup.png";
import primateM from "../assets/Mockup Tarjetas.png";
import RickandMorty from "../assets/R&Mmockup.png";
import pimock from "../assets/PImockup.png";

//lowFis
import LowFiCreat from "../assets/LowFi Creativity.png";
import PrimaDesing from "../assets/primate desing.png";
import RootLow from "../assets/root lowFi.png";
import piLow from "../assets/LowFiPi.png";
import lowRyM from "../assets/LowFiRyM.png";

const projects = [
  {
    title: "Primate",
    image: primate,
    description: "Graphic design work for a furniture project.",
    mockup: primateM,
    info: "For this project, I developed and sought the brand identity together with the client, aiming to understand what they truly needed and wanted to convey through their image. This led to the creation of this beautiful logo, where we captured something a bit daring yet retaining its subtlety and strong presence. The design of their business cards followed a similar approach simple yet captivating, maintaining the brands identity without overwhelming the user with unnecessary information.",
    lowFi: PrimaDesing,
  },
  {
    id: "1",
    title: "Creativity.",
    image: creativity,
    description:
      "Page of creative tools for designers, programmers or content creators.",
    deployLink: "https://creativity-six.vercel.app/",
    codeLink: "https://github.com/Brunex7/creativity",
    mockup: creativityM,
    info: "Creativity is my personal web development project, conceived to offer a digital library aimed at content creators, designers, and programmers. It stems from my own experience as a web designer and programmer, where I noticed the lack of a centralized place to access essential resources. My role encompasses web design, optimizing user experience, and project development, utilizing tools like Figma, React, Next, JavaScript, and Material UI. The goal is to simplify the search for necessary materials for creative projects, providing a single place to find everything needed to fuel creativity without wasting time on scattered searches.",
    lowFi: LowFiCreat,
  },
  {
    id: "2",
    title: "Website Root",
    image: Root,
    description:
      "Root.bl is my clothing brand, for which I am developing a blog to showcase more information about the brand",
    deployLink: "https://root-website-ten.vercel.app/",
    codeLink: "https://github.com/Brunex7/root-website",
    mockup: rootM,
    info: "At Root.bl, my clothing brand, I am responsible for all visual content, garment design, and marketing strategies. Currently, I am working on developing a blog that will integrate all these aspects, providing users with a unique experience to dive in and learn more about the brand. The aim is to create a centralized space that allows followers to delve deeper into our vision, products, and the creative process behind the brand.",
    lowFi: RootLow,
  },
  {
    id: "3",
    title: "Rick & Morty",
    image: RyM,
    description:
      "My first web application developed using JavaScript and React",
    deployLink: "https://rick-and-morty-app-sooty.vercel.app/",
    codeLink: "https://github.com/Brunex7/rick_and_morty",
    mockup: RickandMorty,
    info: "The Rick and Morty App marks my initial foray into web application development, crafted using JavaScript and React. I made the deliberate choice to leave it in its original state, untouched since its initial development, with the purpose of observing and documenting my progress in both code and user interface. This decision allows me to tangibly visualize my growth over time. By preserving an unaltered version, I can compare my current work with the starting point, enabling me to better appreciate my improvements and advancements in both development and design.",
    lowFi: lowRyM,
  },
  {
    id: "4",
    title: "PI Videogames",
    image: PI,
    description:
      "This is my second web development project, and currently, the database is down due to payment issues with Railway, as I'm unable to maintain it.",
    codeLink: "https://github.com/Brunex7/PI-Videogames-main",
    mockup: pimock,
    info: "This project marked my second attempt in web development and the first one that encompassed both front-end and back-end aspects. I managed to create a complete landing page with a filtered product catalog, a search bar, and a blog section, using an API to retrieve and display all the information on the cards and their details.I chose to keep this project unchanged to visually observe my progress over time. This decision allows me to record and visually appreciate how I have improved in my web development skills.",
    lowFi: piLow,
  },
];

export default projects;
