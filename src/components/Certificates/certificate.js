// src/components/Certificate/Certificate.js
import React, { useState } from 'react';
import './certificate.css';
import Coursera from '../../assets/coursera.png';
import Hackerrank from '../../assets/hackerrank.png';
import Udemy from '../../assets/udemy.png';

const Certificate = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="certificates" className="certificates">
      <h2 className="certificatePageTitle">My Certificates</h2>
      <p className="certificateDesc">
        Certified software developer with proven expertise in building efficient, responsive, and user-friendly applications.
      </p>
      <div className="accordionSection">
        <div className="accordion" onClick={() => toggleAccordion(0)}>
          Udemy Certificates
        </div>
        <div className={`accordionContent ${activeIndex === 0 ? 'show' : ''}`}>
          <div className="certificateOptions">
            <div className="certificateOption">
              <a href="https://drive.google.com/file/d/1HTl_WC7N9qPgQWa7mhF3ycvfy4R2uEIZ/view?usp=sharing">
                <img src={Udemy} alt="Udemy" className="certificateImg" />
                <p>Java Programming</p>
              </a>
            </div>
          </div>
        </div>

        <div className="accordion" onClick={() => toggleAccordion(1)}>
          Hackerrank Certificates
        </div>
        <div className={`accordionContent ${activeIndex === 1 ? 'show' : ''}`}>
          <div className="certificateOptions">
            <div className="certificateOption">
              <a href="https://drive.google.com/file/d/1Z9_o4Raaik261r7ILdrUk7MAt3lZMPsD/view?usp=sharing">
                <img src={Hackerrank} alt="Hackerrank" className="certificateImg" />
                <p>Java Certification</p>
              </a>
            </div>
            <div className="certificateOption">
              <a href="https://drive.google.com/file/d/1XY8l8Y-_8ktoyJ01xIZUr9k2jBcmLJYK/view?usp=sharing">
                <img src={Hackerrank} alt="Hackerrank" className="certificateImg" />
                <p>SQL Certification</p>
              </a>
            </div>
            <div className="certificateOption">
              <a href="https://drive.google.com/file/d/1l8DbWdLdHbtM67ozmkiJYJmMDcymSaxj/view?usp=sharing">
                <img src={Hackerrank} alt="Hackerrank" className="certificateImg" />
                <p>CSS Certification</p>
              </a>
            </div>
          </div>
        </div>

        <div className="accordion" onClick={() => toggleAccordion(2)}>
          Coursera Certificates
        </div>
        <div className={`accordionContent ${activeIndex === 2 ? 'show' : ''}`}>
          <div className="certificateOptions">
            <div className="certificateOption">
              <a href="https://drive.google.com/file/d/1k6R6-n8TZmdJNXeobCdNsIu9lz5B64Zc/view?usp=sharing">
                <img src={Coursera} alt="Coursera" className="certificateImg" />
                <p>Modern JavaScript: ES6 Basics</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
