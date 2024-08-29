import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getEventById } from "../services/getEventsById";
import { getUserDataById } from "../services/getUserDataById";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Rodape from "../rodape/rodape";
import { FaGreaterThan } from "react-icons/fa6";
import { DescriptionContent, EventDescription } from "./eventDetailsStyles";

import {
  Section,
  BlurContainer,
  EventImage,
  EventInformation,
  Text,
  SubText,
  TextWrapper,
  LocationText,
  LocationContainer,
  LocationImage,
  EventProductor,
  UserIcon,
  UserName,
  CreatorText,
  BlurredImage,
  DescriptionTitle
} from "./eventDetailsStyles";
import Navbar from "../home/navbar";
import LocationLogo from "../assets/icons/location2.svg";
import Cart from "../ticket/cart";

export default function EventDetails() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const event = await getEventById(eventId);
        setEventData(event);

        if (event.producaoEvento) {
          const userProfileData = await getUserDataById(event.producaoEvento);
          setUserData(userProfileData);
          setProfileId(event.producaoEvento);
        }
      } catch (error) {
        setError("Erro ao buscar o evento.");
      }
    };

    fetchEventData();
  }, [eventId]);

  // Função para formatar a data
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "EEE, dd MMM - HH'h'", { locale: ptBR }).toUpperCase();
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!eventData) {
    return <div></div>;
  }

  return (
    <>
      <Navbar />
      <Section>
        <BlurContainer>
          <BlurredImage
            src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`}
          ></BlurredImage>
        </BlurContainer>

        <EventImage
          src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`}
        />
        <EventInformation>
          <TextWrapper>
            <Text>{formatDate(eventData.dataInicio)}</Text>
            <SubText>{eventData.nomeEvento}</SubText>
          </TextWrapper>
        </EventInformation>

        <Cart />
        <span style={{ marginBottom: "1em" }}></span>
        <EventDescription>
          <DescriptionTitle>Detalhes do evento:</DescriptionTitle>
          <DescriptionContent><p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', margin: '0' }}>{eventData.description}</p>
</DescriptionContent>
        </EventDescription>
        <LocationContainer>
          <LocationImage src={LocationLogo} />
          <LocationText>{eventData.localDoEvento}</LocationText>
        </LocationContainer>
        <CreatorText>Produtor</CreatorText>
        {userData && profileId && (
          <EventProductor>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/profile/${profileId}`}
              >
                <UserIcon
                  src={`https://fauvesapi.thiagosouzadev.com/api/users/${userData.profilePhoto}`}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`/profile/${profileId}`}
              >
                <UserName>{userData.nomeEmpresa}</UserName>
              </Link>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              to={`/profile/${profileId}`}
            >
              <FaGreaterThan style={{ marginRight: '2em' }} size='20px' color='#4b4b4b' />
            </Link>
          </EventProductor>
        )}
        <Rodape />
      </Section>
    </>
  );
}
