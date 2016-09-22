import { LOAD_SUBREDDIT, LOAD_MORE_ITEMS, EXPAND_ITEM,
  CHANGE_TYPE, DEFAULT_REDDITS } from '../actions/redditActionCreators.js';

const initialState = {
  items: [],
  reddit: '',
  type: 'hot',
  after: '',
};

export function subreddit(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUBREDDIT:
      return {
        ...state,
        reddit: action.reddit,
        items: action.data.children,
        after: action.data.after,
      };
    case LOAD_MORE_ITEMS:
      const items = [...state.items, ...action.data.children];
      return {
          ...state,
          items: items,
          after: action.data.after,
        };
    case CHANGE_TYPE:
      return { ...state, type: action.newType };
    case DEFAULT_REDDITS:
      const reddits = action.data.children;
      reddits.sort((a, b) => a.data.display_name.localeCompare(b.data.display_name));
      return { ...state, reddits: action.data.children};
    case EXPAND_ITEM:
      let item = state.items.find((a) => a.data.id === action.item.id);
      const index = state.items.indexOf(item);

      let value = true;
      if (item.data.expanded) {
        value = false;
      }
      const data = { ...item.data, expanded: value };

      return {
          ...state,
          items: [
            ...state.items.slice(0, index),
            {...item, data},
            ...state.items.slice(index + 1),
          ]
        };
    default:
      return state;
  }
}
