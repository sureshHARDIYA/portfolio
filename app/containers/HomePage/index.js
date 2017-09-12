import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectGeneralData } from 'containers/App/selectors';
import H2 from 'components/H2';

import GitHub2 from 'components/Icons/GitHub2';
import Upwork from 'components/Icons/Upwork';
import LinkedIn from 'components/Icons/LinkedIn';
import WordPress from 'components/Icons/WordPress';
import A from 'components/A';

import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadGeneralData } from '../App/actions';

const ReferenceWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 1rem 0 0 0;
  list-style: none;
  text-align: center;
`;

const ReferenceItem = styled.li`
  width: 25%;
  height: 4em;
  text-align: center;
  transition: 0.3s;
  transition-property: margin;
  justify-content: center;

  &:hover {
    margin-top: : 1px;
  }
`;

export class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.loadGeneralData();
  }

  render() {
    const { general } = this.props;

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            {
              name: 'description',
              content: 'A React.js Boilerplate application homepage',
            },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section background="#f9f9f9">
            <H2>Languages</H2>
            <ul>
              {general.languages &&
                general.languages.map((item) =>
                  (<li key={item.id}>
                    {item.id} -
                    {item.name} -
                    {item.level} -
                    {item.comment} -
                  </li>)
                )}
            </ul>
          </Section>
          <Section>
            <H2>Awards</H2>
            <ul>
              {general.awards &&
                general.awards.map((item) =>
                  (<li key={item.id}>
                    {item.id} -
                    {item.year}
                    {item.title} -
                  </li>)
                )}
            </ul>
          </Section>
          <Section background="#f9f9f9">
            <H2>Hobbies</H2>
            <ul>
              {general.interests &&
                general.interests.map((item) =>
                  (<li key={item}>
                    {item}
                  </li>)
                )}
            </ul>
          </Section>
          <Section>
            <ReferenceWrapper>
              <ReferenceItem>
                <A
                  href={general.references && general.references.upwork}
                  target="_blank"
                >
                  <Upwork />
                </A>
              </ReferenceItem>
              <ReferenceItem>
                <A
                  href={general.references && general.references.linkedin}
                  target="_blank"
                >
                  <LinkedIn />
                </A>
              </ReferenceItem>
              <ReferenceItem>
                <A
                  href={
                    general.references && general.references.wordpressPlugin
                  }
                  target="_blank"
                >
                  <WordPress />
                </A>
              </ReferenceItem>
              <ReferenceItem>
                <A
                  href={general.references && general.references.github}
                  target="_blank"
                >
                  <GitHub2 height="10em" width="10em" />
                </A>
              </ReferenceItem>
            </ReferenceWrapper>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loadGeneralData: PropTypes.func.isRequired,
  general: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export const mapDispatchToProps = (dispatch) => ({
  loadGeneralData: () => dispatch(loadGeneralData()),
});

const mapStateToProps = createStructuredSelector({
  general: makeSelectGeneralData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
