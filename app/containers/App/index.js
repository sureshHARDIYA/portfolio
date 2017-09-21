import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import ContainerWrapper from 'components/ContainerWrapper';
import CallToActionButton from 'components/CallToActionButton';
import Content from './Content';
import H2 from './H2';
import CallToAction from './CallToAction';
import messages from './messages';

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
        titleTemplate="%s - S.K. Mukhiya"
        defaultTitle="Frontend Developer"
        meta={[{ name: 'description', content: 'Frontend Developer, Nepal' }]}
      />
      <Header location={props.location} />
      <Content>{React.Children.toArray(props.children)}</Content>
      <CallToAction>
        <ContainerWrapper>
          <H2>
            <FormattedMessage {...messages.callToActionMessage} />
          </H2>
          <CallToActionButton to="/contact">
            <FormattedMessage {...messages.CallToActionButton} />
          </CallToActionButton>
        </ContainerWrapper>
      </CallToAction>
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default withProgressBar(App);
