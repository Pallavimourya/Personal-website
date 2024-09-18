import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <img src={bg} alt="profile background" className="bg"/>
      <div className="overlay"></div>
      <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Pallavi Mourya,</span><br/>
          Software Developer
        </span>  
        <p className="introPara">
          I am a skilled software developer with experience in creating visually<br/>
          appealing and user-friendly applications.
        </p> 
        <a href="mailto:pallavimourya99@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className='btn'>
            <img src={btnImg} alt="Hire Me" className='btnImg' />
            Hire Me
          </button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
