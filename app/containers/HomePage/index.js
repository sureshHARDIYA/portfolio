/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectGeneralData,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Button from 'components/Button';

import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadRepos, loadGeneralData } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.loadGeneralData();
  }

  render() {
    const { loading, error, repos, general } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

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
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Button onClick={this.props.onChangeUsername}>
              <FormattedMessage {...messages.trymeMessage} />
            </Button>
            <ReposList {...reposListProps} />
          </Section>
          <Section>
            <H2>Languages</H2>
            <div>References</div>
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
            <div>References</div>
            <ul>
              {general.references &&
                Object.keys(general.references).map((item, index) =>
                  <li key={index}>
                    {general.references[item]}
                  </li>
                )}
            </ul>
          </Section>
          <Section>
            <H2>Awards</H2>
            <div>Awards</div>
            <ul>
              {general.awards &&
                general.awards.map((item, index) =>
                  <li key={index}>
                    {item.id} -
                    {item.year} -
                    {item.title} -
                  </li>
                )}
            </ul>
          </Section>
          <Section>
            <H2>Hobbies</H2>
            <div>Hobbies</div>
            <ul>
              {general.interests &&
                general.interests.map((item, index) =>
                  <li key={index}>
                    {item}
                  </li>
                )}
            </ul>
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadGeneralData: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func,
};

const username = 'sureshHARDIYA';

export const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: () => {
    dispatch(changeUsername(username));
    dispatch(loadRepos());
  },
  loadGeneralData: () => dispatch(loadGeneralData()),
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  general: makeSelectGeneralData(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
