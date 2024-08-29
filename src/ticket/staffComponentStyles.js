import styled from 'styled-components'

export const Container = styled.div`
background-color: #fff;
width: 200px;
height: 200px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1em;


`

export const UserIcon = styled.img`
border-radius: 50%;
width: 70px;
height: 70px;
border: 1px solid #ccc;
margin: 0;
margin-bottom: 0.5em;

`

export const UserName = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 700;
color: #11455d;
font-size: 20px;
margin: 0;
`

export const UserEmail = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 14px;
color: #ccc;
margin: 0;

`

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;
justify-content: center;


`