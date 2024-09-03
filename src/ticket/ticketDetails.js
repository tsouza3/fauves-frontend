import React, { useEffect, useState } from 'react';
import { getEventById } from '../services/getEventsById';
import { getUserProfile } from '../services/userDataService'; 
import TicketTransfer from './ticketTransfer';
import { ModalContent, ModalWrapper, Wrapper, Container, Title, Close, SubmitButton, Text } from './ticketDetailsStyles';

export default function TicketDetails({ onClose, ticket }) {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [eventName, setEventName] = useState('');
  const [userName, setUserName] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState(''); // Armazena a imagem QR Code em base64
  const [uniqueTicketId, setUniqueTicketId] = useState(''); // Armazena o uniqueTicketId
  const [error, setError] = useState(null);
  const [isTransferVisible, setIsTransferVisible] = useState(false); // Controle de visibilidade do TransferTicket
  const [ticketId, setTicketId] = useState(''); // Armazena o uniqueTicketId


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getUserProfile({ token });
        setUserName(profileData.name); // Pega o nome do usuário logado
        if (ticket) {
          setQrCodeImage(ticket.data);
          setTicketId(ticket.ticketId); // Armazena o uniqueTicketId
          setUniqueTicketId(ticket.uuid); // Armazena o uniqueTicketId
          fetchEventName(ticket.eventId); // Pega o nome do evento
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
        setError("Erro ao buscar os dados do perfil");
      }
    };

    fetchProfileData();
  }, [token, ticket]);

  const fetchEventName = async (eventId) => {
    try {
      const event = await getEventById(eventId);
      setEventName(event.nomeEvento);
    } catch (error) {
      console.error(`Erro ao buscar o nome do evento para ID ${eventId}:`, error);
      setError("Erro ao buscar o nome do evento");
    }
  };

  const handleClose = () => {
    if (isTransferVisible) {
      setIsTransferVisible(false); // Fecha o TransferTicket primeiro
    } else {
      onClose();
    }
  };

  const handleTransferClick = () => {
    setIsTransferVisible(true); // Abre o TransferTicket
  };

  return (
    <ModalWrapper>
      {isTransferVisible ? (
        <TicketTransfer onClose={handleClose} uniqueTicketId={uniqueTicketId} ticketId={ticketId}/> 
      ) : (
        <ModalContent>
          <Close size={"30px"} onClick={handleClose} />
          <Container>
            <Wrapper>
              <div>
                <div>
                  <Text>Evento</Text>
                  <Title>{eventName}</Title>
                </div>
                <div>
                  <Text>Participante</Text>
                  <Title>{userName}</Title>
                </div>
                <div>
                  <Text>Código do ingresso</Text>
                  <Title>{uniqueTicketId}</Title> {/* Exibe o uniqueTicketId */}
                </div>
                {qrCodeImage && (
                  <div>
                    <img src={qrCodeImage} alt="QR Code" style={{ maxWidth: '100%', marginLeft: '-0.9em' }} />
                  </div>
                )}
              </div>

              <SubmitButton>Salvar ingresso</SubmitButton>
              <SubmitButton backgroundColor={'#2625d9'} onClick={handleTransferClick}>
                Transferir ingresso
              </SubmitButton>
              <SubmitButton backgroundColor={'#ccc'} color={'#4b4b4b'}>Cancelar ingresso</SubmitButton>
            </Wrapper>
          </Container>
        </ModalContent>
      )}
    </ModalWrapper>
  );
}
