import styled from 'styled-components';
import colors from '../../../styles/colors';

const Button = styled.button`
  height: 44px;
  padding: .7rem 1.4rem;
  display: block;
  margin: 1.1rem auto;
  background: ${colors.brandGreen};
  border: 1px solid ${colors.brandGreen};
  cursor: pointer;
  color: ${colors.white};
  text-align: center;
  transition: .4s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
    background: ${colors.white};
    color: ${colors.brandGreen};
    border: 1px solid ${colors.brandGreen};
  }
`;

export default Button;
