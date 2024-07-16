import React from 'react';
import './works.css';
import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';

const projects = [
  {
    image: project1,
    description: 'Project 1 description goes here.'
  },
  {
    image: project2,
    description: 'Project 2 description goes here.'
  },
  {
    image: project3,
    description: 'Project 3 description goes here.'
  }
];

const Works = () => {
  return React.createElement(
    'section',
    { id: 'works' },
    React.createElement('h2', { className: 'worksTitle' }, 'My Projects'),
    React.createElement('span', { className: 'worksDesc' }, 'To showcase my ability to deliver high-quality, user-focused software solutions that drive engagement and business success. Each project highlights my expertise in creating efficient, responsive, and functional applications tailored to client needs.'),
    React.createElement(
      'div',
      { className: 'projects' },
      projects.map((project, index) =>
        React.createElement(
          'div',
          { className: 'project', key: index, style: { flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' } },
          React.createElement('img', { src: project.image, alt: '', className: 'projectImg' }),
          React.createElement('p', { className: 'projectDesc' }, project.description)
        )
      )
    ),
    React.createElement(
      'button',
      { className: 'workBtn' },
      'See More'
    )
  );
}

export default Works;
