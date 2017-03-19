import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
      <Route exact path="/" component={FrontPageContainer}/>
      <Route path="/r/:name" component={SubredditPageContainer} />
    </div>
  </BrowserRouter>
);

export default App;
