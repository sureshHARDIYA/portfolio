/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TextLoop from 'react-text-loop';
import { Link } from 'react-router';
import styled from 'styled-components';

import CallToActionButton from 'components/CallToActionButton';
import A from 'components/A';

import messages from './messages';

const Header = styled.header`
  position: relative;
  height: 10vh;
  overflow: hidden;
`;

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#5cbb2f, #5cbb2f);
  transform: skewY(0deg);
  transform-origin: top left;
  opacity: 0.8;
`;

// eslint-disable-next-line react/prefer-stateless-function
class Hero extends Component {
  render() {
    return (
      <Header>
        <HeaderBackground />
      </Header>
    );
  }
}

export default Hero;
