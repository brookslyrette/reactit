import deepFreeze from 'deep-freeze';
import { assert } from 'chai';
import { subreddit } from './redditReducer.js';

const initialState = {
  type: 'hot',
};

deepFreeze(initialState);

it('handles default action', () => {
  const newState = subreddit(initialState, {
    type: 'none'
  });

  assert.deepEqual(initialState, newState);
});

it('handles LOAD_SUBREDDIT', () => {
  const expectedState = {
    type: 'hot',
    reddit: 'foo',
    items: ['1', '2'],
    after: 'bar',
  }

  const newState = subreddit(initialState, {
    type: 'LOAD_SUBREDDIT',
    reddit: 'foo',
    data: {
      children: ['1', '2'],
      after: 'bar',
    }
  });

  assert.deepEqual(expectedState, newState);
});

it('handles LOAD_MORE_ITEMS', () => {
  const moreItemsInitalState = {
    type: 'hot',
    reddit: 'foo',
    items: ['1', '2'],
    after: 'bar',
  }

  deepFreeze(moreItemsInitalState);

  const expectedState = {
    type: 'hot',
    reddit: 'foo',
    items: ['1', '2', '3', '4'],
    after: 'baz',
  }

  const newState = subreddit(moreItemsInitalState, {
    type: 'LOAD_MORE_ITEMS',
    reddit: 'foo',
    data: {
      children: ['3', '4'],
      after: 'baz',
    }
  });

  assert.deepEqual(expectedState, newState);
});

it('handles CHANGE_TYPE', () => {
  const expectedState = {
    type: 'recent',
  }

  const newState = subreddit(initialState, {
    type: 'CHANGE_TYPE',
    newType: 'recent',
  });

  assert.deepEqual(expectedState, newState);
});

it('handles DEFAULT_REDDITS', () => {
  const expectedState = {
    type: 'hot',
    reddits: [
      { data: { display_name:'javascript' }},
      { data: { display_name:'reactjs' }},
    ]
  }

  const newState = subreddit(initialState, {
    type: 'DEFAULT_REDDITS',
    data: {
      children: [
        { data: { display_name:'reactjs' }},
        { data: { display_name:'javascript' }},
      ],
    },
  });

  assert.deepEqual(expectedState, newState);
});

it('handles EXPAND_ITEM', () => {
  const expandItemInitialState = {
    type: 'hot',
    reddit: 'foo',
    items: [
      {
        data: {
          id: '1',
        }
      },
      {
        data: {
          id: '2',
        }
      }
    ],
  }

  deepFreeze(expandItemInitialState);

  const expectedState = {
    type: 'hot',
    reddit: 'foo',
    items: [
      {
        data: {
          id: '1',
          expanded: true,
        }
      },
      {
        data: {
          id: '2',
        }
      },
    ],
  }

  const newState = subreddit(expandItemInitialState, {
    type: 'EXPAND_ITEM',
    item: {
      id: '1',
    },
  });

  // assert.deepEqual(expectedState, newState);
  assert.deepEqual(expectedState.items[0], newState.items[0]);
  assert.deepEqual(expectedState.items[1], newState.items[1]);
  assert.deepEqual(expectedState, newState);
});
