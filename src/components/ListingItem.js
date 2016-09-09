import React, { Component } from 'react';

class ListingItem extends Component {

  render() {
    return (
      <p>
        <img src={this.props.item.thumbnail}/>
        <a href={this.props.item.url}>{this.props.item.title}</a>
      </p>
    );
  }
}

export default ListingItem;
