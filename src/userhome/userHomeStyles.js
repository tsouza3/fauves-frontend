import styled from "styled-components";
import { Link } from "react-router-dom";

// Container para o perfil
export const PerfilContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem; // Alterado para unidade relativa
  padding: 1rem; // Adicionado padding
  box-sizing: border-box;

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 0.9rem;
  }

 
`;

// Container para foto e nome
export const PhotoAndName = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Container para tickets
export const TicketContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

// Container principal
export const AllContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem; // Adicionado padding
  box-sizing: border-box;
`;

// Container centralizado
export const CenterContainer = styled.div`
  display: flex;
  min-width: 60%;
  max-width: 60%;
  align-self: center;

  @media (max-width: 768px) {
    min-width: 90%;
    max-width: 90%;
  }
`;

// Seção principal
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: #f3f8fc;
`;

// Container da foto
export const Photo = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  margin-left: 1rem; // Alterado para unidade relativa

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

// Wrapper de texto
export const TextWrapper = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 1.25rem; // Alterado para unidade relativa
  color: #11455d;
  margin-left: 1rem; // Alterado para unidade relativa

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;

// Container para conteúdo
export const Container = styled.div`
  width: 100%;
  border: 1px dashed #ef4118;
  height: 35px;
  margin: auto;
  margin-top: 1rem; // Alterado para unidade relativa
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem; // Adicionado padding
  box-sizing: border-box;

  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
    padding: 0.5rem;
  }
`;

// Texto dentro do container
export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #ef4118;
  font-size: 0.875rem; // Alterado para unidade relativa
  margin-left: 1rem; // Alterado para unidade relativa;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }
`;

// Container para caixa de dinheiro
export const CashContainer = styled.div`
  width: 100%;
  height: 110px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 1rem; 
  padding: 1rem; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 0.5rem;
  }
`;

// Texto dentro do container de dinheiro
export const TextContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem; // Alterado para unidade relativa
  margin-left: 1rem; // Alterado para unidade relativa

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-left: 0.5rem;
  }
`;

// Container para perfis comerciais
export const ComercialContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  align-items: center;
  justify-content: start;
  margin: auto;
  border-radius: 10px;
  padding: 1rem; // Adicionado padding
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 70px;
    padding: 0.5rem;
  }
`;

// Lista de perfis
export const Perfis = styled.div`
  margin-left: 1rem; // Alterado para unidade relativa
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

// Botão genérico
export const Button = styled(Link)`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 20px;
  transition: color 0.3s ease;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8125rem; // Alterado para unidade relativa
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: inherit;
  padding: 0.5em;

  &:hover {
    background-color: #ccc;
  }
`;

// Botão de editar perfil
export const EditProfileBtn = styled(Link)`
  text-decoration: none;
  height: 80%;
  margin-right: 0.5rem; // Alterado para unidade relativa
  width: 18%;
  border-radius: 10px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: #ef4118;
  border: none;
  color: #fff;
  font-size: 0.8125rem; // Alterado para unidade relativa
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(232, 69, 29, 0.7);
  }

  @media (max-width: 700px) {
    width: 100%;
    min-width: 60%;
    margin-right: 0;
    font-size: 0.75rem;
        padding: 0.5em;

  }

   @media (max-width: 768px) {
    width: 21%;
    margin-right: 0;
    font-size: 0.75rem;
  }
    
`;

// Botão vermelho
export const RedButton = styled.button`
  border: 1px solid #ef4118;
  background-color: #fff;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  transition: color 0.3s ease;
  margin-left: 1rem; // Alterado para unidade relativa
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #ef4118;

  &:hover {
    background-color: #ef4118;
    color: #fff;
  }
`;

// Container para botões
export const ButtonContainer = styled.div`
  margin-right: 1rem; // Alterado para unidade relativa

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

// Link para criar
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

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

// Título
export const Title = styled.p`
  display: flex;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 1.4375rem; // Alterado para unidade relativa

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Container de perfil comercial
export const CommercialProfileContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem; // Alterado para unidade relativa
  padding: 1rem; // Adicionado padding
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.5rem;
  }
`;

export const Permission = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #294d59;
  font-size: 1rem; // Alterado para unidade relativa
  display: flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.5rem; // Adicionado padding
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.2em;
    padding: 0.25rem;
  }
`;
export const ComercialProfiles = styled.div`
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 10vw; /* Ajuste conforme necessário */
  height: 10vw; /* Ajuste conforme necessário */
  max-width: 55px; /* Tamanho máximo */
  max-height: 55px; /* Tamanho máximo */
  margin-left: 1.5em;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 12vw;
    height: 12vw;
    max-width: 50px;
    max-height: 50px;
  }
`;

// Image within commercial profiles
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

// Section containing events
export const EventSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Container for events
export const EventContainer = styled.div`
  display: flex;
  justify-content: start;
  background-color: #f3f8fc;
  width: 100%;
  height: auto;
  gap: 1em;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 0.5em;
  }
`;

// Wrapper for event details
export const EventWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem; /* Ajuste conforme necessário */
`;

// Banner image for events
export const Banner = styled.img`
  max-width: 99%;
  min-width: 99%;
  min-height: 100%;
  max-height: 100%;
  border-radius: 5px;
  object-fit: cover;
  margin: 0;

  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

// Container for text
export const Txt = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 600px) {

  }
`;


export const TxtContainer = styled.div`
  width: 100%;
  height: auto;
  margin-left: 1em;
`;

// Name text
export const Name = styled.div`
  color: #424238;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5rem; /* Ajuste conforme necessário */

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// Date text
export const Date = styled.p`
  color: #afa5a3;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.9375rem; /* Ajuste conforme necessário */

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

// Public tag
export const Public = styled.p`
  width: auto;
  min-width: 120px;
  height: 35px;
  background-color: #92fea8;
  color: #298837;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1rem; /* Ajuste conforme necessário */

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

// Quantity of tickets
export const QntTicket = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #294d59;
  font-size: 0.9375rem; /* Ajuste conforme necessário */
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

// Container for quantity and permission
export const QntAndPermission = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4em; /* Ajuste conforme necessário */
  align-items: center;

  @media (max-width: 768px) {
    gap: 5.5em;
  }
`;

// Container for publish and delete options
export const PubAndDelContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 9.5em; /* Ajuste conforme necessário */


`;

// Delete text
export const Delete = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #ef4118;
  font-size: 1rem; /* Ajuste conforme necessário */
  font-weight: 500;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

// Permission text

// Texto de perfil comercial
export const CommercialProfileText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem; // Alterado para unidade relativa
  color: #11455d;
  margin-left: 1rem; // Alterado para unidade relativa

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-left: 0.5rem;
  }
`;
