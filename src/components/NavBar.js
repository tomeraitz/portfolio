import React, { Component } from 'react';
import '../styles/navbar.css';
import logo from '../images/imageedit_6_7757247570.png'

class NavBar extends Component {
    constructor(){
        super()
        this.state = {
            backgroundColor : ""
        }
    }
    listenScrollEvent = e => {
        if (window.scrollY > 500) {
          this.setState({backgroundColor: '#00000063'})
        } else {
          this.setState({backgroundColor: ''})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
  render() {
    return (
      <div className="NavBar" style={{backgroundColor: this.state.backgroundColor}}>
          <div><img src={logo} width="100%" height="100%"></img></div>
          <div className="NavItems active">Home</div>
          <div className="NavItems">Projects</div>
          <div className="NavItems">Contact</div>
      </div>
    );
  }
}

export default NavBar;
