import { LOAD_SUBREDDIT } from '../actions/subredditActionCreators.js';

const initialState = {
  data: {
    children: []
  }
};

export function subreddit(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBREDDIT:
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
}
