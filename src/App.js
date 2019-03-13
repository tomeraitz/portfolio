import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import { observer } from 'mobx-react'
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

@observer
class App extends Component {
  render() {
    return (
      <Router> 
        <div className="App">
            <NavBar />
            <div className="main">

                  <Route  path={'*'} component={Home}/>
                  <Route  path={'*'} component={Projects}/>
                  <Route  path={'*'} component={Contact}/>

            </div>
        </div>
      </Router>
    );
  }
}

export default App;
