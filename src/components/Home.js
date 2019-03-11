import React, { Component } from 'react';
import '../styles/main.css';

class Home extends Component {
  jumpToContact = () => window.scrollTo(0, window.screen.availHeight*6.5)
  render() {
    return (
      <div className="Home">
            <div className="title">Full-Stack Web Developer</div>
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
