import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Section,
  TextContainer,
  Option,
  Img,
  Text,
  Container,
} from "./selectEventTypeStyles";

import Ticket from "../assets/icons/ticket.svg";
import FreeTicket from "../assets/icons/freeticket.svg";
import Rodape from "../rodape/rodape";

import Navbar from "../home/navbar";

const ComponenteSelecao = () => {
  const [botaoSelecionado, setBotaoSelecionado] = useState(null);
  const navigate = useNavigate();

  const selecionarBotao = (botao) => {
    setBotaoSelecionado(botao);
  };

  const { eventId } = useParams();

  if (botaoSelecionado === 1) {
    navigate(`/createticket/${eventId}`);
  } else if (botaoSelecionado === 2) {
    navigate(`"/createonlineevent/${eventId}`);
  }

  return (
    <>
      <Navbar />

      <Section>
        <TextContainer>Qual o tipo de ingresso?</TextContainer>
        <Container>
          <Option onClick={() => selecionarBotao(1)}>
            <Img src={Ticket} />
            <Text>Ingresso pago</Text>
          </Option>
          <Option onClick={() => selecionarBotao(2)}>
            <Img src={FreeTicket} />
            <Text>Gratuito / Lista</Text>
          </Option>
        </Container>
        <Rodape />
      </Section>
    </>
  );
};

export default ComponenteSelecao;
