import React from 'react';
import '../css/bio.css';

import Resume from "../resources/ZachHall_Resume_For_Website.pdf"
import Contact from "./contact";


const Bio = () => {
  return (

    <div className="bio-menu">


      <div class="bio-menu-info">

        <div class="bio-menu-info-name">
          <h1>Zach Hall</h1>
        </div>

        <div class="bio-menu-info-resume">
          <a target="_blank" rel="noopener noreferrer" href= {Resume}><button class="resume-button">Resume</button></a>
        </div>

        <div class="bio-menu-info-contact">
          <Contact />
        </div>
      </div>
    </div>


  )
}

export default Bio
