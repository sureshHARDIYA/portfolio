import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="react-boilerplate - Logo" />
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/skills">
            <FormattedMessage {...messages.skills} />
          </HeaderLink>
          <HeaderLink to="/educations">
            <FormattedMessage {...messages.educations} />
          </HeaderLink>
          <HeaderLink to="/portfolio">
            <FormattedMessage {...messages.portfolio} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
