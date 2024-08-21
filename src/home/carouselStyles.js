import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 350px;
  width: 70%;
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
  margin-top: 2em;
  border-radius: 5px;
  overflow: hidden;
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  border-radius: 5px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const RightDiv = styled.section`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: start;
  background-color: #fff;
  border-radius: 5px;
`;

export const TextWrapper = styled.div`
  color: #ef4118;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  margin: 2em;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const SubTextWrapper = styled.p`
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  color: #696969;
  font-size: 20px;
`;

export const Location = styled.p`
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  color: #696969;
`;

export const Btn = styled.button`
  background-color: #f8f8f8;
  color: #ef4118;
  border: none;
  border-radius: 10px;
  width: 52px;
  height: 52px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SkipBtnContainer = styled.div`
  margin-left: 3em;
  margin-top: 7em;
`;
