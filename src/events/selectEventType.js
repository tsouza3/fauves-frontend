import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Section,
  TextContainer,
  Option,
  Img,
  Text,
  Container,
} from "./selectEventTypeStyles";
import ContaBancaria from "../assets/icons/contabancaria.svg";
import Transferencia from "../assets/icons/transferencia.svg";
import Navbar from "../home/navbar";
import Rodape from "../rodape/rodape";

const ComponenteSelecao = () => {
  const [botaoSelecionado, setBotaoSelecionado] = useState(null);
  const navigate = useNavigate();

  const selecionarBotao = (botao) => {
    setBotaoSelecionado(botao);
  };

  if (botaoSelecionado === 1) {
    navigate("/createevent");
  } else if (botaoSelecionado === 2) {
    navigate("/createonlineevent");
  }

  return (
    <>
      <Navbar />

      <Section>
        <TextContainer>Qual o tipo de evento?</TextContainer>
        <Container>
          <Option onClick={() => selecionarBotao(1)}>
            <Img src={ContaBancaria} />
            <Text>Evento presencial</Text>
          </Option>
          <Option onClick={() => selecionarBotao(2)}>
            <Img src={Transferencia} />
            <Text>Evento online</Text>
          </Option>
        </Container>
        <Rodape/>
      </Section>
    </>
  );
};

export default ComponenteSelecao;
