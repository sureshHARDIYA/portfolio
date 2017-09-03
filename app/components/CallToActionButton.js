import styled from 'styled-components';

const CallToActionButton = styled.button`
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 25px 80px;
  display: inline-block;
  margin: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  transition: all 0.3s;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }

  border: 3px solid #fff;
  color: #fff;

  &:hover {
    color: #0e83cd;
    background: #fff;
  }

  &:active {
    color: #0e83cd;
    background: #fff;
  }
`;

export default CallToActionButton;
