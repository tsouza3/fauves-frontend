import styled from "styled-components";
import { Link } from "react-router-dom";

export const LeftSection = styled.section`
  background-color: #2a2ad7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const RegisterSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f8fc;
`;

export const Flex = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 2em;
`;
export const Img = styled.img`
  width: 155px;
  height: 70px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 428px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 42px;
`;
export const SubTitle = styled.h2`
  color: #fff;
  max-width: 383px;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 22px;
  margin-top: -0.1px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -15em;
  margin-top: -6em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormTitle = styled.p`
  width: 428px;
  color: #4b4b4b;
  font-weight: 800;
  font-size: 32px;
  margin-right: 2em;
`;
export const InputContainer = styled.div`
  margin-bottom: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 500px;
  height: 50px;

  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;

  text-indent: 20px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
`;

export const SubmitButton = styled.button`
  width: 500px;
  height: 50px;
  border-radius: 30px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background: #ef4118;
  letter-spacing: 0.7px;
  font-family: "Montserrat", sans-serif;
`;

export const SignupLink = styled(Link)`
  color: #ef4118;
  text-align: center;
  margin-top: 15px;
`;

export const ImageWrapper = styled.div``;
export const Image = styled.img`
  width: 694px;
  height: 229px;
`;

export const Span = styled.span`
  margin-top: 10px;
`;
