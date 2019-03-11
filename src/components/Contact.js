import React, { Component } from 'react';
import '../styles/Contact.css';
import { observer, inject } from 'mobx-react';

@inject('ContactStore')
@observer

class Contact extends Component {

      handleForm = e => this.props.ContactStore.sendTomail(e)
      handleFields = e => this.props.ContactStore.changeState(e)
    
      render() {
        return (
            <div className="Contact">
                <h1 className="formTitle">Contact Me</h1>
                <div className="formDescription">If you want to contact me, 
                                                  send me your details by filling up the form below or 
                                                  send an email to tomeraitz1@gmail.com
                </div>
                <form onSubmit={this.handleForm}>
                    <input type="text" id="name" placeholder="Your Name" name="name" onChange={this.handleFields} />
                    <input type="email" id="email" placeholder="Your Email" name="email" onChange={this.handleFields} />
                    <input type="number" id="phone" placeholder="Your Phone" name="phone" onChange={this.handleFields} />
                    <textarea name="message" placeholder="Message" id="message" onChange={this.handleFields}></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="social">social</div>
            </div>
        );
      }
    }

export default Contact;
