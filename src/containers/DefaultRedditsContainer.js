import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadDefaultReddits } from '../actions/redditActionCreators.js';

import DefaultReddits from '../components/DefaultReddits.js';

export class DefaultRedditsContainer extends Component {

  componentWillMount() {
    this.props.loadDefaultReddits();
  }

  render() {
    return (
      <span>
        {this.props.reddits.map((reddit, i) => {
          return (
            <span key={reddit.data.id}> {i === 0 ? '' : ' - '}
              <DefaultReddits reddit={reddit.data} />
            </span>
          );
        })}
      </span>
    );
  }
}

DefaultRedditsContainer.defaultProps = {
  loadDefaultReddits: () => {},
  reddits: []
};

const mapStateToProps = (state, ownProps) => {
  return {
    reddits: state.reddits,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadDefaultReddits: () => dispatch(loadDefaultReddits()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultRedditsContainer);
