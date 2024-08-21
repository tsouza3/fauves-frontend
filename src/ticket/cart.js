import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "../services/getEventsById";
import {
  Container,
  AllContainer,
  Wrapper,
  Name,
  TextWrapper,
  Lote,
  TypeTicket,
  Price,
  EditAndDelContainer,
  CartToCheckout,
  ItensContainer,
  QntTicket,
  PurchaseButton,
  PriceText,
  IoAddCircle,
  IoRemoveCircle
} from "./cartStyles";

const Cart = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [ticketQuantities, setTicketQuantities] = useState({});
  const [ticketId, setTicketId] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventById(eventId);
        setEvent(eventData);

        const initialQuantities = {};
        eventData.tickets.forEach((ticket) => {
          initialQuantities[ticket._id] = 1;
        });
        setTicketQuantities(initialQuantities);

        // Definindo o ticketId do primeiro ingresso como padrão
        if (eventData.tickets.length > 0) {
          setTicketId(eventData.tickets[0]._id);
        }
      } catch (error) {
        setError("Erro ao buscar o evento.");
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleAddTicket = (ticketId) => {
    setTicketQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ticketId]: prevQuantities[ticketId] + 1,
    }));
    setTicketId(ticketId); // Atualizando o ticketId com o ingresso adicionado
  };

  const handleRemoveTicket = (ticketId) => {
    setTicketQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ticketId]: Math.max(prevQuantities[ticketId] - 1, 0),
    }));
  };

  const calculateTotalPrice = () => {
    if (!event) return 0;
    return event.tickets.reduce((total, ticket) => {
      return total + (ticketQuantities[ticket._id] || 0) * ticket.price;
    }, 0);
  };

  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice().toFixed(2);
    const totalTickets = Object.values(ticketQuantities).reduce((a, b) => a + b, 0);

    // Verificar se todos os dados necessários estão presentes
    if (!eventId || totalTickets <= 0 || totalPrice <= 0) {
      return;
    }

    console.log("Dados enviados para o Checkout:", {
      eventId,
      ticketQuantities,
      totalTickets,
      totalPrice
    });

    navigate(`/checkout/${eventId}`, { state: { ticketId, ticketQuantities, totalTickets, totalPrice } });
  };

  if (!event) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      {event.tickets.map((ticket) => (
        <Wrapper key={ticket._id}>
          <AllContainer>
            <TextWrapper>
              <Name>{ticket.nome}</Name>
              <Lote>{ticket.lote}</Lote>
              <TypeTicket>{ticket.tipoIngresso}</TypeTicket>
            </TextWrapper>
            <Price>{`R$ ${Number(ticket.price).toFixed(2)}`}</Price>
          </AllContainer>
          <EditAndDelContainer>
            <IoRemoveCircle
              size="35px"
              color="#fa4a01"
              onClick={() => handleRemoveTicket(ticket._id)}
            />
            <p
              style={{
                alignSelf: "center",
                fontSize: "21px",
                marginBottom: "3.5em",
                color: "#4e5450",
              }}
            >
              {ticketQuantities[ticket._id]}
            </p>
            <IoAddCircle
              size="35px"
              color="#fa4a01"
              onClick={() => handleAddTicket(ticket._id)}
            />
          </EditAndDelContainer>
        </Wrapper>
      ))}
      <CartToCheckout>
        <ItensContainer>
          <QntTicket>
            {Object.values(ticketQuantities).reduce((a, b) => a + b, 0)} ingresso(s) por
            <PriceText>R$ {calculateTotalPrice().toFixed(2)}</PriceText>
          </QntTicket>
          <PurchaseButton onClick={handleCheckout}>Comprar</PurchaseButton>
        </ItensContainer>
      </CartToCheckout>
    </Container>
  );
};

export default Cart;
