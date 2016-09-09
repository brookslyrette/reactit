import React from 'react';
import ReactDOM from 'react-dom';
import ListingItem from './ListingItem.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingItem item={{
    thumbnail: '',
    url: '',
    title: '',
  }}/>, div);
});
