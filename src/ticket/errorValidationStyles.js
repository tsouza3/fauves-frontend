import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EF4118;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
`;

export const Content = styled.div`
  text-align: center;
  color: white;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
