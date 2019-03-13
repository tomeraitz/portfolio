import React, { Component } from 'react';
import '../styles/navbar.css';
import logo from '../images/imageedit_6_7757247570.png'
import { observer, inject } from 'mobx-react';

@inject('GenralStore')
@observer
class NavBar extends Component {
    listenScrollEvent = () => this.props.GenralStore.changeColor()
    handelClick = e => {
      if(e.target.id === 'Projects'){
        this.props.GenralStore.project.scrollIntoView({block: 'start', behavior: 'smooth'});
      }
      else if(e.target.id === 'Home'){
        window.scrollTo(0, 0);
      }
      else{
        window.scrollTo(0, this.props.GenralStore.projectsHeight);
      }
      // this.props.GenralStore.changeActive(e.target.id)
    }
    
    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
    }
  render() {
    return (
      <div className="NavBar" style={{backgroundColor: this.props.GenralStore.backgroundColor}}>
          <div><img id="logo" alt="logo" src={logo} width="auto" height="auto"></img></div>
          {this.props.GenralStore.items.map(i => {
            return <div key={i.id} id={i.id} onClick={this.handelClick} className={i.className} >{i.id}</div>
          })}
      </div>
    );
  }
}

export default NavBar;
