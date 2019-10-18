import React, { Component } from 'react';
import '../styles/projects.css';
import { inject } from 'mobx-react';
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

@inject('ProjectStore')
class CardDescription extends Component {


  render() {
    let {hoverLabel, hoverLeaveLabel}  = this.props.ProjectStore
        return (
            <div className={`card-description card-description-disply-${this.props.item.cssDescription}`}>
                <h1 className="projects-title-des" style={{display : `${this.props.item.cssDescription}`}}>{this.props.item.title}</h1>
                <p className="projects-details-des" style={{display : `${this.props.item.cssDescription}`}}>{this.props.item.text}</p>
                <div className="projects-label-continer-des" 
                     style={{display : `${this.props.item.cssDescriptionGrid}`}}>
                        {this.props.item.labels.map((l,index) => {
                          return  <p key={l.text} 
                                     className={l.cssClassHover}
                                     onMouseMove={()=>{hoverLabel(this.props.item.id,index)} }
                                     onMouseLeave={()=>{hoverLeaveLabel(this.props.item.id,index)} }
                                     onTouchStart={()=>{hoverLabel(this.props.item.id,index)} }
                                     onTouchEnd={()=>{hoverLeaveLabel(this.props.item.id,index)} }>{l.text}</p>
                        })}
                      </div>
                      <div className="button-continer" style={{display : `${this.props.item.cssDescriptionGrid}`}}>
                      <a rel="noopener noreferrer" target={this.props.item.target} href={this.props.item.url}>
                          <button className="projects-buttons">
                              <div className="projects-buttons-text"><span>Project Site</span> <FaGlobeAmericas className="projects-buttons-icon"/></div>
                          </button>
                      </a>
                      <a rel="noopener noreferrer" target={this.props.item.target} href={this.props.item.gitHub}>
                          <button className="projects-buttons">
                              <div className="projects-buttons-text"><span>Project Github</span> <FaGithub className="projects-buttons-icon"/></div>
                          </button>
                      </a>
                      </div>
            </div>
            
          );

  }
}

export default CardDescription;
