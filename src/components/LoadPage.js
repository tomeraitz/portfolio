import React, { Component } from 'react';
// import { observer, inject } from 'mobx-react';
import '../styles/loadPage.css'
import logo from '../images/Tomer Raitz.png'

class LoadPage extends Component {

    render() {
        return (
            <div className="load-app">
                <div className="load-box">
                    <img src={logo} width="85%" height="100%" />
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoadPage;