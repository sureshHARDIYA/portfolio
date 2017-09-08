import styled from 'styled-components';
import colors from '../../../styles/colors';

const Date = styled.span`
      letter-spacing: 1.4px;  
      text-align: ${(props) => props.right ? 'right' : 'center'};
      font-size: ${(props) => props.large ? '20px' : '10px'};
      font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
      color: ${(props) => props.iscolored ? `${colors.brandGreen}` : `${colors.darkgrey}`};
      font-smoothing: anitialiased;
        
      @media screen and (max-width: 780px){
        text-align: center;
      }
`;

export default Date;
