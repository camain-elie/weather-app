import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from './highlight';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Highlight />, div)
});

it('renders and convert to imperial units', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Highlight metric />, div)
  });

/*it('rounds to decimal', () => {

});*/