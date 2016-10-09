import React from 'react';
import ReactDOM from 'react-dom';
import DefaultReddits from './DefaultReddits.js';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter>
      <DefaultReddits reddit={{
      display_name: 'foo',
    }}/>
  </MemoryRouter>, div);
});
