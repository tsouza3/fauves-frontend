import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #f3f8fc;
  z-index: 999;
  padding-top: 8em;
  padding-bottom: 2em;
  position: relative;
  z-index: 10;
  overflow-x: hidden; /* Impede o vazamento horizontal */

  @media (max-width: 700px) {
    padding-top: 4em;
    padding-bottom: 2em;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 2em;
  box-sizing: border-box; /* Inclui o padding dentro da largura */

  @media (max-width: 700px) {
    padding: 0 1em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  justify-content: space-between;
  box-sizing: border-box; /* Inclui o padding dentro da largura */

  @media (max-width: 700px) {
    width: 100%; /* Usa toda a largura da tela em telas menores */
  }
`;

export const Line = styled.hr`
  background-color: #c8f3f9;
  width: 100%;
  margin: 1em 0;

  @media (max-width: 700px) {
    margin: 0.5em 0;
  }
`;

export const SecondText = styled.div`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  align-self: center;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  color: #4b4b4b;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box; /* Inclui o padding dentro da largura */

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  box-sizing: border-box; /* Inclui o padding dentro da largura */

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const Text = styled.p`
  color: #4b4b4b;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 700px) {
    text-align: center;
  
  }
`;
