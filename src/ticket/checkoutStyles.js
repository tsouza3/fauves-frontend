import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f3f8fc;
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column; /* Correção de sintaxe */
`;

export const EventContainer = styled.div`
  background-color: #fff; /* Correção do código de cor */
  width: 70%; /* Correção da sintaxe */
  display: flex;
  height: 120px;
  align-self: center;
  border-radius: 8px; /* Adiciona um pouco de arredondamento para visualização */
  margin-top: 2em;
`;

export const ImageContainer = styled.div`
 height: 100%;
  display: flex;
  justify-content: center;
  object-fit: cover;
  width: 25%;
  border-radius: 8px;
`;

export const EventText = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 14px;
margin: 0;
`

export const EventTextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5em;

width: 20%:
max-width: 20%;
margin-left: 0.7em;
justify-content: center;
`

export const NameEvent = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 14px;
margin: 0;
`
