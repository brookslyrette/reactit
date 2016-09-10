import React, { Component } from 'react';

class ListingItem extends Component {

  render() {
    return (
      <div>
        <div>
          {this.props.index + 1}
        </div>
        <div>
          {this.props.item.score}
        </div>
        <img src={this.props.item.thumbnail}/>
        <a href={this.props.item.url}>{this.props.item.title}</a>
      </div>
    );
  }
}

ListingItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.number,
};

export default ListingItem;
