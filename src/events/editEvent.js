import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Navbar from "../home/navbar";
import Rodape from "../rodape/rodape";
import EmitirCortesia from "../ticket/emitirCortesia";
import UpdateEventModal from "./updateEvent";
import TicketComponent from "../ticket/ticketComponent";
import { getEventById } from "../services/getEventsById";
import { deleteEvent } from "../services/deleteEvents";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  ImageContainer,
  Section,
  SubContainer,
  Public,
  PubAndDelContainer,
  Delete,
  Span,
  Name,
  Date,
  TicketValidation,
  Container,
  Txt,
  SubTxt,
  Title,
  Wrapper,
  OptionsContainer,
  Options,
  CreateTicketContainer,
  CreateTicketText,
  DeleteAndEdit,
  Edit,
} from "./editEventStyles";
import { AiOutlineTeam } from "react-icons/ai";
import { TbTransactionDollar, TbReportSearch, TbPigMoney, TbFilterDiscount } from "react-icons/tb";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";

// Função para formatar a data
const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "EEE, dd MMM - HH:mm", { locale: ptBR }).toUpperCase();
};

export default function EditEvent() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditTicketModalOpen, setIsEditTicketModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useLocation();
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const event = await getEventById(eventId);
        setEventData(event);
      } catch (error) {
        console.error("Erro ao buscar os dados do evento:", error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(token, eventId);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao excluir o evento:", error);
    }
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEvent(null);
  };

  const openEditTicketModal = () => {
    setIsEditTicketModalOpen(true);
  };

  const closeEditTicketModal = () => {
    setIsEditTicketModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Navbar />
      <Section>
        {eventData && (
          <ImageContainer
            src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`}
            alt={eventData.nomeEvento}
          />
        )}

        <SubContainer>
          <PubAndDelContainer>
            <Public>Publicado</Public>
            <DeleteAndEdit>
              <Edit onClick={openEditModal}>Editar |</Edit>
              <Delete onClick={handleDeleteEvent}>Excluir evento</Delete>
            </DeleteAndEdit>
          </PubAndDelContainer>
          {eventData && (
            <div>
              <Name>{eventData.nomeEvento}</Name>
              <Date>{formatDate(eventData.dataInicio)}</Date>
            </div>
          )}
        </SubContainer>
        <Container>
          <TicketValidation>
            <Txt>Check-in</Txt>
            <SubTxt>
              Acesse o leitor de QR Code para validar os ingressos.
            </SubTxt>
          </TicketValidation>
          <TicketValidation>
            <Txt>PDV</Txt>
            <SubTxt>Venda ingressos com seu próprio meio de pagamento.</SubTxt>
          </TicketValidation>
        </Container>
        <Wrapper>
          <Title>Geral</Title>
          <OptionsContainer>
            <Link to={`/team/${eventId}`} style={{ textDecoration: 'none' }}>
              <Options>
                <AiOutlineTeam size="40px" color="#7b919f" />
                Equipe
                <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
              </Options>
            </Link>

            <hr color="#ccc" />
            <Link to={`/transactions/${eventId}`} style={{ textDecoration: 'none' }}>
              <Options>
                <TbTransactionDollar size="40px" color="#7b919f" />
                Transações
                <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
              </Options>
            </Link>
            <hr color="#ccc" />
            <Link to={`/reports/${eventId}`} style={{ textDecoration: 'none' }}>
              <Options>
                <TbReportSearch size="40px" color="#7b919f" />
                Relatórios
                <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
              </Options>
            </Link>

            <hr color="#ccc" />
            <Link to={`/financial/${eventId}`} style={{ textDecoration: 'none' }}>
              <Options>
                <TbPigMoney size="40px" color="#7b919f" />
                Financeiro
                <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
              </Options>
            </Link>
          </OptionsContainer>
        </Wrapper>
        <Wrapper>
          <Title>Ingressos</Title>
          <OptionsContainer>
            <Link to={`/participants/${eventId}`} style={{ textDecoration: 'none' }}>
              <Options>
                <RiTeamLine size="40px" color="#7b919f" />
                Participantes
                <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
              </Options>
            </Link>
            <hr color="#ccc" />
            <Link to={`/discounts/${eventId}`} style={{ textDecoration: 'none' }}>
              <Options>
                <TbFilterDiscount size="40px" color="#7b919f" />
                Cupons de desconto
                <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
              </Options>
            </Link>
            <hr color="#ccc" />
            <Options onClick={openEditTicketModal}>
              <BiSolidDiscount size="40px" color="#7b919f" />
              Emitir cortesia
              <FaGreaterThan style={{ marginRight: '1em', marginLeft: 'auto' }} size="19px" color="#7b919f" />
            </Options>
          </OptionsContainer>
        </Wrapper>
        <TicketComponent />
        <Span></Span>
        <CreateTicketContainer to={`/selecttickettype/${eventId}`}>
          <CreateTicketText>
            <IoAddCircle size="50px" color="#7b919f" />
            Criar ingresso
          </CreateTicketText>
        </CreateTicketContainer>
        <Rodape />
      </Section>
      {isEditModalOpen && (
        <UpdateEventModal
          event={eventData}
          onClose={closeEditModal}
          token={token}
        />
      )}
      {isEditTicketModalOpen && (
        <EmitirCortesia
          event={eventData}
          onClose={closeEditTicketModal}
          token={token}
        />
      )}
    </>
  );
}
