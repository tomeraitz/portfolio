import React, { Component } from 'react';
import '../styles/Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

class Footer extends Component {
      render() {

        return (
                <div className="footer" ref="Footer">
                    <h1 className="form-title footer-title">Find Me On Social Media</h1>
                    <div className="form-description footer-description">Follow my online on 
                                                    Linkedin, GitHub and StackOverFlow.
                    </div>
                    <div className="socialContiner">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tomer-raitz-13b64911b/" className="socailLinks Linkedin"><FaLinkedin /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/tomeraitz" className="socailLinks"><FaGithub /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/users/10055871/tomer-raitz" className="socailLinks StackOverFlow"><FaStackOverflow /></a>
                    </div>
                </div>
        );
      }
    }

export default Footer;
