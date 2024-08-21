import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/getEventsById";
import { deleteTicket } from "../services/deleteTicket";
import SucessAnimation from "./sucessAnimation";
import TicketEdit from "./ticketEdit";

import {
  Container,
  AllContainer,
  Wrapper,
  Name,
  TextWrapper,
  Lote,
  TypeTicket,
  Price,
  TicketDescription,
  EditAndDelContainer,
  EditButton,
  TrashIcon,
  ModalContent,
  ModalWrapper,
  AnimationWrapper,
  TextContainer,
  Text,
  SubText,
  Close,
} from "./ticketComponentStyles";

const TicketComponent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventById(eventId);
        setEvent(eventData);
      } catch (error) {
        setError("Erro ao buscar o evento.");
      }
    };

    fetchEventData();
  }, [eventId]);

  const getTokenFromCookie = () => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    return cookieValue;
  };

  const openModal = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTicket(null);
    setIsModalOpen(false);
  };

  const handleDeleteTicket = async (ticketId) => {
    try {
      const token = getTokenFromCookie();

      if (!token) {
        throw new Error("Token não encontrado no cookie.");
      }

      await deleteTicket(token, eventId, ticketId);
      setEvent((prevEvent) => ({
        ...prevEvent,
        tickets: prevEvent.tickets.filter((ticket) => ticket._id !== ticketId),
      }));
      openModal(null);
    } catch (error) {
      console.error("Erro ao deletar o ticket:", error);
    }
  };

  const openEditModal = (ticket) => {
    setSelectedTicket(ticket);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedTicket(null);
    setEditModalOpen(false);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div></div>;
  }

  return (
    <Container>
      {event.tickets &&
        event.tickets.map((ticket) => (
          <Wrapper key={ticket._id}>
            <AllContainer>
              <TextWrapper>
                <Name>{ticket.nome}</Name>
                <Lote>{ticket.lote}</Lote>
                <TypeTicket>{ticket.tipoIngresso}</TypeTicket>
              </TextWrapper>
              <Price>{`R$ ${Number(ticket.price).toFixed(2)}`}</Price>
              <TicketDescription>
                <strong>Descrição:</strong> {ticket.descricao}
              </TicketDescription>
            </AllContainer>
            <EditAndDelContainer>
              <EditButton onClick={() => openEditModal(ticket)}>
                Editar
              </EditButton>
              <TrashIcon onClick={() => handleDeleteTicket(ticket._id)} />
            </EditAndDelContainer>
          </Wrapper>
        ))}

      {isModalOpen && (
        <ModalWrapper>
          <ModalContent>
            <Close size={"30px"} onClick={closeModal} />
            <AnimationWrapper>
              <TextContainer>
                <SucessAnimation />
                <Text>Ingresso excluído</Text>
                <SubText>
                  Seu ingresso foi excluído, mas você pode criar novos ingressos
                  para o seu evento.
                </SubText>
              </TextContainer>
            </AnimationWrapper>
          </ModalContent>
        </ModalWrapper>
      )}

      {editModalOpen && selectedTicket && (
        <TicketEdit eventId={eventId} ticketId={selectedTicket._id} />
      )}
    </Container>
  );
};

export default TicketComponent;
