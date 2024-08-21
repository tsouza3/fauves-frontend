import styled from "styled-components";
import { Link } from "react-router-dom";

export const PerfilContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 27em;
`;
export const PhotoAndName = styled.div`
  display: flex;
`;

export const TicketContainer = styled.div`
width: 100%;
height: auto;
`;

export const AllContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  
`;

export const CenterContainer = styled.div`
display: flex;
min-width: 60%;
max-width: 60%;
align-self: center;


`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: #f3f8fc;
`;

export const Photo = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  margin-left: 15em;
`;

export const TextWrapper = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #11455d;
  margin-left: 1.5em;
`;

export const Container = styled.div`
  min-width: 100%;

  border: 1px dashed #ef4118;
  height: 35px;
  margin: auto;
  margin-top: 2em;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #ef4118;
  font-size: 14px;
  margin-left: 2em;
`;

export const CashContainer = styled.div`
  min-width: 100%;
  height: 110px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 1em;
`;

export const TextContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
  margin-left: 1em;
`;

export const ComercialContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  align-items: center;
  justify-content: start;
  margin: auto;
  border-radius: 10px;
`;
export const Perfis = styled.div`
  margin-left: 2em;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  
`;

export const Button = styled(Link)`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 20px;
  transition: color 0.3s ease;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;
  padding: 0.5em;

  &:hover {
    background-color: #ccc;
  }
`;

export const EditProfileBtn = styled(Link)`
  text-decoration: none;
  height: 80%;
  margin-right: 0.5em;
  width: 14%;
  border-radius: 10px;
  font-weight: 600;
  text-align: center;
  align-content: center;
  background-color: red;
  border: none;
  color: #fff;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(232, 69, 29, 0.7);
  }
`;

export const RedButton = styled.button`
  border: 1px solid #ef4118;
  background-color: #fff;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  transition: color 0.3s ease;
  margin-left: 1em;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #ef4118;

  &:hover {
    background-color: #ef4118;
    color: #fff;
  }
`;
export const ButtonContainer = styled.div`
  margin-right: 15em;
`;

export const CreateLink = styled.div`
  border: 2px dashed #ef4118;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.p`
  display: flex;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 23px;
`;
export const EventContainer = styled.div`
  display: flex;
  justify-content: start;
  background-color: #f3f8fc;
  width: 100%;
  height: auto;
  gap: 1em;
  flex-wrap: wrap;


`;


export const EventSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

`;

export const Banner = styled.img`
  max-width: 99%;
  min-width: 99%;
  min-height: 100%;

  max-height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const Txt = styled.div`
  width: 350px;
  height: auto;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: start;
  flex-direction: column;
`;
export const TxtContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1em;
`;
export const Name = styled.div`
  color: #424238;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 23px;
`;

export const Date = styled.p`
  color: #afa5a3;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
`;

export const Public = styled.p`
  width: 120px;
  height: 35px;
  background-color: #92fea8;
  color: #298837;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 16px;
`;

export const QntTicket = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #294d59;
  font-size: 15px;
  display: flex;
  align-items: center;
`;
export const EventWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
`;
export const Permission = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #294d59;
  font-size: 15px;
  display: flex;
  align-items: center;
`;
export const Delete = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #ef4118;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;
export const PubAndDelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8.7em;
`;

export const QntAndPermission = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4.3em;
  align-items: center;
`;

export const ComercialProfiles = styled.div`
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 55px;
  height: 55px;
  margin-left: 1.5em;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
