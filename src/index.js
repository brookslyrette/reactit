import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import './index.css';

import FrontPageContainer from './containers/FrontPageContainer.js';
import SubredditPageContainer from './containers/SubredditPageContainer.js';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { subreddit } from './reducers/subredditReducer.js';

const store = createStore(subreddit, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={FrontPageContainer}/>
        <Route path="/r/:name" component={SubredditPageContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
