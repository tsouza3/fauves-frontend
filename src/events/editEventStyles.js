import styled from "styled-components";

import { Link } from "react-router-dom";

export const Section = styled.section`
  height: auto;
  width: 100%;
  background-color: #f3f8fc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EventProductor = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10em;
  justify-content: space-between
  
`;

export const DescriptionContainer = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1em; /* Ajuste conforme necessário */
  overflow: hidden;
  word-break: break-word; /* Quebra palavras longas */
  white-space: pre-wrap; /* Quebra linhas de acordo com o espaço disponível */
  overflow-wrap: break-word; /* Quebra palavras longas */
  font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 15px;
`;


export const EditDescription = styled.p`
text-decoration: none;
border: none;
color: #ef4118;
font-family: "Montserrat", sans-serif;
font-weight: 600;
font-size: 15px;
cursor: pointer;

`



export const EditAndTitle = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;

`

export const UserIcon = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 1.5em;
  border: 1px solid #ccc;
`;

export const UserName = styled.p`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  margin-left: 1em;
`;
export const LocationContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  
`;

export const ImageContainer = styled.img`
  height: 350px;
  width: 700px;
  margin-top: 1em;
  border-radius: 10px;
  background-color: #ccc;
  z-index: 2;
  object-fit: cover;
`;

export const SubContainer = styled.div`
  width: 650px;
  height: 140px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
`;

export const Public = styled.p`
  width: 110px;
  height: 35px;
  background-color: #92fea8;
  color: #298837;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
`;

export const PubAndDelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 22.5em;
`;
export const Date = styled.p`
  color: #afa5a3;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-left: 1.3em;
`;

export const Name = styled.div`
  color: #424238;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 19px;
  margin-left: 1em;
`;

export const TicketValidation = styled.button`
  height: 150px;
  width: 315px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: none;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Edit = styled.p`
cursor: pointer;
`

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 1.2em;
justify-content: center;
margin-top: 2em;

`;
export const Txt = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #8697a1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTxt = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  max-width: 80%;
  text-align: center;
  color: #8697a1;
`;

export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #424238;

  font-size: 23px;
  margin-top: 1.5em;
`;

export const Wrapper = styled.div`
  width: 43%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const OptionsContainer = styled.div`
  background-color: #fff;
  height: auto;
  width: 100%;
  border-radius: 10px;

 
`;
export const Options = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 1em;
  margin-left: 1.5em;
  color: #8697a1;
  display: flex;
  align-items: center;
  gap: 1em;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Span = styled.span`
  margin-top: 2em;
`;

export const LocationText = styled.p`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 17px;
  margin-left: 1em;
 
`;

export const LocationImage = styled.img`
  width: 34px;
  height: 45px;
  margin-left: 1.5em;
`;


export const CreateTicketContainer = styled(Link)`
  background-color: transparent;
  width: 100%;
  height: 100px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;
  z-index: 999;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TitleText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  align-self: start;
  color: #4b4b4b;
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

export const DeleteAndEdit = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #ef4118;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Delete = styled.p`
  cursor: pointer;
`;
