import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../home/navbar';
import Rodape from "../rodape/rodape";
import { getEventById } from "../services/getEventsById";
import { consultarTransacoes } from "../services/transactions";

import { 
  Section, 
  Container, 
  Wrapper, 
  EventName, 
  Title, 
  TextWrapper, 
  SubTitle,
  DataContainer, 
  DataWrapper, 
  ItensContainer, 
  Item, 
  FirstItem, 
  Data, 
  DataItem 
} from "./relatorioStyles";

export default function Relatorios() {
  const { eventId } = useParams(); 
  const [nomeEvento, setNomeEvento] = useState("");
  const [tickets, setTickets] = useState([]);
  const [totalPixReceita, setTotalPixReceita] = useState(0); // Estado para armazenar a receita total de Pix

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventById(eventId);
        setNomeEvento(eventData.nomeEvento);
        setTickets(eventData.tickets);

        // Consultar as transações pagas associadas ao eventId
        const cobrancasPagas = await consultarTransacoes(eventId);
        
        // Calcular a receita total de Pix
        const totalReceita = cobrancasPagas.reduce((acc, transacao) => {
          return acc + parseFloat(transacao.valor.original);
        }, 0);

        setTotalPixReceita(totalReceita.toFixed(2)); // Armazenar a receita total, formatada com 2 casas decimais
      } catch (error) {
        console.error("Erro ao buscar o evento ou as transações:", error);
      }
    };

    fetchEventData();
  }, [eventId]);

  return (
    <Section>
      <Navbar />
      <Container>
        <Wrapper>
          <TextWrapper>
            <EventName>{nomeEvento}</EventName>
            <Title>Relatórios</Title>
          </TextWrapper>
          <SubTitle>Tipos de ingresso</SubTitle>
          <DataContainer>
            <DataWrapper>
              <FirstItem>Tipo</FirstItem>
              <ItensContainer>
                <Item>Qtd.</Item>
              </ItensContainer>
              <ItensContainer>
                <Item>Receita</Item>
              </ItensContainer>
            </DataWrapper>
          </DataContainer>
          <span style={{marginTop: '1em'}}></span>
          <SubTitle>Formas de pagamento</SubTitle>
          <DataContainer>
            <DataWrapper>
              <Data>
                <FirstItem>Tipo</FirstItem>
                <span style={{marginTop: '1em'}}></span>
                <DataItem>Crédito</DataItem>
                <span style={{marginTop: '1em'}}></span>
                <DataItem>Pix</DataItem>
              </Data>
              <ItensContainer>
                <Item>Qtd.</Item>
              </ItensContainer>
              <ItensContainer>
                <Item>Receita</Item>
                <Item>R$ {totalPixReceita}</Item>
              </ItensContainer>
            </DataWrapper>
          </DataContainer>
          <span style={{marginTop: '1em'}}></span>
          <SubTitle>Origem</SubTitle>
          <DataContainer>
            <DataWrapper>
              <Data>
                <FirstItem>Tipo</FirstItem>
                <span style={{marginTop: '1em'}}></span>
                <DataItem>Site</DataItem>
                <span style={{marginTop: '1em'}}></span>
                <DataItem>APP</DataItem>
                <span style={{marginTop: '1em'}}></span>
                <DataItem>PDV</DataItem>
              </Data>
              <ItensContainer>
                <Item>Qtd.</Item>
              </ItensContainer>
              <ItensContainer>
                <Item>Receita</Item>
              </ItensContainer>
            </DataWrapper>
          </DataContainer>
        </Wrapper>
      </Container>
      <Rodape />
    </Section>
  );
}
