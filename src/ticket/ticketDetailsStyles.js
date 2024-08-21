import styled from 'styled-components'
import { IoClose } from 'react-icons/io5';

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 35%;

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
flex-direction: column;
width: 100%;
max-width: 95%;

`

export const TicketOwner = styled.p`
font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #4b4b4b;
`

export const Text = styled.p`
font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4b4b4b;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #4b4b4b;
  `;

export const SubmitButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 30px;
  align-self: center;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || "#ef4118"};
  margin-top: 0.5em;
  margin-bottom: 0.5em;

  font-family: "Montserrat", sans-serif;
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

