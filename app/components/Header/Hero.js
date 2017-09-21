/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import TextLoop from 'react-text-loop';
import { Link } from 'react-router';
import styled from 'styled-components';

import CallToActionButton from 'components/CallToActionButton';
import A from 'components/A';

import Banner from './skm.jpg';
import Img from './Img';
import messages from './messages';

const Header = styled.header`
  position: relative;
  height: 90vh;
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

const NameCard = styled.h1`
  margin: 0;
  padding-top: 30vh;
  text-align: center;

  position: relative;
  color: white;
  font-size: 11vh;
  font-weight: 800;

  @media (max-width: 700px) {
    padding-top: 11vh;
  }
`;

const HeaderInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const DescriptionCard = styled.div`
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 1.2em;
  font-weight: 800;
`;

const ButtonGroup = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
`;

const HireMeButton = styled(A)`
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: ${(props) => (props.background ? props.background : 'none')};
  cursor: pointer;
  padding: ${(props) => (props.medium ? '8px 50px' : '25px 80px')};
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  transition: all 0.3s;
  text-decoration: none;
  border: 3px solid #fff;
  color: ${(props) => (props.background ? '#5cbb2f' : '#fff')};

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    color: #5cbb2f;
    background: ${(props) => (props.background ? '#f4f8f1' : '#fff')};
  }

  &:active {
    color: #0e83cd;
    background: #fff;
  }
`;

const ContactButtonHeader = styled(CallToActionButton)`padding: 8px 50px;`;

// eslint-disable-next-line react/prefer-stateless-function
class Hero extends Component {
  render() {
    return (
      <Header>
        <Img src={Banner} alt="react-boilerplate - Logo" />
        <HeaderBackground />
        <svg
          className="hero"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            className="svg--sm"
            fill="white"
            points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
          />
          <polygon
            className="svg--lg"
            fill="white"
            points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
          />
        </svg>
        <HeaderInner>
          <NameCard>
            <FormattedMessage {...messages.HeaderInnerNameCard} />
          </NameCard>
          <DescriptionCard>
            <TextLoop>
              <span>
                <FormattedMessage
                  {...messages.HeaderInnerDescriptionDeveloperText}
                />
              </span>
              <span>
                <FormattedMessage
                  {...messages.HeaderInnerDescriptionCodeText}
                />
              </span>
              <span>
                <FormattedMessage
                  {...messages.HeaderInnerDescriptionPizzaText}
                />
              </span>
            </TextLoop>
          </DescriptionCard>
          <ButtonGroup>
            <ContactButtonHeader to="/contact">
              <FormattedMessage {...messages.CallToActionButtonHeader} />
            </ContactButtonHeader>
            <HireMeButton
              medium
              background="#fff"
              href="https://www.upwork.com/freelancers/~0182e0779315e50896"
            >
              <FormattedMessage {...messages.CallToActionButtonHire} />
            </HireMeButton>
          </ButtonGroup>
        </HeaderInner>
      </Header>
    );
  }
}

export default Hero;
