import styled from 'styled-components';
import colors from '../../../styles/colors';

const Info = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 3px 3px 10px 0px rgba(46,61,73,0.2);

  &:after {
    right: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: ${colors.brandGreenLight};
    border-width: 10px;
    top: 10px;
  }
  @media screen and (max-width: 780px){
     margin-bottom: 40px;
   }


  & h4 {
    text-align: left;
    font-size: 14px;
    width: 100%;
    padding: 0.687rem;
    margin: 0;
    box-sizing: border-box;
    background: ${colors.brandGreenLight};
    color: ${colors.lightgrey};
  }


  & div {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

  @media screen and (max-width: 780px){
     margin-top: 10px;
   }

    & >  span {
      flex-basis: 100%;
      display: block;
      padding: 0.687rem;
      border-top: 1px solid #EEE;
      border-bottom: 1px solid #EEE;
      font-size: 14px;

      &:first-child {
        border-top: none;
      }


      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
export default Info;
