import React from 'react';
import ReactDOM from 'react-dom';
import { Forecast } from './forecast';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Forecast />, div)
});