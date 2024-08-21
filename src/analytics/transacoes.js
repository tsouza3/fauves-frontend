import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useParams } from "react-router-dom";
import Navbar from "../home/navbar";
import {
  Section,
  Container,
  Title,
  SearchContainer,
  PlanilhaContainer,
  CenterContainer,
  Input,
  EventName,
  PlanilhaWrapper,
  PlanilhaItems,
  Items,
} from "./transacoesStyles";
import { consultarTransacoes } from "../services/transactions";
import { getEventById } from "../services/getEventsById";

export default function Transacoes() {
  const { eventId } = useParams();
  const [transacoes, setTransacoes] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventDataAndTransactions = async () => {
      try {
        const event = await getEventById(eventId);
        setEventData(event);

        const cobrancasPagas = await consultarTransacoes(eventId);
        const transacoesFormatadas = cobrancasPagas.map((cobranca) => ({
          txid: cobranca.txid,
          valor: cobranca.valor.original,
          horario: cobranca.pix[0]?.horario,
          evento: event.nomeEvento,
        }));
        setTransacoes(transacoesFormatadas);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (eventId) {
      fetchEventDataAndTransactions();
    }
  }, [eventId]);

  return (
    <Section>
      <Navbar />
      <CenterContainer>
        <Container>
          {eventData && <EventName>{eventData.nomeEvento}</EventName>}
          <Title>Transações</Title>
          <SearchContainer>
            <IoMdSearch
              style={{ marginLeft: "1em" }}
              size={"30px"}
              color={"#fa4a01"}
            />
            <Input placeholder="Pesquisar número, email ou nome do autor do pedido" />
          </SearchContainer>
          <PlanilhaContainer>
            <PlanilhaWrapper>
              <PlanilhaItems>
                <Items>Pedido</Items>
                <Items>Evento</Items>
                <Items>Comprador</Items>
                <Items>Data</Items>
                <Items>Total</Items>
              </PlanilhaItems>
              {!isLoading && transacoes.length > 0 ? (
                transacoes.map((transacao, index) => (
                  <PlanilhaItems key={index}>
                    <Items>{transacao.txid}</Items>
                    <Items>{transacao.evento}</Items>
                    <Items>{transacao.comprador}</Items>
                    <Items>{transacao.horario}</Items>
                    <Items>{transacao.valor}</Items>
                  </PlanilhaItems>
                ))
              ) : (
                <PlanilhaItems>
                  <Items></Items>
                </PlanilhaItems>
              )}
            </PlanilhaWrapper>
          </PlanilhaContainer>
        </Container>
      </CenterContainer>
    </Section>
  );
}
