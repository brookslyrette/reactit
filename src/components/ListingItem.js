import React, { Component } from 'react';

import { connect } from 'react-redux'
import { loadSubreddit } from '../actions/subredditActionCreators.js';

import TimeAgo from 'react-timeago'

class ListingItem extends Component {

  constructor(props) {
    super(props);

    this.subRedditClick = () => this._subRedditClick();
  }

  _subRedditClick() {
    this.props.loadSubreddit(this.props.item.subreddit);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          {this.props.index + 1} - {this.props.item.score}
        </div>
        <div className="col-md-1">
          <img className="img-fluid" alt="item preview" src={this.props.item.thumbnail}/>
        </div>
        <div className="col-md-10 text-xs-left">
          <h5>
            <a href={this.props.item.url}>{this.props.item.title}</a> <small>({this.props.item.domain})</small>
          </h5>
          <p>
            submitted <TimeAgo date={this.props.item.created_utc * 1000} /> ago by {this.props.item.author} to <a onClick={this.subRedditClick}>/r/{this.props.item.subreddit}</a>
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
const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSubreddit: (name) => dispatch(loadSubreddit(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem);
