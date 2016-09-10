import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import { loadSubreddit } from './actions/subredditActionCreators.js';

import ListingItem from './components/ListingItem.js';

export class App extends Component {

  componentWillMount() {
    this.props.loadSubreddit();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.props.data.children.map((item, i) => {
            return <ListingItem key={item.data.id} item={item.data} index={i} />
          })}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  loadSubreddit: () => {},
  data: {
    children: [],
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSubreddit: () => dispatch(loadSubreddit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
