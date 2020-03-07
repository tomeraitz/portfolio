import React, { Component } from 'react';
import '../styles/Contact.css';
import { observer, inject } from 'mobx-react';
import Popup from './PopUp';

@inject('ContactStore', 'GenralStore')
@observer

class Contact extends Component {

    componentDidMount() {
        this.props.GenralStore.Contact = this.refs.Contact
        this.props.GenralStore.Contact.scrollTop = this.props.GenralStore.Contact.offsetTop;
      }

      handleForm = e => this.props.ContactStore.sendTomail(e)
      handleFields = e => this.props.ContactStore.changeState(e)
    
      render() {
        let state = this.props.ContactStore
        return (
            <div className="contact" ref="Contact">
                <div className="form">
                    <h1 className="form-title">Contact Me</h1>
                    <div className="form-description">If you want to contact me, 
                                                    send me your details by filling up the form below or 
                                                    send an email to tomeraitz1@gmail.com
                    </div>

                    <div className="form-details" data-aos="flip-up">
                        <input className="input-small" 
                            type="text" id="name" 
                            placeholder="Your Name" 
                            name="name" value={state.name} 
                            onChange={this.handleFields} 
                        />
                        <label htmlFor="name"></label>

                        <input className="input-small" 
                            type="email" 
                            id="email" 
                            placeholder="Your Email" 
                            name="email" 
                            value={state.email} 
                            onChange={this.handleFields} 
                        />
                        <label htmlFor="email"></label>

                        <input className="input-small" 
                                type="number" 
                                id="phone" 
                                placeholder="Your Phone" 
                                name="phone" value={state.phone}  
                                onChange={this.handleFields} 
                        />
                        <label htmlFor="phone"></label>

                        <textarea className="input-big" 
                                type="text"  
                                name="message" 
                                placeholder="Message" 
                                id="message" 
                                value={state.message}  
                                onChange={this.handleFields}>
                        </textarea>
                        <label htmlFor="message"></label>

                        <div className="form-description">{state.error}</div>
                            <button onClick={this.handleForm}  type="submit" className="send">Send</button>
                            {state.ispopUp? <Popup /> : null}
                        </div>
                    </div>
            </div>
        );
      }
    }

export default Contact;
