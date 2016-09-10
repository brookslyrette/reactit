import { LOAD_SUBREDDIT, CHANGE_TYPE } from '../actions/subredditActionCreators.js';

const initialState = {
  data: {
    children: []
  },
  reddit: '',
  type: 'hot',
};

export function subreddit(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBREDDIT:
      return Object.assign({}, state, action.data, {
        reddit: action.reddit,
      })
    case CHANGE_TYPE:
      return Object.assign({}, state, {
        type: action.newType,
      })
    default:
      return state;
  }
}
