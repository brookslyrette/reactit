import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadSubreddit, loadMoreSubredditItems, expandItem, changeType } from '../actions/redditActionCreators.js';

import Listing from '../components/Listing.js';

export class SubredditPageContainer extends Component {

  constructor(props) {
    super(props);
    this.changeType = (type) => this._changeType(type);
    this.loadMore = () => this._loadMore();
  }

  componentWillMount() {
    this.props.loadSubreddit(this.props.params.name, this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.name !== nextProps.params.name) {
      this.props.loadSubreddit(nextProps.params.name, this.props.type);
    }
  }

  _changeType(type) {
    this.props.changeListingType(type);
    this.props.loadSubreddit(this.props.params.name, type);
  }

  _loadMore() {
    this.props.loadMoreSubredditItems(this.props.params.name, this.props.type, this.props.after);
  }

  render() {
    return (
      <Listing items={this.props.items} reddit={this.props.params.name}
        type={this.props.type} changeType={this.changeType}
        loadMore={this.loadMore} expandItem={this.props.expandItem}
      />
    );
  }
}

SubredditPageContainer.defaultProps = {
  loadReddit: () => {},
  changeType: () => {},
  items: []
};

const mapStateToProps = (state, ownProps) => {
  if (state.reddit === ownProps.params.name) {
    return {
      items: state.items,
      reddit: state.reddit,
      type: state.type,
      after: state.after,
    }
  }
  else {
    return {};
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadSubreddit: (name, type) => dispatch(loadSubreddit(name, type)),
    loadMoreSubredditItems: (name, type, after) => dispatch(loadMoreSubredditItems(name, type, after)),
    changeListingType: (type) => dispatch(changeType(type)),
    expandItem: (item) => dispatch(expandItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditPageContainer);
