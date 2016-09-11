import 'whatwg-fetch';

export const LOAD_SUBREDDIT = 'LOAD_SUBREDDIT';
export const CHANGE_TYPE = 'CHANGE_TYPE';

export function changeType(type) {
  return (dispatch) => dispatch({
      type: CHANGE_TYPE,
      newType: type,
    });
}

export function loadReddit(type = 'hot') {
  return (dispatch) => fetch(`https://www.reddit.com/${type}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_SUBREDDIT,
      data: json,
      reddit: 'Front Page',
    }))
}

export function loadSubreddit(name, type = 'hot') {
  return (dispatch) => fetch(`https://www.reddit.com/r/${name}/${type}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_SUBREDDIT,
      data: json,
      reddit: name,
    }))
}
