import styled from 'styled-components';
import colors from '../../../styles/colors';

const Button = styled.button`
   height: 44px;
   padding: .7rem 1.4rem ;
   display: block;
   margin: 1.1rem auto;
   background: #fff;
   border: 1px solid ${colors.brandGreen};
   border-radius: 5px;
   cursor: pointer;
   color: ${colors.brandGreen};
   text-align: center;
   transition: .4s ease-in-out;
   
   &:focus {
    outline: none
   }
`;

export default Button;
