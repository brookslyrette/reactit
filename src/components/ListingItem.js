import React, { Component } from 'react';
import { Link } from 'react-router'

import TimeAgo from 'react-timeago'

export default class ListingItem extends Component {

  constructor(props) {
    super(props);
    this.renderPreview = () => this._renderPreview();
  }

  _renderPreview() {
    if (this.props.item.thumbnail && this.props.item.thumbnail.startsWith('http')) {
      return <img className="img-fluid" alt="item preview" src={this.props.item.thumbnail}/>
    }
    else {
      return <img className="img-fluid" alt="item preview" src="http://placehold.it/76x76"/>
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1 item-index">{this.props.index + 1}</div>
        <div className="col-md-1 item-vote">
          ⇧ <br/>
          {this.props.item.score} <br/>
          ⇩ <br/>
        </div>
        <div className="col-md-1">
          {this.renderPreview()}
        </div>
        <div className="col-md-9 text-xs-left">
          <h5>
            <a href={this.props.item.url}>{this.props.item.title}</a> <small>({this.props.item.domain})</small>
          </h5>
          <p className="small">
            submitted <TimeAgo date={this.props.item.created_utc * 1000} /> ago by {this.props.item.author} to <Link to={`/r/${this.props.item.subreddit}`}>/r/{this.props.item.subreddit}</Link>
            <br/>
            <strong>{this.props.item.num_comments} Comments</strong>
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
