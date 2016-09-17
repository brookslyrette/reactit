import React, { Component } from 'react';
import { Link } from 'react-router'

import TimeAgo from 'react-timeago'

export default class ListingItem extends Component {

  constructor(props) {
    super(props);

    this.renderPreview = () => this._renderPreview();
    this.renderExpander = () => this._renderExpander();
    this.renderExpanded = () => this._renderExpanded();
    this.expand = () => this._expand();
  }

  _expand() {
    this.props.expandItem(this.props.item);
  }

  _renderPreview() {
    if (this.props.item.thumbnail && this.props.item.thumbnail.startsWith('http')) {
      return <img className="img-fluid" alt="item preview" src={this.props.item.thumbnail}/>
    }
    else {
      return <img className="img-fluid" alt="item preview" src="http://placehold.it/78x76"/>
    }
  }

  _renderExpanded() {
    if (this.props.item.expanded) {
      return (
        <p className="lead">
          {this.props.item.selftext}
        </p>
      );
    }
  }

  _renderExpander() {
    if (this.props.item.selftext !== '') {
      return (
        <button onClick={this.expand} type="button" className="btn btn-secondary expander">
          {!this.props.item.expanded ? '+' : '-'}
        </button>
      );
    }
    return '';
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          <div className="row">
            <div className="col-md-1 item-index">
              {this.props.index + 1}
            </div>
            <div className="col-md-1 item-vote">
              ⇧ <br/>
              {this.props.item.score} <br/>
              ⇩ <br/>
            </div>
          </div>
        </div>

        <div className="col-md-1">
          {this.renderPreview()}
        </div>
        <div className="col-md-9 text-xs-left">
          <h5>
            <a href={this.props.item.url}>{this.props.item.title}</a> <small>({this.props.item.domain})</small>
          </h5>
          {this.renderExpander()}
          <p className="small clearfix">
            submitted <TimeAgo date={this.props.item.created_utc * 1000} /> ago by {this.props.item.author} to <Link to={`/r/${this.props.item.subreddit}`}>/r/{this.props.item.subreddit}</Link>
            <br/>
            <strong>{this.props.item.num_comments} Comments</strong>
          </p>
          {this.renderExpanded()}
        </div>
      </div>
    );
  }
}

ListingItem.propTypes = {
  item: React.PropTypes.object,
  index: React.PropTypes.number,
  expandItem: React.PropTypes.func,
};
