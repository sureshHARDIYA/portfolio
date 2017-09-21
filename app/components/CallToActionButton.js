import { Link } from 'react-router';
import styled from 'styled-components';

const CallToActionButton = styled(Link)`
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: ${(props) => (props.background ? props.background : 'none')};
  cursor: pointer;

  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '25px')};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : '25px'};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '80px')};
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : '80px')};
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  transition: all 0.3s;
  text-decoration: none;
  border: 3px solid #fff;
  color: ${(props) => (props.color ? props.color : '#fff')};

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    color: #5cbb2f;
    background: ${(props) => (props.background ? '#f4f8f1' : '#fff')};
    border-color: ${(props) => (props.background ? '#5cbb2f' : '#fff')};
  }

  &:active {
    color: #0e83cd;
    background: #fff;
  }
`;

export default CallToActionButton;
