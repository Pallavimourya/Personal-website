// src/components/Contact/Contact.js
import React from 'react';
import './contact.css';
import Gmailicon from '../../assets/gmailicon.png';
import Githubicon from '../../assets/githubicon.png';
import Linkedinicon from '../../assets/linkedinicon.png';
import Mediumicon from '../../assets/mediumicon.png';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contactTitle">Get in Touch</h2>
      <p className="contactDesc">Feel free to reach out to me through any of the platforms below.</p>
      <div className="links">
        <a href="mailto:pallavimourya99@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={Gmailicon} alt="Gmail" className="link" />
        </a>
        <a href="https://github.com/Pallavimourya" target="_blank" rel="noopener noreferrer">
          <img src={Githubicon} alt="Github" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/pallavimourya/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedinicon} alt="LinkedIn" className="link" />
        </a>
        <a href="https://medium.com/@pallavimourya99" target="_blank" rel="noopener noreferrer">
          <img src={Mediumicon} alt="Medium" className="linkmedium" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
