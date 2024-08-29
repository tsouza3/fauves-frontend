import styled from 'styled-components';

import { IoClose } from "react-icons/io5";

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

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2px;
  width: 40%;

  position: relative;
  min-height: 65%;
  max-height: 65%;

  overflow-y: auto;
`;

export const DescriptionContentInput = styled.textarea`
min-height: 230px;
width: 90%; 
border-radius: 5px;
border: 2px solid #c8dae7;
resize: none;
align-self: center;


`
export const SubmitButton = styled.button`
  width: 93%;
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
  color: #fff;
  background: #ef4118;
  font-family: "Montserrat", sans-serif;
  margin-top: 1.5em;
  align-self: center;
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