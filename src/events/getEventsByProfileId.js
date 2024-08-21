import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  EventContainer,
  Wrapper,
  Banner,
  TextContainer,
  Text,
  SubText,
  TextWrapper,
  Location,
  EventSection,
} from "./getEventsByProfileIdStyles";
import { listarEventosPorData } from "../services/listarEventosPorData"; 

export default function GetEventsByProfile({ tipo }) {
  const { profileId } = useParams();
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Buscando eventos para profileId=${profileId}, tipo=${tipo}`); // Adicione este log
        const eventData = await listarEventosPorData(profileId, tipo, token);
        console.log('Eventos recebidos:', eventData); // Adicione este log
        setEvents(eventData);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error); // Adicione este log
        setError(error.message);
      }
    };

    fetchData();
  }, [profileId, tipo, token]);

  return (
    <EventSection>
      <EventContainer>
        <Wrapper>
          {events.length === 0 && <div></div>}
          {events.map((event) => (
            <TextContainer key={event.id}>
              <Banner
                src={`https://fauvesapi.thiagosouzadev.com/api/users/${event.capaEvento}`}
              />
              <TextWrapper>
                <Link
                  to={`/event/${event.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Text>{event.dataInicio}</Text>
                  <SubText>{event.nomeEvento}</SubText>
                  <Location>{event.localDoEvento}</Location>
                </Link>
              </TextWrapper>
            </TextContainer>
          ))}
        </Wrapper>
      </EventContainer>
      {error && <div></div>}
    </EventSection>
  );
}
