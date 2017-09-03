import styled from 'styled-components';

export default styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 767px) {
    .container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;
