import React, { Component } from 'react';
import TimeAgo from 'react-timeago'

class ListingItem extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          {this.props.index + 1} - {this.props.item.score}
        </div>
        <div className="col-md-1">
          <img className="img-fluid" src={this.props.item.thumbnail}/>
        </div>
        <div className="col-md-10 text-xs-left">
          <h5>
            <a href={this.props.item.url}>{this.props.item.title}</a> <small>({this.props.item.domain})</small>
          </h5>
          <p>
            submitted <TimeAgo date={this.props.item.created_utc * 1000} /> ago by {this.props.item.author} to /r/{this.props.item.subreddit}
          </p>
          <p>
            {this.props.item.num_comments} Comments
          </p>
        </div>
      </div>
    );
  }
}

ListingItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.number,
};

export default ListingItem;
