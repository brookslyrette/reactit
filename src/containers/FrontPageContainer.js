import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadReddit, changeType } from '../actions/subredditActionCreators.js';

import Listing from '../components/Listing.js';

export class FrontPageContainer extends Component {

  constructor(props) {
    super(props);
    this.changeType = (type) => this._changeType(type);
  }

  componentWillMount() {
    this.props.loadReddit(this.props.type);
  }

  _changeType(type) {
    this.props.changeListingType(type);
    this.props.loadReddit(type);
  }

  render() {
    return (
      <Listing items={this.props.items} reddit={this.props.reddit} type={this.props.type} changeType={this.changeType}/>
    );
  }
}

FrontPageContainer.defaultProps = {
  loadReddit: () => {},
  changeType: () => {},
  items: []
};

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.data.children,
    reddit: state.reddit,
    type: state.type,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadReddit: (type) => dispatch(loadReddit(type)),
    changeListingType: (type) => dispatch(changeType(type)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageContainer);
