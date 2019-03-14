import React, { Component } from 'react';
import '../styles/main.css';
import { observer, inject } from 'mobx-react';

@inject('GenralStore')
@observer
class Home extends Component {

  componentDidMount() {
    this.props.GenralStore.Home = this.refs.Home
    this.props.GenralStore.HomeHeight = this.refs.Home.offsetTop*6;
  }

  jumpToContact = () => this.props.GenralStore.jumpto('Contact')

  render() {
    return (
      <div className="home" ref="Home" >
            <div className="title">
                  Full-Stack Web Developer
            </div>
            <div className="description">Specializing in React and Node.js. 
                                    If you are a business seeking a web presence or an employer looking to hire, 
                                    you can get in touch with me here.
            </div>
            <button onClick={this.jumpToContact} className="button-contact">I'm looking to hire</button>
      </div>
    );
  }
}

export default Home;
