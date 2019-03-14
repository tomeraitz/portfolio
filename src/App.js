import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import { observer } from 'mobx-react'
import Contact from './components/Contact';
import Footer from './components/Footer';


@observer
class App extends Component {
  render() {
    return (
        <div className="app">
            <NavBar />
            <div className="main">
                  <Home />
                  <Projects />
                  <Contact />
                  <Footer />
            </div>
        </div>
    );
  }
}

export default App;
