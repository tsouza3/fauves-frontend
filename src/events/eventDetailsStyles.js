import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: #f3f8fc;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BlurContainer = styled.div`
  width: 100%;
  height: 200px;

  overflow: hidden;
`


export const BlurredImage = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
filter: blur(40px);





`

export const EventImage = styled.img`
  width: 45%;
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
  position: absolute;
  top: 41%;
  transform: translateY(-50%);
  
`;

export const EventInformation = styled.div`
  background-color: #fff;
  height: 95px;
  width: 40%;
  border-radius: 10px;
  margin-top: 170px;
`;

export const Text = styled.p`
  color: #ef4118;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const SubText = styled.p`
  font-family: "Montserrat", sans-serif;

  color: #4b4b4b;
  font-weight: 900;
  font-size: 20px;
`;

export const TextWrapper = styled.div`
  margin: 20px;
`;

export const LocationContainer = styled.div`
  background-color: #fff;
  width: 40%;
  height: 90px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 1em;
`;

export const EventDescription = styled.div`
width: 40%;
height: auto;
border-radius: 10px;
display: flex;
margin-bottom: 1em;
background-color: #fff;

flex-direction: column;

`

export const DescriptionTitle = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 15px;
margin-top: 1em;
margin-left: 1em;
color: #4b4b4b;



`
export const DescriptionContent = styled.p`
color: #4b4b4b;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 15px;
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
`
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

export const EventProductor = styled.div`
  background-color: #fff;
  width: 40%;
  height: 90px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10em;
  justify-content: space-between
`;

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
export const CreatorText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #58636a;
`;
