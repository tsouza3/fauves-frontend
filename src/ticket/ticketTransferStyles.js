import styled from 'styled-components'
import { IoClose } from "react-icons/io5";


export const Section = styled.section`
width: 100%;
height: 100%;
background-color: #f3f8fc;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;


`
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  text-indent: 20px;
  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;
  margin-bottom: 1.5em;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;



export const Container = styled.div`
width: 35%;
height: 100%;
display: flex;

flex-direction: column;
justify-content: center;
align-items: center;

`

export const SubmitButton = styled.button`

border-radius: 30px;
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: #fa4a01;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
  align-items: center;`

  export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #4b4b4b;
  `

  export const SubTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #4b4b4b;
  text-align: center;
  `

  export const Close = styled(IoClose)`
position: absolute;
top: 50px;
right: 50px;
color: #ef4118;
cursor: pointer;
transition: transform 0.2s ease;


&:hover {

  transform: scale(1.25); 


`;