import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import PageContainer from 'components/PageContainer';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadRepos } from './actions';
import messages from './messages';

export class Portfolio extends PureComponent {
  componentDidMount() {
    this.props.loadRepos();
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet
          title="Portfolio Page"
          meta={[
            {
              name: 'description',
              content: "Suresh Kumar Mukhiya's Portfolio Page",
            },
          ]}
        />
        <PageContainer>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          <p>
            <FormattedMessage {...messages.headerMessage} />
          </p>
          <p />
          <ReposList {...reposListProps} />
        </PageContainer>
      </article>
    );
  }
}

Portfolio.propTypes = {
  loadRepos: PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadRepos: () => dispatch(loadRepos()),
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
