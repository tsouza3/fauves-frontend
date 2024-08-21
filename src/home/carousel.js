import React, { useState, useEffect } from "react";
import { getEvents } from "../services/getEvents";
import {
  Container,
  LeftDiv,
  RightDiv,
  TextWrapper,
  SubTextWrapper,
  Location,
  Btn,
  BtnContainer,
  SkipBtnContainer,
  Img,
} from "./carouselStyles";
import Button from "./carouselButton";

export default function Carousel() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        const eventsData = await getEvents({ token });
        setEvents(eventsData);
      } catch (error) {
        console.error("Erro ao buscar os eventos", error);
      }
    }

    fetchEvents();
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleDetailsClick = () => {};

  return (
    <Container>
      <LeftDiv onClick={goToPrevSlide}>
        <Img
          src={`https://fauvesapi.thiagosouzadev.com/api/users/${events[currentIndex]?.capaEvento}`}
          alt="Evento"
        />
      </LeftDiv>

      <RightDiv>
        {events.map((event, index) => (
          <TextWrapper
            key={event.id}
            isVisible={index === currentIndex}
            style={{
              display: index === currentIndex ? "flex" : "none",
              flexDirection: "column",
            }}
          >
            {event.dataInicio}
            <SubTextWrapper>{event.nomeEvento}</SubTextWrapper>
            <Location>{event.localDoEvento}</Location>
            <BtnContainer>
              <Button
                to={`/event/${event._id}`}
                onClick={handleDetailsClick}
              ></Button>
              <SkipBtnContainer>
                <Btn onClick={goToPrevSlide}>&#10094;</Btn>
                <Btn style={{ marginLeft: "1em" }} onClick={goToNextSlide}>
                  &#10095;
                </Btn>
              </SkipBtnContainer>
            </BtnContainer>
          </TextWrapper>
        ))}
      </RightDiv>
    </Container>
  );
}
