import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Wrapper from 'components/PageContainer';
import H1 from 'components/H1';

import { makeSelectError } from 'containers/App/selectors';
import { makeSelectSkills } from './selectors';

import { loadSkills } from './actions';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Level from './Level';

class SkillsPage extends Component {
  componentWillMount() {
    this.props.loadSkills();
  }

  render() {
    return (
      <div>
        <Helmet
          title="Skills Page"
          meta={[
            {
              name: 'description',
              content: 'Feature page of React.js Boilerplate application',
            },
          ]}
        />
        <Wrapper>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          <List>
            {this.props.skills &&
              this.props.skills.map((item) => (
                <ListItem key={item.id}>
                  <ListItemTitle>
                    {item.framework}
                    {' - '}
                    <Level>{item.level}</Level>
                  </ListItemTitle>
                  <p>{item.title}</p>
                  <ul>
                    {item.comments &&
                      item.comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                      ))}
                  </ul>
                </ListItem>
              ))}
          </List>
        </Wrapper>
      </div>
    );
  }
}

SkillsPage.propTypes = {
  skills: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadSkills: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadSkills: () => dispatch(loadSkills()),
  };
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  skills: makeSelectSkills(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);
