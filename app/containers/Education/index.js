/*
 * Education
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import { makeSelectEducation } from './selectors';
import { loadEducations } from './actions';

export class Education extends React.PureComponent {
  componentWillMount() {
    this.props.loadEducations();
  }

  render() {
    const { educations } = this.props;

    return (
      <article>
        <Helmet
          title="Education Page"
          meta={[
            {
              name: 'description',
              content: 'A React.js Boilerplate application homepage',
            },
          ]}
        />
        <div>
          <div>
            <H2>Education</H2>
            <div>Loading Education</div>
            <ul>
              {educations &&
                educations.map((item) =>
                  <li key={item.id}>
                    {item.year} - {item.school} - {item.grade} - {item.address}{' '}
                    - {item.course}
                  </li>
                )}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

Education.propTypes = {
  educations: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadEducations: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadEducations: () => dispatch(loadEducations()),
  };
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  educations: makeSelectEducation(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);
