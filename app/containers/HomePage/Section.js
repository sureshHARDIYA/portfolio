import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = styled.section`
  background: ${(props) => (props.background ? props.background : 'none')};
  padding: 2rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

const SectionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Section = ({ children, background }) =>
  <SectionWrapper background={background}>
    <SectionContainer>
      {children}
    </SectionContainer>
  </SectionWrapper>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
};

export default Section;
