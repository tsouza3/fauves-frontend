import styled from "styled-components";

import ReactInputMask from "react-input-mask";

export const Section = styled.section`
  background-color: #f3f8fc;
  width: 100%;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 10em;
`;
export const SubmitBtn = styled.button`
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
export const Titulo = styled.p`
  display: flex;
  justify-content: center;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 23px;
`;

export const Photo = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  position: relative;
  margin-left: 10em;
  cursor: pointer;

  &:focus {
    border-color: #ef4118;
  }
`;

export const FormTitle = styled.p`
  display: flex;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 33px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  margin-top: 10px;
`;
export const InputContainer = styled.div`
  margin-bottom: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled(ReactInputMask)`
  box-sizing: border-box;
  width: 500px;
  height: 50px;

  text-indent: 20px;

  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
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

export const PhotoInput = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;

export const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? "blue" : "gray")};
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
