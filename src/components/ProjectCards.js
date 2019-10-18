import React, { Component } from 'react';
import {inject } from 'mobx-react';
import '../styles/projects.css';
import CardDescription from './CardDescription';

@inject('ProjectStore')

class ProjectCards extends Component {
  render() {
    let { projects, cssId, openDescription } = this.props.ProjectStore
    return (
      <div id={cssId}>
        {projects.map((item,index) =>{
          return (<div className="cardItem" 
                       data-aos={item.animation} key={item.title} 
                       onClick={()=>openDescription(index)}>
                      <CardDescription item={item}/>
                      <img src={item.img} alt={item.title} width="100%" height="100%" />
                      
                  </div>)
        })}
      </div>
      
    );
  }
}

export default ProjectCards;
