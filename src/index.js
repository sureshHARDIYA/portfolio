import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import Home from './components/Home';

const Root = ({children}) => {
  return (
    <BrowserRouter>
      <div className="uk-animation-fade">
        <Home />
        {children}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
