import React from 'react';
import { Link } from 'react-router-dom'

import ListingItem from './ListingItem.js';
import ListingType from './ListingType.js';

const Listing = (props) => (
  <div>
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">
          <Link to='/'>Home</Link>
        </li>
        <li className="breadcrumb-item active">{props.reddit} <small>({props.type})</small></li>
      </ol>
    </div>
    <ListingType changeType={props.changeType} type={props.type}/>
    <div className="App-intro">
      {props.items.map((item, i) => {
        return <ListingItem key={item.data.id} item={item.data} index={i} expandItem={props.expandItem}/>
      })}
    </div>
    <button type="button" className="btn btn-secondary btn-lg load-more" onClick={props.loadMore}>Load More...</button>
  </div>
);

export default Listing;
