import styled from 'styled-components';

import NormalA from 'components/A';

const A = styled(NormalA)`
  padding: 2em 0;
  display: block;
  outline: none;
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);
`;

export default A;
