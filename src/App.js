import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <div className="main">
            <Home />
            <Projects />
          </div>
      </div>
    );
  }
}

export default App;
