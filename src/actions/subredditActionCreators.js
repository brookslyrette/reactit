import 'whatwg-fetch';

export const LOAD_SUBREDDIT = 'LOAD_SUBREDDIT';

export function loadReddit(type = 'hot') {
  return (dispatch) => fetch(`https://www.reddit.com/${type}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_SUBREDDIT,
      data: json,
    }))
}

export function loadSubreddit(name) {
  return (dispatch) => fetch(`https://www.reddit.com/r/${name}.json`)
    .then(response => response.json())
    .then(json => dispatch({
      type: LOAD_SUBREDDIT,
      data: json,
    }))
}
