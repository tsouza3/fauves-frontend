import styled from "styled-components";
import ReactInputMask from "react-input-mask";
import { IoClose } from "react-icons/io5";

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 40%;

  position: relative;
  max-height: 65%;
  overflow-y: auto;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Close = styled(IoClose)`
position: absolute;
top: 10px;
right: 10px;
color: #ef4118;
cursor: pointer;
transition: transform 0.2s ease;


&:hover {

  transform: scale(1.25); 


`;

export const NameEvent = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #ef4118;
  margin-left: 1.5em;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #11455d;
  margin-left: 1em;
`;

export const Input = styled(ReactInputMask)`
  text-indent: 20px;
  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 10px;
  margin-bottom: 1em;
  margin-top: 0.5em;
  margin-left: 2em;
  width: ${(props) => props.width || "90%"};
  height: ${(props) => props.height || "50px"};

  &:focus {
    outline: none;
    border-color: #ef4118;
  }

  &:hover {
    border: 2px solid #c8dae7;
  }
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #11455d;
  font-weight: 400;
  margin-left: 1.5em;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const Select = styled.select`
  height: 55px;
  text-indent: 20px;
  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 10px;
  margin-bottom: 1em;
  margin-left: 2em;
  margin-top: 0.5em;
  width: ${(props) => props.width || "91%"};

  &:focus {
    outline: none;
    border-color: #ef4118;
  }

  &:hover {
    border: 2px solid #c8dae7;
  }
`;

export const Option = styled.option``;
export const Message = styled.div`
  margin-top: 10px;
  color: ${(props) => (props.type === "success" ? "green" : "red")};
  margin-left: 1.6em;
`;
export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-left: 1.6em;
  margin-bottom: 0.5em;
  color: #11455d;
`;

export const SubmitButton = styled.button`
  width: 92%;
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
  margin-left: 1.7em;
`;
