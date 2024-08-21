import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../home/navbar";
import { getUserDataById } from "../services/getUserDataById";
import {
  Section,
  ProfileDiv,
  UserIcon,
  Title,
  EventsContainer,
  EventsWrapper,
  Name,
  User,
  NameAndUser,
  Container,
} from "./publicProfileStyles";
import GetEventsByProfile from "../events/getEventsByProfileId";
import Rodape from "../rodape/rodape";

export default function PublicProfile() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [error, setError] = useState(null);
  const { profileId } = useParams(); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getUserDataById(profileId);
        setUserData(profileData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [profileId, token]); 

  return (
    <Section>
      <Navbar />
      <ProfileDiv>
        <Container>
          {userData && (
            <>
              <UserIcon
                src={
                  userData.profilePhoto
                    ? `https://fauvesapi.thiagosouzadev.com/api/users/${userData.profilePhoto}`
                    : null
                }
                style={{
                  backgroundColor: userData.profilePhoto
                    ? "transparent"
                    : "#f3f8fc",
                }}
                alt="Perfil Comercial"
              />
              <NameAndUser>
                <Name>{userData.nomeEmpresa}</Name>
                <User>{userData.nomeUsuario}</User>
              </NameAndUser>
            </>
          )}
        </Container>
      </ProfileDiv>
      <EventsContainer>
        <EventsWrapper>
          <Title>Próximos eventos</Title>
          <GetEventsByProfile tipo="atuais" /> 
        </EventsWrapper>
        <EventsWrapper>
          <Title>Eventos anteriores</Title>
          <GetEventsByProfile tipo="anteriores" /> 
        </EventsWrapper>
      </EventsContainer>
      <Rodape />
    </Section>
  );
}
