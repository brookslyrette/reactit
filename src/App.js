import React from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';

import DefaultRedditsContainer from './containers/DefaultRedditsContainer.js'

const App = (props) => (
  <div className="App container-fluid">
    <div className="App-reddit-selector">
      <Link to="/">Front</Link> - <Link to="/r/all">All</Link> |
      <DefaultRedditsContainer />
    </div>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <strong>Reactit!</strong> An Example ReactJs Reddit front-end
    </div>
    {props.children}
  </div>
);

export default App;
