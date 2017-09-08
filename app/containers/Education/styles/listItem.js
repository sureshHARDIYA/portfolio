import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  position: relative;
  box-sizing: border-box;
        
   @media screen and (max-width: 780px){
      flex-direction: column;
   }
  
  & > div:first-child {
    display: flex;
    flex-direction: column;
    flex-basis: 5%;
    
    
    @media screen and (max-width: 780px){
      position: absolute;
      right: 10px;
      top: -7px;
   }   
  }
`;
export default ListItem;
