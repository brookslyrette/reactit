import { LOAD_SUBREDDIT, LOAD_MORE_ITEMS, CHANGE_TYPE, DEFAULT_REDDITS } from '../actions/redditActionCreators.js';

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
      });
    case LOAD_MORE_ITEMS:
      const items = state.data.children.concat(...action.data.data.children);
      return Object.assign({}, state,
        { data: {
          children: items,
          after: action.data.data.after,
        }
      });
    case CHANGE_TYPE:
      return Object.assign({}, state, {
        type: action.newType,
      });
    case DEFAULT_REDDITS:
      return Object.assign({}, state, {reddits: action.data.data.children});
    default:
      return state;
  }
}
