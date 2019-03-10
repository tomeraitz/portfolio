import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import GenralStore from './stores/GenralStore'

const stores = { GenralStore}
ReactDOM.render(<Provider {...stores}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();