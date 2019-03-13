import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../styles/popup.css'

@inject('ContactStore')
@observer
class Popup extends Component {

    render() {
        return (
            <div className="joined-popup">
            <div className="check_mark">
                <div className="sa-icon sa-success animate">
                    <span className="sa-line sa-tip animateSuccessTip"></span>
                    <span className="sa-line sa-long animateSuccessLong"></span>
                    <div className="sa-placeholder"></div>
                </div>
            </div>
            <div>
                <h1>{this.props.ContactStore.messageTitle}</h1>
                <h2>{this.props.ContactStore.messageTitle2}</h2>
            </div>
        </div>
        );
    }

}

export default Popup;