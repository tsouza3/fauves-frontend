import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Navbar from "../home/navbar";
import Rodape from "../rodape/rodape";
import EmitirCortesia from "../ticket/emitirCortesia";
import { getEventById } from "../services/getEventsById";
import { deleteEvent } from "../services/deleteEvents";
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
import TicketComponent from "../ticket/ticketComponent";
import UpdateEventModal from "./updateEvent";
import { AiOutlineTeam } from "react-icons/ai";
import { TbTransactionDollar } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { TbFilterDiscount } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";

export default function EditEvent() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Modal de edição
  const [isEditTicketModalOpen, setIsEditTicketModalOpen] = useState(false); // Modal de edição

  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useLocation(); // Obtenha a localização atual

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

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEvent(null);
  };

  const openEditTicketModal = (event) => {
    setSelectedEvent(event);
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
          ></ImageContainer>
        )}

        <SubContainer>
          <PubAndDelContainer>
            <Public>Publicado</Public>
            <DeleteAndEdit>
              <Edit onClick={() => openEditModal(eventData)}>Editar |</Edit>
              <Delete onClick={handleDeleteEvent} style={{marginLeft: '3px'}}> Excluir evento</Delete>
            </DeleteAndEdit>
          </PubAndDelContainer>
          {eventData && (
            <div>
              <Name>{eventData.nomeEvento}</Name>
              <Date>{eventData.dataInicio}</Date>
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
          <Link style={{textDecoration: 'none'}} to={`/team/${eventId}`}>            

            <Options>
              <AiOutlineTeam size="40px" color="#7b919f" />
              Equipe
              <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />
            </Options>
            </Link>

            <hr color="#ccc" />
            <Link style={{textDecoration: 'none'}} to={`/transactions/${eventId}`}>            

            <Options>
              <TbTransactionDollar size="40px" color="#7b919f" />
              Transações
              <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />

            </Options>
            </Link>
            <hr color="#ccc" />
            <Link style={{textDecoration: 'none'}} to={`/reports/${eventId}`}>     
            
            <Options>
              <TbReportSearch size="40px" color="#7b919f" />
              Relatórios
              <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />

            </Options>       </Link>

            <hr color="#ccc" />
            <Link style={{textDecoration: 'none'}} to={`/financial/${eventId}`}>            

            <Options>
              <TbPigMoney size="40px" color="#7b919f" />
              Financeiro
              <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />

            </Options>
            </Link>
          </OptionsContainer>
        </Wrapper>
        <Wrapper>
          <Title>Ingressos</Title>
          <OptionsContainer>
            <Options>
              
              <RiTeamLine size="40px" color="#7b919f" />
              Participantes
             <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />

            </Options>
            <hr color="#ccc" />
            <Options>
              <TbFilterDiscount size="40px" color="#7b919f" />
              Cupons de desconto
              <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />

            </Options>
            <hr color="#ccc" />
            <Options onClick={() => openEditTicketModal(eventData)}>
              <BiSolidDiscount size="40px" color="#7b919f" />
              Emitir cortesia
              <FaGreaterThan style={{marginRight: '1em', alignSelf: 'center', marginLeft: 'auto'}} size='19px' color='#7b919f' />

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
          event={selectedEvent}
          onClose={closeEditModal}
          token={token}
        />
      )}
      {isEditTicketModalOpen && (
        <EmitirCortesia
          event={selectedEvent}
          onClose={closeEditTicketModal}
          token={token}
        />
      )}
    </>
  );
}
