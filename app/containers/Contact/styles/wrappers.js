import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  border: 1px solid transparent;
  margin: 50px auto;
  box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);

  @media screen and (max-width: 550px) {
    width: 90%;
    padding: 1rem;
  }
`;

// noinspection InconsistentLineSeparators
export const FormGroup = styled.div`
  width: 100%;
  padding: .2em;
  margin-top: .5em;
`;
