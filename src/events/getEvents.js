import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "./getEventsStyles";
import { getEvents } from "../services/getEvents";
import { format, parseISO, isToday, isTomorrow, isThisWeek, isThisMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function GetEvents() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [events, setEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0); // Estado para armazenar o total de eventos
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await getEvents({ token });
        setEvents(eventData);
        setTotalEvents(eventData.length); // Define o total de eventos
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [token]);

  // Função para formatar a data
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "EEE, dd MMM - HH'h'", { locale: ptBR }).toUpperCase();
  };

  return (
    <EventSection>
      <EventContainer>
        <Wrapper>
          {events.map((event) => (
            <TextContainer key={event._id}>
              <Banner
                src={`https://fauvesapi.thiagosouzadev.com/api/users/${event.capaEvento}`}
              ></Banner>
              <TextWrapper>
                <Link
                  to={`/event/${event._id}`}
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
    </EventSection>
  );
}
