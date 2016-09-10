import React, { Component } from 'react';

import { connect } from 'react-redux'
import { loadSubreddit } from '../actions/subredditActionCreators.js';

import TimeAgo from 'react-timeago'

export class ListingItem extends Component {

  constructor(props) {
    super(props);

    this.subRedditClick = () => this._subRedditClick();
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

  _subRedditClick() {
    this.props.loadSubreddit(this.props.item.subreddit);
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
            submitted <TimeAgo date={this.props.item.created_utc * 1000} /> ago by {this.props.item.author} to <a onClick={this.subRedditClick}>/r/{this.props.item.subreddit}</a> <br/>
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
const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSubreddit: (name) => dispatch(loadSubreddit(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem);
