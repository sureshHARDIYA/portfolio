import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';

import Home from 'components/Icons/Home';
import Education from 'components/Icons/Education';
import Skills from 'components/Icons/Skills';
import Globe from 'components/Icons/Globe';
import Portfolio from 'components/Icons/Portfolio';
import Contact from 'components/Icons/Contact';
import LocaleToggle from 'containers/LocaleToggle';
import Download from 'components/Icons/Download';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import A from './A';
import MenuNameWrapper from './MenuNameWrapper';
import Hero from './Hero';
import HeroHeader from './HeroHeader';

import { styles } from './utils';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    const { location } = this.props;
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
          <A href="https://www.skmukhiya.com.np">
            <Globe />
            <MenuNameWrapper>
              <FormattedMessage {...messages.blogs} />
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
          <A href="http://download710.mediafire.com/xudrq4dm4jfg/zyov83v7ue9yaa2/curriculum-vitae.pdf">
            <Download />
            <MenuNameWrapper>
              <FormattedMessage {...messages.download_resume} />
            </MenuNameWrapper>
          </A>
        </Menu>
        <NavBar>
          <HeaderLink to="/">
            <Home />
            <MenuNameWrapper>
              <FormattedMessage {...messages.home} />
            </MenuNameWrapper>
          </HeaderLink>
          <HeaderLink to="/skills">
            <Skills />
            <MenuNameWrapper>
              <FormattedMessage {...messages.skills} />
            </MenuNameWrapper>
          </HeaderLink>
          <HeaderLink to="/educations">
            <Education />
            <MenuNameWrapper>
              <FormattedMessage {...messages.educations} />
            </MenuNameWrapper>
          </HeaderLink>
          <HeaderLink to="/portfolio">
            <Portfolio />
            <MenuNameWrapper>
              <FormattedMessage {...messages.portfolio} />
            </MenuNameWrapper>
          </HeaderLink>
          <HeaderLink href="https://www.skmukhiya.com.np">
            <Globe />
            <MenuNameWrapper>
              <FormattedMessage {...messages.blogs} />
            </MenuNameWrapper>
          </HeaderLink>
          <HeaderLink to="/contact">
            <Contact />
            <MenuNameWrapper>
              <FormattedMessage {...messages.contact} />
            </MenuNameWrapper>
          </HeaderLink>
          <HeaderLink>
            <LocaleToggle />
          </HeaderLink>
        </NavBar>
        {location.pathname === '/' && <Hero />}
        {location.pathname !== '/' && <HeroHeader />}
      </div>
    );
  }
}
