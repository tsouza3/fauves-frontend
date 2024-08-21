import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  width: 43%;
  height: 130px;
  border-radius: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1em;
  flex-direction: column;
`;

export const AllContainer = styled.div`
  width: 100%;
  max-height: 30%;
`;

export const Name = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #4e5450;
  height: 100%:
  width: 100%;
  
`;

export const Lote = styled.div`
  height: 25px;
  width: 80px;
  background-color: #fa4a01;
  border-radius: 5px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypeTicket = styled.div`
  height: 25px;
  width: 80px;
  border-radius: 5px;
  background-color: #d4d5d0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #676661;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5em;
  margin-left: 1em;
  height: 100%;
  width: 50%;
  margin-top: 1em;
  margin-left: 1em;
`;

export const Price = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #676661;
  margin-left: 0.8em;
  font-size: 20px;
  width: 50%;
  height: 100%;
`;

export const TicketDescription = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  margin-left: 1em;
`;

export const EditAndDelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 1em;
  margin-right: 3.5em;

  align-items: start;
  justify-content: end;
`;
export const EditButton = styled.button`
  border: 1px solid #fa4a01;
  color: #fa4a01;
  background-color: transparent;

  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: #fff;
    background-color: #fa4a01;
  }
`;

export const TrashIcon = styled(FaTrash)`
font-size: 20px;
color: #fa4a01;
margin-top: 10px;
cursor: pointer;
transition: transform 0.2s ease;

&:hover {

  transform: scale(1.25); 
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

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 30%;
  max-width: 600px;
  position: relative;
  height: 30%;
`;

export const AnimationWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #717171;
`;
export const SubText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #717171;
  max-width: 93%;
`;

export const Close = styled(IoClose)`
position: absolute;
top: 10px;
right: 10px;
color: #4b4b4b;
cursor: pointer;
transition: transform 0.2s ease;

&:hover {

  transform: scale(1.25); 


`;
