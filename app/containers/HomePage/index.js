import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectGeneralData } from 'containers/App/selectors';
import H2 from 'components/H2';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import GitHub2 from 'components/Icons/GitHub2';
import Upwork from 'components/Icons/Upwork';
import LinkedIn from 'components/Icons/LinkedIn';
import WordPress from 'components/Icons/WordPress';
import A from 'components/A';
import Education from 'components/Icons/Education';
import Portfolio from 'components/Icons/Portfolio';

import 'react-vertical-timeline-component/style.min.css';

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

export class HomePage extends Component {
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
          <Section background="#e3e3e3">
            <VerticalTimeline>
              {general.timelines &&
                general.timelines.map((item) => (
                  <VerticalTimelineElement
                    className={
                      item.type === 'education'
                        ? 'vertical-timeline-element--education'
                        : 'vertical-timeline-element--work'
                    }
                    date={item.year}
                    iconStyle={{
                      background:
                        item.type === 'education'
                          ? '#5bbc2e'
                          : 'rgb(33, 150, 243)',
                      color: '#fff',
                    }}
                    icon={
                      item.type === 'education' ? <Education /> : <Portfolio />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      <A href={item.more}>{item.school}</A>
                    </h4>
                    <p>{item.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
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
