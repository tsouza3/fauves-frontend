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
                  <Text>{event.dataInicio}</Text>
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
