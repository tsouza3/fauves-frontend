import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #f3f8fc;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 131px;
  height: 60px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 15%;
  align-items: end;
`;
export const Container = styled.div`
  width: 45%;
  height: 66%;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 27px;
  margin-top: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 20px;
`;

export const ImageWrapper = styled.div`
  width: 100%; 
  height: auto; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin
`;

export const Image = styled.img`
  height: 260px;
`;

export const Text = styled.p`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  max-width: 65%;
  text-align: center;
`;

export const Btn = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  background-color: #ff3f00;
  color: #fff;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  border-style: none;
  cursor: pointer;
`;
export const BtnContainer = styled.div`
  width: 100%;
  padding-top: 1.5em;
`;
