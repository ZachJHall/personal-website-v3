import React from 'react';
import '../css/project.css';

import ProjectCard from "./projectCard";

import ChihuahuaRescueMidwest from "../resources/chihuahuaRescueMidwestImage.png"
import DigitalPaintBoard from '../resources/digital-paint-board.png'

const Projects = () => {
  return (
    <div className="project-menu">
      <h1>Projects</h1>

      <div class = "project-menu-content">

        <ProjectCard image={ChihuahuaRescueMidwest} url= "https://www.chihuahuarescuemidwest.org/" title="Chihuahua Rescue" description="A website built for Chihuahua Rescue, a dog rescue in St.Louis Missouri"/>

        <ProjectCard image={DigitalPaintBoard} url= "https://zachjhall.github.io/digital-paint-board/" title="Digital Paint Board" description="A website that allows the user to paint on a digital paint board"/>


      </div>

    </div>
  )
}

export default Projects
