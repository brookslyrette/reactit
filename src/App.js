import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => (
  <div className="App container-fluid">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <strong>Reactit!</strong> An Example ReactJs Reddit front-end
    </div>
    {props.children}
  </div>
);

export default App;
