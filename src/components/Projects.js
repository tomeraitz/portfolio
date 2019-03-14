import React, { Component } from 'react';
import '../styles/projects.css';
import Label from './Label';
import { observer, inject } from 'mobx-react';

@inject('ProjectStore' , 'GenralStore')
@observer
class Projects extends Component {

  componentDidMount() {
      this.props.GenralStore.Projects = this.refs.Projects
      window.screen.availWidth <= 600 ? 
      this.props.GenralStore.projectsHeight =  this.refs.Projects.offsetTop*25 :
      this.props.GenralStore.projectsHeight = this.refs.Projects.offsetTop*20;
  } 

  render() {
    const projects = this.props.ProjectStore.projects

    return (
      <div className="projects" ref="Projects">
      <h1 className="projects-title">projects</h1>

              {projects.map(p => {
       return  <div data-aos={p.animation} className="box" key={p.title}>

                  <div className="box-continer">
                      <div className="box-header">
                          <div className="white"></div>
                          <div className="orange"></div>
                          <div className="white"></div>
                      </div>

                      <a rel="noopener noreferrer" target="_blank" href={p.url} className="unvisibale-pointer">
                          <img className="box-image" alt="Project_image" src={p.img} width="90%" height="90%"></img>
                      </a>
                  </div>

                  <div className="description-continer">
                      <div className="box-description">
                          <h1 className="box-title projects-title">{p.title}</h1>
                          <p className="box-paragraph">{p.text}(<a className="orange-link" rel="noopener noreferrer" target="_blank" href={p.gitHub}>GitHub</a>)</p>
                      </div>

                      <div className="label-continer">
                        {p.labels.map(l => {
                          return  <Label key={l} text={l}/>
                        })}
                      </div>
                  </div>

                </div>
            })} 
      </div>
    );
  }
}

export default Projects;
