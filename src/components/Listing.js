import React, { Component } from 'react';
import { Link } from 'react-router'

import ListingItem from './ListingItem.js';
import ListingType from './ListingType.js';

export default class Listing extends Component {

  render() {
    return (
      <div>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to='/'>Home</Link>
            </li>
            <li className="breadcrumb-item active">{this.props.reddit} <small>({this.props.type})</small></li>
          </ol>
        </div>
        <ListingType changeType={this.props.changeType} type={this.props.type}/>
        <div className="App-intro">
          {this.props.items.map((item, i) => {
            return <ListingItem key={item.data.id} item={item.data} index={i} />
          })}
        </div>
        <button type="button" className="btn btn-secondary btn-lg" onClick={this.props.loadMore}>Load More...</button>
      </div>
    );
  }
}
