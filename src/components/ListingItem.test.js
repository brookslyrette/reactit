import React from 'react';
import ReactDOM from 'react-dom';
import ListingItem from './ListingItem.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingItem index={0} item={{
    thumbnail: '',
    created_utc: 0,
    url: '',
    title: '',
  }}/>, div);
});
