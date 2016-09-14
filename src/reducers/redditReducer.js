import { LOAD_SUBREDDIT, LOAD_MORE_ITEMS, CHANGE_TYPE, DEFAULT_REDDITS } from '../actions/redditActionCreators.js';

const initialState = {
  items: [],
  reddit: '',
  type: 'hot',
  after: '',
};

export function subreddit(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBREDDIT:
      return Object.assign({}, state, {
        reddit: action.reddit,
        items: action.data.children,
        after: action.data.after,
      });
    case LOAD_MORE_ITEMS:
      const items = state.items.concat(...action.data.children);
      return Object.assign({}, state,
        {
          items: items,
          after: action.data.after,
        }
      );
    case CHANGE_TYPE:
      return Object.assign({}, state, {
        type: action.newType,
      });
    case DEFAULT_REDDITS:
      const reddits = action.data.children;
      reddits.sort((a, b) => a.data.display_name.localeCompare(b.data.display_name));
      return Object.assign({}, state, {reddits: action.data.children});
    default:
      return state;
  }
}
