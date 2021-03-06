import React, { Component } from 'react';
import '../styles/main.css';
import { observer, inject } from 'mobx-react';

@inject('GenralStore')
@observer
class Home extends Component {

  componentDidMount() {
    this.props.GenralStore.Home = this.refs.Home
    this.props.GenralStore.Home.scrollTop = this.props.GenralStore.Home.offsetTop;
  }

  jumpToContact = () => this.props.GenralStore.jumpto('Contact')

  render() {
    return (
      <div className="home" ref="Home" >
            <div className="title">
                 Tomer Raitz - Web Developer
            </div>
            <div className="description">Specializing in JavaScript and js frame works. 
                                          <br></br>I believe in elegant solutions for complex problems.
                                          If you are seeking for a developer,<br></br> you can get in touch with me here.
            </div>
            <button onClick={this.jumpToContact} className="button-contact">Contact Me</button>
      </div>
    );
  }
}

export default Home;
