import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.div`
height: 100vh;
width: 100%;
background-color: #f3f8fc;
display: flex;
justify-content: center;

`

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
max-width: 55%;
`

export const CreateTicketContainer = styled(Link)`
  background-color: transparent;
  width: 115%;
  height: 85px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;
  margin-top: 2em;

  &:hover {
    transform: scale(1.02);
  }
`;
export const CreateTicketText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #8697a1;
  margin-left: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const Title = styled.h1`
font-family: "Montserrat", sans-serif;
font-weight: 600;
font-size: 25px;
color: #11455d;
text-align: center;
margin-top: 1.5em;

`

