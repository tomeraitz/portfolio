import React, { Component } from 'react';
import '../styles/navbar.css';
import logo from '../images/imageedit_6_7757247570.png'
import { observer, inject } from 'mobx-react';

@inject('GenralStore', 'ProjectStore')
@observer
class NavBar extends Component {

    listenScrollEvent = () => this.props.GenralStore.changeColor(this.props.ProjectStore.scrollCloseDescription)
    handelClick = e => this.props.GenralStore.jumpto(e.target.id)

    componentDidMount() {
      this.props.GenralStore.changeColor()
      window.addEventListener('scroll', this.listenScrollEvent)
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
        </div>
    );
  }
}

export default NavBar;
