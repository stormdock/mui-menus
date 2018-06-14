
import React from 'react';
import { render } from 'react-dom';
//import Demo from './SimpleMenu';
import Demo from './MenuAppBar';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
