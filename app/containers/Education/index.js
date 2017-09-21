import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectError } from 'containers/App/selectors';
import PageContainer from 'components/PageContainer';
import H2 from 'components/H2';
import { makeSelectEducation } from './selectors';
import { loadEducations } from './actions';
import ListItemParent from './styles/listItemParent';
import List from './listItem';

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
        <PageContainer>
          <H2>Education</H2>
          <ListItemParent>
            {educations &&
              educations.map((item) => <List key={item.id} {...item} />)}
          </ListItemParent>
        </PageContainer>
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
