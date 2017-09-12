import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.5em;
  text-align: ${(props) => (props.center ? 'center' : 'inherit')};
`;

export default H2;
