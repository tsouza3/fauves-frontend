import styled from "styled-components";

export const Section = styled.section`
  background-color: #f3f8fc;
  height: auto;
  min-height: 100vh;
  width: 100%:
`;

export const ProfileDiv = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const UserIcon = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  font-weight: 700;
  font-size: 21px;
`;

export const User = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  font-weight: 400;
  font-size: 15px;
`;

export const NameAndUser = styled.div`
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 70%;
  gap: 1.5em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  font-weight: 700;
  font-size: 23px;
  margin-top: 2em;
`;

export const EventsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: column;

`;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  max-width: 70%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
