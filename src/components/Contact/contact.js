import React from 'react';
import './contact.css';
import Coursera from '../../assets/coursera.png';
import Hackerrank from '../../assets/hackerrank.png';
import Udemy from '../../assets/udemy.png';
import Facebookicon from '../../assets/facebookicon.png';
import Instaicon from '../../assets/instaicon.png';
import Twittericon from '../../assets/twittericon.png';
import Youtubeicon from '../../assets/youtubeicon.png';

const Contact = () => {
  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Certificates</h1>
        <p className='clientDesc'>
          Certified software developer with proven expertise in building efficient, responsive, and user-friendly applications.
        </p>
        <div className='clientImgs'>
          <a href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-f0012e8a-ca3a-431c-b786-40e6f42a77b2.pdf'>
            <img src={Udemy} alt='Udemy' className='clientImg' />
          </a>
          <a href='https://www.hackerrank.com/certificates/ebc17821b9d9'>
            <img src={Hackerrank} alt='Hackerrank' className='clientImg' />
          </a>
          <a href='https://www.coursera.org/account/accomplishments/certificate/CLETSNS63J89'>
            <img src={Coursera} alt='Coursera' className='clientImg' />
          </a>
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form:</span>
        <form className='contactForm' method='post' action='/your-endpoint'>
          <input type='text' className='name' placeholder='Your Name' name='your_name' aria-label='Your Name' required />
          <input type='email' className='email' placeholder='Your Email' name='your_email' aria-label='Your Email' required />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' aria-label='Your Message' required />
          <button type='submit' className='submitBtn'>Submit</button>
        </form>
        <div className='links'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={Facebookicon} alt='Facebook' className='link' />
          </a>
          <a href='https://www.instagram.com/miss___mourya/' target='_blank' rel='noopener noreferrer'>
            <img src={Instaicon} alt='Instagram' className='link' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={Twittericon} alt='Twitter' className='link' />
          </a>
          <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
            <img src={Youtubeicon} alt='YouTube' className='link' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
