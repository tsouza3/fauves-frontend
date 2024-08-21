import styled from "styled-components";

export const EventContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 1em;
  max-width: 80%;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 2em;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;

`;

export const EventSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

`;

export const Banner = styled.img`
  max-width: 100%;
  min-width: 100%;
  min-height: 60%;


  max-height: 60%;
  border-radius: 10px;
  object-fit: cover;
`;


export const TextContainer = styled.div`
  width: 335px;
  margin-top: 2em;
  height: 310px;
  gap: 0.5em;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
`;

export const Text = styled.p`
  color: #ef4118;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const SubText = styled.p`
  color: #4b4b4b;
  font-weight: 900;
  font-size: 20px;
`;

export const TextWrapper = styled.div`
  padding-left: 1em;
`;

export const Location = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #696969;
`;
