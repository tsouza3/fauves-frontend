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
import { getUserDataById } from "../services/getUserDataById";
import  LocationLogo  from '../assets/icons/location2.svg'
import EditDescriptionModal from "./editDescriptionModal";
import { ptBR } from 'date-fns/locale';
import {
  EventProductor, 
  UserIcon,
  UserName,
  TitleText,
  LocationContainer,
  LocationImage,
  LocationText,
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
  DescriptionContainer,
  EditAndTitle,
  EditDescription,
  
} from "./editEventStyles";
import { AiOutlineTeam } from "react-icons/ai";
import { TbTransactionDollar, TbReportSearch, TbPigMoney, TbFilterDiscount } from "react-icons/tb";
import { IoAddCircle } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";

import Checkin from '../ticket/checkin'



// Função para formatar a data
const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "EEE, dd MMM - HH:mm", { locale: ptBR }).toUpperCase();
};

export default function EditEvent() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditDescriptionlOpen, setIsEditDescriptionOpen] = useState(false);
  const [isOpenCheckinModal, setIsOpenCheckinModal] = useState(false);

  const [isEditTicketModalOpen, setIsEditTicketModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [profileId, setProfileId] = useState(null);

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const event = await getEventById(eventId);
        setEventData(event);
        if (event.producaoEvento) {
          const userProfileData = await getUserDataById(event.producaoEvento);
          setUserData(userProfileData);
          setProfileId(event.producaoEvento);
        }
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

  const openEditDescription = () => {
    setIsEditDescriptionOpen(true);
  };

  const closeEditDescription = () => {
    setIsEditDescriptionOpen(false)
    setSelectedEvent(null);
  };

  const openCheckinModal = () => {
    setIsOpenCheckinModal(true);
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
          <TicketValidation onClick={openCheckinModal}>
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
        <TicketComponent />
        <EditAndTitle><TitleText>Descrição</TitleText><EditDescription onClick={openEditDescription}>Editar descrição</EditDescription>
</EditAndTitle>
{eventData && (
  <DescriptionContainer>
<p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', margin: '0' }}>
  {eventData.description}
</p>  </DescriptionContainer>
)}
        <Span></Span>
        <CreateTicketContainer to={`/selecttickettype/${eventId}`}>
          <CreateTicketText>
            <IoAddCircle size="50px" color="#7b919f" />
            Criar ingresso
          </CreateTicketText>
        </CreateTicketContainer>
        <TitleText>Local</TitleText>

        {(eventData && 

        <LocationContainer>
              <LocationImage src={LocationLogo} />
              <LocationText>{eventData.localDoEvento}</LocationText>
        
        </LocationContainer>

        
                      )}
<TitleText>Produtor</TitleText>
{userData && profileId && (
          <EventProductor>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/profile/${profileId}`}
              >
                <UserIcon
                  src={`https://fauvesapi.thiagosouzadev.com/api/users/${userData.profilePhoto}`}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`/profile/${profileId}`}
              >
                <UserName>{userData.nomeEmpresa}</UserName>
              </Link>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              to={`/profile/${profileId}`}
            >
              <FaGreaterThan style={{ marginRight: '2em' }} size='20px' color='#4b4b4b' />
            </Link>
          </EventProductor>
        )}
                        </Wrapper>


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
       {isEditDescriptionlOpen && (
        <EditDescriptionModal
          event={eventData}
          onClose={closeEditTicketModal}
          token={token}
        />
      )}
       {isOpenCheckinModal && (
        <Checkin
          event={eventData}
          token={token}
        />
      )}
    </>
  );
}
