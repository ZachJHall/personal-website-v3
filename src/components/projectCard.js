import React from 'react'
import "../css/projectCard.css"


class ProjectCard extends React.Component {
  render() {
    return (
      <div class="projectCard">


        <img class="projectImage"src={this.props.image} alt={this.props.title} />


        <div class="projectBody">
          <a target="_blank" rel="noopener noreferrer" href={this.props.url}><h1 class="projectTitle">{this.props.title}</h1></a>
          <p class="projectDescription">{this.props.description}</p>
        </div>

      </div>
    )
  }
}

export default ProjectCard
