import React, { Component } from 'react';
import '../styles/projects.css';
import testImage from '../images/rick-and-com.JPG'
import Label from './Label';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div className="boxContiner">
            <div className="boxHeader">
                <div className="white"></div>
                <div className="orange"></div>
                <div className="white"></div>
            </div>
            <img className="boxImage" src={testImage} width="90%" height="90%"></img>
        </div>
        <div className="boxDesContiner">
            <div className="boxDes">
                <h1 className="boxDesTitle">Rick And Morty Game</h1>
                <p className="boxDesP">Real-time multi/single player online game, 
                                       based on the TV cartoon Rick and Morty.
                                       (<a className="orangeA" target="_blank" href="https://github.com/tomeraitz/rick-morty-game">GitHub</a>)</p>
            </div>
            <div className="labelContiner">
                <Label />
                <Label />
                <Label />
                <Label />
                <Label />
                <Label />
            </div>
            
        </div>

      </div>
    );
  }
}

export default Box;
