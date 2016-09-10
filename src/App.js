import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import { loadReddit, changeType } from './actions/subredditActionCreators.js';

import ListingItem from './components/ListingItem.js';

export class App extends Component {

  constructor(props) {
    super(props);

    this.loadNew = () => this._changeType('new');
    this.loadHot = () => this._changeType('hot');
    this.loadRising = () => this._changeType('rising');
    this.loadTop = () => this._changeType('top');
  }

  componentWillMount() {
    this.props.loadReddit(this.props.type);
  }

  _changeType(type) {
    this.props.changeType(type);
    this.props.loadReddit(type);
  }

  render() {
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
            <li className="breadcrumb-item active">{this.props.reddit} <small>({this.props.type})</small></li>
          </ol>
        </div>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.loadHot}>Hot</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.loadNew}>New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.loadRising}>Rising</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.loadTop}>Top</a>
            </li>
          </ul>
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
  changeType: () => {},
  items: []
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.data.children,
    reddit: state.reddit,
    type: state.type,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadReddit: (type) => dispatch(loadReddit(type)),
    changeType: (type) => dispatch(changeType(type)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
