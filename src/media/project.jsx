import React from 'react';

import Projects from '../components/Projects';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    codeLink: 'https://github.com/proyecto1',
    deployLink: 'https://deployproyecto1.com',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    codeLink: 'https://github.com/proyecto2',
    deployLink: 'https://deployproyecto2.com',
  },
  // Agrega más proyectos aquí...
];

const ProjectList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Projects key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;



