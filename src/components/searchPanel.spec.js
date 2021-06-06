import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import SearchPanel from './searchPanel';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SearchPanel locationList={['São Paulo', 'Paris', 'El Paso']} />, div)
});


it('renders without crashing without props', () => {
    const div = document.createElement('div')  
    reactDom.render(<SearchPanel />, div)
  });