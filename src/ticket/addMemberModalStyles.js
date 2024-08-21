import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2s0px;
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

export const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const NameEvent = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #ef4118;
  margin-left: 1.5em;
  margin-top: 2em;
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

export const Input = styled.input`
  text-indent: 20px;
  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 10px;
  margin-bottom: 1em;
  margin-top: 0.5em;
  margin-left: 2em;
  max-width: 91%;
  height: 50px;

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
  margin-top: 1em;
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
  font-size: 25px;
  color: #11455d;
  margin-left: 1em;
`;

export const PermissionTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #11455d;
`;

export const PermissionSubTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #11455d;
  text-align: center;
  min-width: 90%;
  max-width: 90%;
  
  
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
  font-family: "Montserrat", sans-serif;
  margin-bottom: 2em;
  margin-top: 2em;
`;

export const SelectedPermissionContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
justify-content: center;
gap: 1em;

`

export const SelectedPermission = styled.div`
width: 260px;
height: 200px;
background-color: #fff;
border: 2px solid #ccc;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;


&:focus {
    border-color: #ef4118;
  }

  cursor: pointer;

`



