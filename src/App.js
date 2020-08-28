import React, { Component , Suspense ,lazy} from 'react';
import './App.css';

import { observer, inject } from 'mobx-react'
import LoadPage from './components/LoadPage';
const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Main')), 5000);
  });
});
@inject('GenralStore' , 'ProjectStore')
@observer

class App extends Component {
  componentDidMount(){
    // setTimeout(this.addEventListenerLoad , 6000)
    this.props.GenralStore.checkWithServer();
  }

  addEventListenerLoad = () => window.addEventListener('load', this.props.GenralStore.checkWithServer());

  render() {
    return (
      <div>
        <Suspense fallback={<LoadPage />}>
          <Main></Main>
        </Suspense>
       </div>
    )
    // if(this.props.GenralStore.loadApp){
    //     return (
          // <div className="app">
          //     <NavBar />
          //     <div className="main">
          //           <Home />
          //           <Projects />
          //           <Contact />
          //           <Footer />
          //     </div>
          // </div>
    //   );
    // }
    // else{
    //   return (
    //       <LoadPage />
    // );
    // }

  }
}

export default App;
