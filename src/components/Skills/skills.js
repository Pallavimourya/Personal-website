import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='skillsHeader'>
        <h1 className='skillsTitle'>What I Do!</h1>
        <p className='skillsDesc'>
          As a passionate software developer, I specialize in transforming ideas into highly functional and efficient software solutions. My goal is to create user-centered applications that not only perform seamlessly but also provide an intuitive and engaging experience for users.
        </p>
      </div>
      <div className='skillsBars'>
        <div className='skillsBar'>
          <img src={UIDesign} alt='UI/UX Design' className='skillsBarImg' />
          <div className='skillsBarText'>
            <h2>UI/UX Design</h2>
            <p>Designing user interfaces that are clean, intuitive, and responsive.</p>
          </div>
        </div>
        <div className='skillsBar'>
          <img src={WebDesign} alt='Web Design' className='skillsBarImg' />
          <div className='skillsBarText'>
            <h2>Web Design</h2>
            <p>Creating modern and responsive websites with a focus on user experience.</p>
          </div>
        </div>
        <div className='skillsBar'>
          <img src={AppDesign} alt='App Design' className='skillsBarImg' />
          <div className='skillsBarText'>
            <h2>App Design</h2>
            <p>Developing user-friendly and engaging mobile applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
