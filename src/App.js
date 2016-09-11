import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <strong>Reactit!</strong> An Example ReactJs Reddit front-end
        </div>
        {this.props.children}
      </div>
    );
  }
}
