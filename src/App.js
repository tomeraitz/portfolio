import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import { observer, inject } from 'mobx-react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadPage from './components/LoadPage';

@inject('GenralStore')
@observer

class App extends Component {
  componentDidMount(){
    setTimeout(this.loadApp,3000)
  }

  loadApp =() => this.props.GenralStore.checkWithServer()
  render() {
    if(this.props.GenralStore.loadApp){
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
    else{
      return (
          <LoadPage />
    );
    }

  }
}

export default App;
