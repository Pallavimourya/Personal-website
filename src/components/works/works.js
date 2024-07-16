import React from 'react';
import './works.css';
import project1 from '../../assets/project-2.png';
import project2 from '../../assets/project-1.png';
import project3 from '../../assets/project-3.png';

const projects = [
  {
    image: project1,
    link: 'https://github.com/Pallavimourya/Personal-website',
    h1: 'Pallavi Mourya Portfolio',
    description: 'Developed a responsive portfolio website showcasing personal projects, skills, and achievements. Implemented using modern web technologies such as React, with a focus on clean design and user experience.'
  },
  {
    image: project2,
    h1: 'Online Examination System',
    link: 'https://github.com/Pallavimourya/online_examination_system',
    description: 'The Online Examination System is a comprehensive solution designed to facilitate MCQ-based exams for both administrators and candidates. This project demonstrates proficiency in JSP, HTML, CSS, JavaScript, and MySQL.'
  },
  {
    image: project3,
    h1: 'E-Learning Website(Upcoming Project)',
    link: '#', // Placeholder link for upcoming project
    description: 'E-Learning Website designed to provide a comprehensive online learning experience.'
  }
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">To showcase my ability to deliver high-quality, user-focused software solutions that drive engagement and business success. Each project highlights my expertise in creating efficient, responsive, and functional applications tailored to client needs.</span>
      <div className="projects">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink">
            <div className="project" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
              <img src={project.image} alt={`Project ${index + 1}`} className="projectImg" />
              <div className="projectInfo">
                {project.h1 && <h1>{project.h1}</h1>}
                <p className="projectDesc">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a href="https://github.com/Pallavimourya" target="_blank" rel="noopener noreferrer" className="workBtn">See More</a>
    </section>
  );
}

export default Works;
