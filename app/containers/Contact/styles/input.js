import styled from 'styled-components';
import colors from '../../../styles/colors';

const Input = styled.input`
  display: block;
  width: 90%;
  height: 44px;
  outline: none;
  padding: .5em;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  border: 1px solid ${colors.borderColor};
  font-size: 14px;
  box-shadow: 0 2px 2px 0 rgba(46,60,73,.05);
  border-radius: 2px;
  color: ${colors.lightestGrey};
  transition: all .4s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.nativeBlue}; 
  }
`;

export default Input;
