import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class About extends Component {
    render() {
      return (
        <div className="App">
            <h3>Nick name : {this.props.match.params.name}</h3>
            <h3>About</h3>
            <h3>About</h3>
            <h3>About</h3>
            <h3>About</h3>
        </div>
      );
    }
  }
  
  export default About;