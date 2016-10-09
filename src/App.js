import React from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Match } from 'react-router';

import FrontPageContainer from './containers/FrontPageContainer.js';
import SubredditPageContainer from './containers/SubredditPageContainer.js';
import DefaultRedditsContainer from './containers/DefaultRedditsContainer.js'

const App = (props) => (
  <BrowserRouter>
    <div className="App container-fluid">
      <div className="App-reddit-selector">
        <Link to="/">Front</Link> - <Link to="/r/all">All</Link> |
        <DefaultRedditsContainer />
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <strong>Reactit!</strong> An Example ReactJs Reddit front-end
      </div>
      <Match exactly pattern="/" component={FrontPageContainer}/>
      <Match exactly pattern="/r/:name" component={SubredditPageContainer} />
    </div>
  </BrowserRouter>
);

export default App;
