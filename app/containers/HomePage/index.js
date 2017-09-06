import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectGeneralData } from 'containers/App/selectors';
import H2 from 'components/H2';
import withProgressBar from 'components/ProgressBar';

import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadGeneralData } from '../App/actions';

function Component() {
  return <div />;
}

const HocComponent = withProgressBar(Component);

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
                general.languages.map((item, index) =>
                  <li key={index}>
                    {item.id} -
                    {item.name} -
                    {item.level} -
                    {item.comment} -
                  </li>
                )}
            </ul>
          </Section>
          <Section>
            <H2>
              <FormattedMessage {...messages.show_testimonial} />
            </H2>
            <ul>
              {general.references &&
                Object.keys(general.references).map((item, index) =>
                  <li key={index}>
                    {general.references[item]}
                  </li>
                )}
            </ul>
          </Section>
          <Section background="#f9f9f9">
            <H2>Awards</H2>
            <ul>
              {general.awards &&
                general.awards.map((item, index) =>
                  <li key={index}>
                    {item.id} -
                    {item.year}
                    {item.title} -
                  </li>
                )}
            </ul>
          </Section>
          <Section>
            <H2>Hobbies</H2>
            <ul>
              {general.interests &&
                general.interests.map((item, index) =>
                  <li key={index}>
                    {item}
                  </li>
                )}
            </ul>
            <HocComponent />
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
