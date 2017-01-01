import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import HomeContainer from './components/HomeContainer';

const Root = ({children}) => {
  return (
    <BrowserRouter>
      <div className="uk-animation-fade">
        <HomeContainer />
        {children}
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
