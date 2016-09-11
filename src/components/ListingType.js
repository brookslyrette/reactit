import React, { Component } from 'react';

export default class ListingType extends Component {

  constructor(props) {
    super(props);
    this.loadNew = () => this._changeType('new');
    this.loadHot = () => this._changeType('hot');
    this.loadRising = () => this._changeType('rising');
    this.loadControversial = () => this._changeType('controversial');
    this.loadTop = () => this._changeType('top');
  }

  _changeType(type) {
    this.props.changeType(type);
  }

  render() {
    return (
      <div className="type-selector">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className={'nav-link ' + (this.props.type === 'hot' ? 'active' : '')} href="#" onClick={this.loadHot}>Hot</a>
          </li>
          <li className="nav-item">
            <a className={'nav-link ' + (this.props.type === 'new' ? 'active' : '')} href="#" onClick={this.loadNew}>New</a>
          </li>
          <li className="nav-item">
            <a className={'nav-link ' + (this.props.type === 'rising' ? 'active' : '')} href="#" onClick={this.loadRising}>Rising</a>
          </li>
          <li className="nav-item">
            <a className={'nav-link ' + (this.props.type === 'controversial' ? 'active' : '')} href="#" onClick={this.loadControversial}>Controversial</a>
          </li>
          <li className="nav-item">
            <a className={'nav-link ' + (this.props.type === 'top' ? 'active' : '')} href="#" onClick={this.loadTop}>Top</a>
          </li>
        </ul>
      </div>
    );
  }
}
