import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { GiTicket } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";
import Navbar from "../home/navbar";
import { buscarEventosUsuario } from "../services/buscarEventosUsuario";
import { getUserProfile } from "../services/userDataService";
import Rodape from "../rodape/rodape";
import QrCodeComponent from "../ticket/qrCodeComponent";
import {
  TicketContainer,
  CashContainer,
  TextContainer,
  Section,
  AllContainer,
  Container,
  Text,
  EventContainer,
  Banner,
  Txt,
  Date,
  Public,
  TxtContainer,
  Name,
  Delete,
  PubAndDelContainer,
  QntAndPermission,
  QntTicket,
  Permission,
  ComercialProfiles,
  EditProfileBtn,
  EventWrapper,
  EventSection,
  Img,
  ComercialContainer,
  Perfis,
  Title,
  CreateLink,
  CenterContainer,
} from "./userHomeStyles";
import { Profile } from "./profile";

export default function UserHome() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getUserProfile({ token });
        setUserData(profileData);

        const eventData = await buscarEventosUsuario(token);
        setEvents(eventData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [token]);

  const calcularQntIngressos = (event) => {
    return event.tickets.length;
  };

  return (
    <Section>
      <Navbar />
      <Profile />
      <CenterContainer>
      <AllContainer>
        <Container>
          <Text>
            O Seu perfil ainda está incompleto. Preencha os dados de{" "}
            <strong>Endereço.</strong>
          </Text>
          <EditProfileBtn to="/editprofile">Concluir cadastro</EditProfileBtn>
        </Container>

        <CashContainer>
          <TextContainer>FauvesCASH</TextContainer>
        </CashContainer>
        <Title>Meus perfis comerciais</Title>
        <ComercialContainer>
          <Perfis>
            <Link to="/createproductorprofile">
              <CreateLink>
                <MdAdd
                  style={{
                    height: "30px",
                    width: "30px",
                    color: "#ef4118",
                  }}
                ></MdAdd>
              </CreateLink>
            </Link>
            {userData &&
              userData.commercialProfiles &&
              userData.commercialProfiles.map((profile, index) => (
                <ComercialProfiles key={index}>
                  <Link
                    to={`/profile/${profile._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Img
                      src={
                        profile.profilePhoto
                          ? `https://fauvesapi.thiagosouzadev.com/api/users/${profile.profilePhoto}`
                          : null
                      }
                      style={{
                        backgroundColor: profile.profilePhoto
                          ? "transparent"
                          : "#f3f8fc",
                      }}
                    />
                  </Link>
                </ComercialProfiles>
              ))}
          </Perfis>
        </ComercialContainer>
        <Title>Meus ingressos</Title>
        <TicketContainer>

        <QrCodeComponent></QrCodeComponent>

        </TicketContainer>

        <Title>Próximos eventos</Title>
        
        <EventSection>
          <EventContainer>
            {events.map((event, index) => (
              <div key={event._id}>
                <EventWrapper>
                  <Banner
                    src={`https://fauvesapi.thiagosouzadev.com/api/users/${event.capaEvento}`}
                  ></Banner>
                  <Txt>
                    <PubAndDelContainer>
                      <Public>Publicado</Public>
                      <Delete>Excluir</Delete>
                    </PubAndDelContainer>

                    <Link
                      to={`/eventedit/${event._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <TxtContainer>
                        <Name>{event.nomeEvento}</Name>
                        <Date>{event.dataInicio}</Date>
                      </TxtContainer>
                    </Link>

                    <QntAndPermission>
                      <QntTicket>
                        <GiTicket
                          style={{ marginRight: "7px" }}
                          size="23px"
                          color="#d75d36"
                        />
                        {calcularQntIngressos(event)} ingressos{" "}
                      </QntTicket>
                      <Permission>
                        {" "}
                        <IoMdStar
                          style={{ marginRight: "7px" }}
                          size="23px"
                          color="#d75d36"
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          Administrador
                        </span>
                      </Permission>
                    </QntAndPermission>
                  </Txt>
                </EventWrapper>
              </div>
            ))}
          </EventContainer>
        </EventSection>
      </AllContainer>
      </CenterContainer>
    
      <Rodape />
    </Section>
  );
}
