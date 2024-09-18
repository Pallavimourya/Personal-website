// src/components/Works/Works.js
import React from 'react';
import './works.css';
import project1 from '../../assets/project-2.png';
import project2 from '../../assets/project-1.png';
import project3 from '../../assets/project-3.png';

const projects = [
  {
    image: project1,
    link: 'https://github.com/Pallavimourya/Personal-website',
    title: 'My Portfolio',
    description: 'A responsive portfolio website showcasing personal projects, skills, and achievements. Built with React and modern web technologies.'
  },
  {
    image: project2,
    link: 'https://github.com/Pallavimourya/online_examination_system',
    title: 'Online Examination System',
    description: 'A comprehensive MCQ-based exam system for administrators and candidates, utilizing JSP, HTML, CSS, JavaScript, and MySQL.'
  },
  {
    image: project3,
    link: '#', // Placeholder link for upcoming project
    title: 'E-Learning Website (Upcoming)',
    description: 'An upcoming E-Learning platform providing an extensive online learning experience.'
  }
];

const Works = () => {
  return (
    <section id="works" className="works">
      <h2 className="worksTitle">My Projects</h2>
      <p className="worksDesc">Explore my projects where innovative design meets functionality. Each project demonstrates my skills and dedication.</p>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="projectImgWrapper">
              <img src={project.image} alt={project.title} className="projectImg" />
            </div>
            <div className="projectInfo">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="knowMoreBtn">Know More</a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/Pallavimourya" target="_blank" rel="noopener noreferrer" className="workBtn">See More</a>
    </section>
  );
};

export default Works;
