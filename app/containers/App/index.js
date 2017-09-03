/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import ContainerWrapper from 'components/ContainerWrapper';
import CallToActionButton from 'components/CallToActionButton';
import Content from './Content';
import CallToAction from './CallToAction';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <Header />
      <Content>
        {React.Children.toArray(props.children)}
      </Content>
      <CallToAction>
        <ContainerWrapper>
          <h2>I like to say hello to everyone.</h2>
          <CallToActionButton>Contact Me</CallToActionButton>
        </ContainerWrapper>
      </CallToAction>
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
