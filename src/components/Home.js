import React, { Component } from 'react';
import '../styles/main.css';
import { observer, inject } from 'mobx-react';

@inject('GenralStore')
@observer
class Home extends Component {

  componentDidMount() {
    this.props.GenralStore.home = this.refs.Home
    const height = this.refs.Home.offsetTop*6;
    this.props.GenralStore.HomeHeight = height
    this.props.GenralStore.isLoaded = true;
  }

  jumpToContact = () => window.scrollTo(0, this.props.GenralStore.projectsHeight)
  render() {
    if(this.props.GenralStore.home){
      console.log(this.props.GenralStore.home.offsetHeight)
    }
    
    return (
      <div className="Home" ref="Home" >
            <div className="title">
                  Full-Stack Web Developer
            </div>
            <div className="des">Specializing in React and Node.js. 
                                    If you are a business seeking a web presence or an employer looking to hire, 
                                    you can get in touch with me here.
            </div>
            <button onClick={this.jumpToContact} className="buttonContact">I'm looking to hire</button>
      </div>
    );
  }
}

export default Home;
