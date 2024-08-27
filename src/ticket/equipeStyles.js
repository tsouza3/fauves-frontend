import styled from 'styled-components'

export const Section = styled.section`
width: 100%;
background-color: #f3f8fc;
height: auto;
`

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;

`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 50%;
jusitify-content: start;


`

export const EventName = styled.p`
margin-top: 2em;
font-family: "Montserrat", sans-serif;
font-weight: 500;
color: #ef4118;
font-size: 19px;
`

export const Title = styled.h1`
font-family: "Montserrat", sans-serif;
font-weight: 700;
color: #11455d;
font-size: 26px;

`

export const AddMember = styled.div`
background-color: transparent;
border: 2px dashed #ef4118;
width: 100%;
height: 200px;
border-radius: 10px;
margin-top: 1em;
display: flex;
justify-content: center;
align-items: center;
`

export const AddMemberText = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 700;
color: #ef4118;
font-size: 16px;
margin-top: 2em;
`

export const SubmitButton = styled.button`
  width: 100%;
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
  margin-top: 2em;
  
`;

export const MembersContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: auto;

`

export const SubTitle = styled.h1`
font-family: "Montserrat", sans-serif;
font-weight: 500;
color: #11455d;
font-size: 16px;

`

export const Cargo = styled.div`
font-family: "Montserrat", sans-serif;
font-weight: 700;
color: #11455d;
font-size: 18px;
margin-top: 2em;
`

