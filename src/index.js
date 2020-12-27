import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import GenralStore from './stores/GenralStore'
import ProjectStore from'./stores/ProjectStore'
import ContactStore from'./stores/ContactStore'
import AOS from 'aos';
import 'aos/dist/aos.css';

const stores = { GenralStore , ProjectStore, ContactStore}

const activeAosAnimation = () =>{
    AOS.init();
    let scrollRef = 0;
    window.addEventListener('scroll', function() {
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
}

ReactDOM.render(<Provider {...stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
activeAosAnimation();
