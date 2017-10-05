import styled from 'styled-components';
import colors from '../../../styles/colors';

const TimeLine = styled.div`
  flex-basis: 5%;
  margin: 0 30px;
   
   @media screen and (max-width: 780px){
      margin-bottom: 20px;
      position: relative;
      left: -20px;
      
   }   
  
  & > span {
    display: block;
    padding: .1rem;
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%; 
    background: ${colors.brandGreen};
    border: 0 solid transparent;  
    box-shadow: 0 0 0 8px ${colors.brandGreenLight};

    &:after {
      content: '';
      position: absolute;
      z-index: 0;
      bottom: -210px;
      left: 50%;
      display: inline-block;
      transform: translate(-50%);
      background: ${colors.brandGreenLight};
      height: 210px;
      width: 0.625rem;
      border: 0 solid transparent;
  
      
      @media screen and (max-width: 780px){
        display: none;
      }
     
    }
  }
`;

export default TimeLine;
