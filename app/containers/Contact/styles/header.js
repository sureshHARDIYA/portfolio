import styled from 'styled-components';
import colors from '../../../styles/colors';

const Header = styled.h1`
  position: relative;
  margin: 10px 0px;
  padding: 0;
  color: ${colors.brandGreen};
  text-align: center;
  font-size: 1.4em;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  margin-top: 2rem;

  &:after {
    content: '';
    display: inline-block;
    height: 2px;
    width: 70px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translate(-50%);
    background: ${colors.brandGreen};
  }

  @media screen and (min-width: 320px) {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
`;

export default Header;
