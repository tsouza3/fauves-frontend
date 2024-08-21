import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../home/navbar';
import Rodape from "../rodape/rodape";
import { getEventById } from "../services/getEventsById";
import axios from "axios";

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

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventById(eventId, token);
        setNomeEvento(eventData.nomeEvento);
        setTickets(eventData.tickets);

        // Iterar sobre os tickets para buscar os dados de cobrança usando txid
        eventData.tickets.forEach(ticket => {
          ticket.txid.forEach(async (txid) => {
            try {
              const cobrancaData = await getCobrancaByTxid(txid, token);
              console.log(cobrancaData);  // Aqui você pode armazenar ou processar os dados da cobrança como necessário
            } catch (error) {
              console.error(`Erro ao buscar dados da cobrança para txid ${txid}:`, error);
            }
          });
        });
      } catch (error) {
        console.error("Erro ao buscar o evento:", error);
      }
    };

    fetchEventData();
  }, [eventId, token]);

  const getCobrancaByTxid = async (txid, token) => {
    const apiUrl = `https://pix.api.efipay.com.br/v2/cob/${txid}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(apiUrl, config);
    return response.data;
  };

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
                <Item>Receita</Item>
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
