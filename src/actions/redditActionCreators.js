import 'whatwg-fetch';

export const LOAD_SUBREDDIT = 'LOAD_SUBREDDIT';
export const LOAD_MORE_ITEMS = 'LOAD_MORE_ITEMS';
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const DEFAULT_REDDITS = 'DEFAULT_REDDITS';
export const EXPAND_ITEM = 'EXPAND_ITEM';

export const changeType = (type) => (dispatch) =>
  dispatch({
    type: CHANGE_TYPE,
    newType: type,
  });

export const expandItem = (item) => (dispatch) => dispatch({
    type: EXPAND_ITEM,
    item,
  });

export const loadReddit = (type = 'hot') => (dispatch) =>
  fetch(`https://www.reddit.com/${type}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_SUBREDDIT,
      data: json.data,
      reddit: 'Front Page',
    })
  );

export const loadMoreItems = (type = 'hot', after) => (dispatch) =>
  fetch(`https://www.reddit.com/${type}.json?after=${after}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_MORE_ITEMS,
      data: json.data,
    })
  );

export const loadSubreddit = (name, type = 'hot') => (dispatch) =>
  fetch(`https://www.reddit.com/r/${name}/${type}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_SUBREDDIT,
      data: json.data,
      reddit: name,
    })
  );

export const loadMoreSubredditItems = (name, type = 'hot', after) => (dispatch) =>
  fetch(`https://www.reddit.com/r/${name}/${type}.json?after=${after}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_MORE_ITEMS,
      data: json.data,
    })
  );

export const loadDefaultReddits = () => (dispatch) =>
  fetch('https://www.reddit.com/subreddits/default.json?limit=15')
    .then(response => response.json())
    .then(json => dispatch({
      type: DEFAULT_REDDITS,
      data: json.data,
    })
  );
