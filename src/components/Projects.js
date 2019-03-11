import React, { Component } from 'react';
import '../styles/projects.css';
import testImage from '../images/rick-and-com.JPG'
import Label from './Label';

import { observer, inject } from 'mobx-react';

@inject('ProjectStore')
@observer
class Projects extends Component {
  render() {
    const projects = this.props.ProjectStore.projects
    console.log(projects)
    return (
      <div className="Projects">
      {projects.map(p => {
       return  <div className="Box">
                  <div className="boxContiner">
                    <div className="boxHeader">
                      <div className="white"></div>
                      <div className="orange"></div>
                      <div className="white"></div>
                    </div>
                    <a target="_blank" href={p.url} className="unvisibalePointer">
                        <img className="boxImage" src={p.img} width="90%" height="90%"></img>
                    </a>
                  </div>
                  <div className="boxDesContiner">
                    <div className="boxDes">
                        <h1 className="boxDesTitle">{p.title}</h1>
                        <p className="boxDesP">{p.text}(<a className="orangeA" target="_blank" href={p.gitHub}>GitHub</a>)</p>
                    </div>
                  <div className="labelContiner">
                    {p.labels.map(l => {
                      return  <Label text={l}/>
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
