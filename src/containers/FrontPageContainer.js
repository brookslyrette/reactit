import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadReddit, loadMoreItems, changeType, expandItem } from '../actions/redditActionCreators.js';

import Listing from '../components/Listing.js';

export class FrontPageContainer extends Component {

  constructor(props) {
    super(props);
    this.changeType = (type) => this._changeType(type);
    this.loadMore = () => this._loadMore();
  }

  componentWillMount() {
    this.props.loadReddit(this.props.type);
  }

  _changeType(type) {
    this.props.changeListingType(type);
    this.props.loadReddit(type);
  }

  _loadMore() {
    this.props.loadMoreItems(this.props.type, this.props.after);
  }

  render() {
    return (
      <Listing items={this.props.items} reddit={this.props.reddit}
        type={this.props.type} changeType={this.changeType}
        loadMore={this.loadMore} expandItem={this.props.expandItem}
      />
    );
  }
}

FrontPageContainer.defaultProps = {
  loadReddit: () => {},
  changeType: () => {},
  items: []
};

const mapStateToProps = (state, ownProps) => {
  if (state.reddit === 'Front Page') {
    return {
      items: state.items,
      reddit: state.reddit,
      type: state.type,
      after: state.after,
    }
  } else {
    return {};
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadReddit: (type) => dispatch(loadReddit(type)),
    loadMoreItems: (type, after) => dispatch(loadMoreItems(type, after)),
    changeListingType: (type) => dispatch(changeType(type)),
    expandItem: (item) => dispatch(expandItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageContainer);
