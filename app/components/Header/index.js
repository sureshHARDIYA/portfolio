import React from 'react';
import { FormattedMessage } from 'react-intl';
import { slide as Menu } from 'react-burger-menu';

import Home from 'components/Icons/Home';
import Education from 'components/Icons/Education';
import Skills from 'components/Icons/Skills';
import Portfolio from 'components/Icons/Portfolio';
import Contact from 'components/Icons/Contact';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import A from './A';
import MenuNameWrapper from './MenuNameWrapper';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: 'rgb(6, 136, 43)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <div>
        <Menu styles={styles}>
          <A href="/">
            <Home />
            <MenuNameWrapper>
              <FormattedMessage {...messages.home} />
            </MenuNameWrapper>
          </A>
          <A href="/skills">
            <Skills />
            <MenuNameWrapper>
              <FormattedMessage {...messages.skills} />
            </MenuNameWrapper>
          </A>
          <A href="/educations">
            <Education />
            <MenuNameWrapper>
              <FormattedMessage {...messages.educations} />
            </MenuNameWrapper>
          </A>
          <A href="/portfolio">
            <Portfolio />
            <MenuNameWrapper>
              <FormattedMessage {...messages.portfolio} />
            </MenuNameWrapper>
          </A>
          <A href="/contact">
            <Contact />
            <MenuNameWrapper>
              <FormattedMessage {...messages.contact} />
            </MenuNameWrapper>
          </A>
        </Menu>
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
