import styled from 'styled-components';
import colors from '../../../styles/colors';

const Button = styled.button`
   width: 200px;
   height: 50px;
   display: block;
   margin: 20px auto;
   background: ${colors.nativeBlue};
   border-radius: 5px;
   cursor: pointer;
   color: #FFF;
   transition: .4s ease-in-out;
   
   
   &:hover {
    box-shadow:  0 2px 2px 0 rgba(46,60,73,.05);
    background: ${colors.dodgerBlue};
   }
`;

export default Button;
