import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Button } from 'react-scroll';
import { Link } from 'react-scroll';
 
const Intro = () => {
  return (
    <section id="intro">
      <img src={bg} alt="profile" className="bg"/>
      <div className='introContent'>
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Pallavi Mourya</span><br/>
        Software Developer</span>  
        <p className="introPara">I am a skilled software developer with experience in creating visually<br/> appealing and user-friendly applications.</p> 
        <Link><Button className='btn'><img src={ btnImg } alt="Hire" className='btnImg'></img>Hire Me</Button></Link>  
      </div>
    </section>
  )
}

export default Intro;
