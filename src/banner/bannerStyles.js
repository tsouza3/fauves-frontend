import styled from "styled-components";

export const Section = styled.section`
  height: 480px;
  display: flex;
  align-items: end;
`;

export const Container = styled.div`
  background-color: #ef4118;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5em;
`;

export const Text = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 35px;
  max-width: 45%;
`;

export const SubText = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  max-width: 45%;
  margin-top: -1em;
`;

export const Image = styled.img`
  position: relative;
  width: 650px;
  top: 2.5em;
  right: 8em;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #9b1e00;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 4em;

  width: 300px;
  height: 54px;
`;
