import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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

// Função para formatar a data
const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "EEE, dd MMM - HH'h'", { locale: ptBR }).toUpperCase();
};

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
          {events.length === 0 && <div>Nenhum evento encontrado.</div>}
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
                  <Text>{formatDate(event.dataInicio)}</Text>
                  <SubText>{event.nomeEvento}</SubText>
                  <Location>{event.localDoEvento}</Location>
                </Link>
              </TextWrapper>
            </TextContainer>
          ))}
        </Wrapper>
      </EventContainer>
      {error && <div> </div>}
    </EventSection>
  );
}
