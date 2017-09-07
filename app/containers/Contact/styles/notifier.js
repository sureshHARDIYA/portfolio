import styled from 'styled-components';
import colors from '../../../styles/colors';

const Notifier = styled.div`
  font-size: 14px;
  text-align: center;
  letter-spacing: 1.4px;
  color: ${(props) => props.status === 200 ? `${colors.nativeBlue}` : `${colors.radicalRed}`};
  transition: color .4s ease-in-out;
`;


export default Notifier;
