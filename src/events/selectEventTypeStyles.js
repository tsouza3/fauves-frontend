import styled from "styled-components";

export const Section = styled.div`
  background-color: #f3f8fc;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.p`
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 33px;

  margin-top: 3em;
`;

export const Option = styled.button`
  border: 1px solid #c1c1c1;
  border-radius: 8px;
  width: 308px;
  height: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
  cursor: pointer;
  margin-top: 3em;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 22px;
  color: #000;
  margin-top: 0.5em;
`;

export const Container = styled.div`
  wdith: 100%;
  display: flex;
  gap: 60px;
`;
