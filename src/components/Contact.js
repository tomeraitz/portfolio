import React, { Component } from 'react';
import '../styles/Contact.css';
import { observer, inject } from 'mobx-react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

@inject('ContactStore')
@observer

class Contact extends Component {

      handleForm = e => this.props.ContactStore.sendTomail(e)
      handleFields = e => this.props.ContactStore.changeState(e)
    
      render() {
        let state = this.props.ContactStore
        return (
            <div className="Contact">
                <h1 className="formTitle">Contact Me</h1>
                <div className="formDescription">If you want to contact me, 
                                                  send me your details by filling up the form below or 
                                                  send an email to tomeraitz1@gmail.com
                </div>
                <div >
                    <input className="inputSmall" type="text" id="name" placeholder="Your Name" name="name" value={state.name} onChange={this.handleFields} />
                    <input className="inputSmall" type="email" id="email" placeholder="Your Email" name="email" value={state.email} onChange={this.handleFields} />
                    <input className="inputSmall" type="number" id="phone" placeholder="Your Phone" name="phone" value={state.phone}  onChange={this.handleFields} />
                    <textarea className="inputBig" type="text"  name="message" placeholder="Message" id="message" value={state.message}  onChange={this.handleFields}></textarea>
                    <button onClick={this.handleForm}  type="submit" className="send">Send</button>
                </div>
                <div className="social">
                    <h1 className="formTitle">Find Me On Social Media</h1>
                    <div className="formDescription">Follow my online on 
                                                    Linkedin, GitHub and StackOverFlow.
                    </div>
                    <div className="socialContiner">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tomer-raitz-13b64911b/" className="socailLinks Linkedin"><FaLinkedin />Linkedin</a>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/tomeraitz" className="socailLinks"><FaGithub />GitHub</a>
                        <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/users/10055871/tomer-raitz" className="socailLinks StackOverFlow"><FaStackOverflow />StackOverFlow</a>
                    </div>
                </div>
            </div>
        );
      }
    }

export default Contact;
