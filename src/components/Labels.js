import React, { Component } from 'react';
import {inject } from 'mobx-react';
import '../styles/projects.css';

@inject('ProjectStore')

class Labels extends Component {
  listenRsizeEvent = () => this.props.ProjectStore.handelResponsive(this)
  
  componentDidMount() {
    this.listenRsizeEvent()
    window.addEventListener('resize', this.listenRsizeEvent)
  }

  render() {
    let { labels, counter, index, handelClickLabel } = this.props.ProjectStore
    return (
      <div className="labels">
            {labels.map(label =>{
              if(counter < index){
                counter++
                return (<div className={label.class} 
                             key={label.text} 
                             onClick={()=>handelClickLabel(`${label.text}`, this.props.projectComponnet)}>
                            <span>{label.text}</span>
                        </div>)
              }
              else{
                return ;
              }
            })}
      </div>
    );
  }
}

export default Labels;
