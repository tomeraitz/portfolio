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
        window.scrollTo(0, 600);
      }
      else if(e.target.id === 'Home'){
        window.scrollTo(0, 0);
      }
      this.props.GenralStore.changeActive(e.target.id)
    }
    
    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
    }
  render() {
    return (
      <div className="NavBar" style={{backgroundColor: this.props.GenralStore.backgroundColor}}>
          <div><img src={logo} width="100%" height="100%"></img></div>
          {this.props.GenralStore.items.map(i => {
            return <div id={i.id} onClick={this.handelClick} className={i.className} >{i.id}</div>
          })}
      </div>
    );
  }
}

export default NavBar;
