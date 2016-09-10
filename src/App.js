import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import { loadReddit } from './actions/subredditActionCreators.js';

import ListingItem from './components/ListingItem.js';

export class App extends Component {

  componentWillMount() {
    this.props.loadReddit();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <a onClick={this.props.loadReddit}>Home</a>
            </li>
            <li className="breadcrumb-item active">{this.props.reddit}</li>
          </ol>
        </div>
        <div className="App-intro">
          {this.props.items.map((item, i) => {
            return <ListingItem key={item.data.id} item={item.data} index={i} />
          })}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  loadReddit: () => {},
  items: []
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.data.children,
    reddit: state.reddit,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadReddit: () => dispatch(loadReddit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
