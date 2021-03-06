import React, { Component } from 'react';
import '../styles/navbar.css';
import logo from '../images/imageedit_6_7757247570.png'
import { observer, inject } from 'mobx-react';
import { FaBars } from "react-icons/fa";

@inject('GenralStore', 'ProjectStore')
@observer
class NavBar extends Component {

    listenScrollEvent = () => this.props.GenralStore.changeColor(this.props.ProjectStore.scrollCloseDescription)
    handelClick = e => this.props.GenralStore.jumpto(e.target.id)

    componentDidMount() {
      // this.props.GenralStore.changeColor()
      window.addEventListener('scroll', this.listenScrollEvent)
      const ua = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(ua);
      if(!isMobile) window.addEventListener('resize', this.props.GenralStore.setToDefault);
    }

  render() {
    return (
      <div className={this.props.GenralStore.activeClassNa}>
          <div>
              <img id="logo" 
                  alt="logo" 
                  src={logo} 
                  width="auto" 
                  height="auto">
              </img>
           </div>

              {this.props.GenralStore.items.map(i => {
                return <div key={i.id} 
                            id={i.id} 
                            onClick={this.handelClick} 
                            className={i.className} >{i.id}
                            
                        </div>
                })}
              <div onClick={()=>this.props.GenralStore.toggleMenu()} id="humbugger" className={this.props.GenralStore.humbuggerClass}>
                <FaBars id="FaBars"/>
              </div>
        </div>
    );
  }
}

export default NavBar;
