import styled from 'styled-components';
import colors from '../../../styles/colors';

const Button = styled.button`
  padding: 0.7rem 2rem;
  display: block;
  margin: 1.1rem auto;
  background: #fff;
  border: 2px solid ${colors.brandGreen};
  border-radius: 0;
  cursor: pointer;
  color: ${colors.brandGreen};
  text-align: center;
  transition: 0.4s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${colors.brandGreen};
    color: ${colors.white};
  }
`;

export default Button;
