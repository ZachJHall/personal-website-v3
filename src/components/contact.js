import React from 'react'
import '../css/contact.css';
import GitLogo from '../resources/iconfinder-github-icon.svg';
import LinkedinLogo from '../resources/iconfinder-icon.svg';
import EmailLogo from '../resources/iconfinder-email-icon.svg';


const Contact = () => {
  return (
    <div class="contact-links">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ZachJHall" id="github-link"><img src={GitLogo} width="64" height="64" alt="Link to Github"/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/zachhall-cs"><img src={LinkedinLogo} width="64" height="64" alt="Link to Linkedin"/></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:zachjohnhall+personalwebsite@gmail.com" id="email-link"><img src={EmailLogo} width="64" height="64" alt="Link to contact email"/></a>
    </div>
  )
}

export default Contact
