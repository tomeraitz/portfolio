import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <div className="main">
            <Home id="Home" />
            <Projects id="Projects" />
          </div>
      </div>
    );
  }
}

export default App;
