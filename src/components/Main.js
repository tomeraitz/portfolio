import React from 'react';
const NavBar = React.lazy(() => import('./NavBar'));
const Home = React.lazy(() => import('./Home'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));
const Footer = React.lazy(() => import('./Footer'));


function Main() {
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

  export default Main;