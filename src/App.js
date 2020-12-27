import React, { Component , Suspense ,lazy} from 'react';
import './App.css';

import { observer, inject } from 'mobx-react'
import LoadPage from './components/LoadPage';

const Main = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Main')), 2000);
  });
});

@inject('GenralStore' , 'ProjectStore')
@observer

class App extends Component {
  componentDidMount(){
    this.props.GenralStore.checkWithServer();
  }

  addEventListenerLoad = () => window.addEventListener('load', this.props.GenralStore.checkWithServer());

  render() {
    return (
      <div>
        <Suspense fallback={<LoadPage />}>
          <Main className="app"></Main>
        </Suspense>
       </div>
    )
  }
}

export default App;
