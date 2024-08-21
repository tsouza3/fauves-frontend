import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Section = styled.section`
  height: auto;
  background-color: #f3f8fc;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  width: 100%;
`;

export const FormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%:
`;

export const Title = styled.h1`
  color: #104660;
  font-size: 35px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  margin-top: 2em;
`;

export const SubTitle = styled.h1`
  color: #104660;
  font-size: 25px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Photo = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    border-color: #ef4118;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 2.5em;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Input = styled(ReactInputMask)`
  width: ${(props) => props.width || "500px"};
  height: 50px;
  text-indent: 20px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  border: 1px solid #c8dae7;
  border-radius: 11px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;

export const PhotoInput = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #11455d;
  font-weight: 400;
  margin-bottom: 0.5em;
`;

export const SubmitButton = styled.button`
  width: 520px;
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
