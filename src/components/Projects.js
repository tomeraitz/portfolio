import React, { Component } from 'react';
import '../styles/projects.css';
import Labels from './Labels';
import { observer, inject } from 'mobx-react';
import ProjectCards from './ProjectCards';

@inject('ProjectStore' , 'GenralStore')
@observer
class Projects extends Component {
  componentDidMount() {
    this.props.GenralStore.Projects = this.refs.Projects
    this.props.GenralStore.Projects.scrollTop = this.props.GenralStore.Projects.offsetTop;
    this.props.ProjectStore.handelClickLabel('All', this);
  } 
  
  render() {
    return (
      <div className="projects" 
          onTouchMove={()=>this.props.ProjectStore.cantStartTouch()} 
          onTouchStart={()=>this.props.ProjectStore.canStartTouch()}  
          ref="Projects">
        <br></br>
        <br></br>
        <h1 className="projects-title">projects</h1>
        <Labels projectComponnet={this}/>
        <br></br>
        <ProjectCards />
        <br></br>
        <br></br>
      </div>);
  }
}

export default Projects;
