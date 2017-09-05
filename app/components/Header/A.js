import styled from 'styled-components';

import NormalA from 'components/A';

const A = styled(NormalA)`
  padding: 0.5em 0;
  display: block;
  outline: none;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);
  color: #d9ffc7;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: margin;

  &:active,
  &:hover {
    color: #abf28a;
    margin-left: 0.5rem;
  }
`;

export default A;
