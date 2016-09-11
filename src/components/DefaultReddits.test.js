import React from 'react';
import ReactDOM from 'react-dom';
import DefaultReddits from './DefaultReddits.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DefaultReddits reddit={{
    display_name: 'foo',
  }}/>, div);
});
