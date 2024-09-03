import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/userDataService";
import { getEventById } from "../services/getEventsById";
import { Container, QrCode, QrContainer, EventName } from './qrCodeComponentStyles';
import TicketDetails from "./ticketDetails";

const QrCodeComponent = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [qrCodes, setQrCodes] = useState([]);
  const [eventNames, setEventNames] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [selectedTicket, setSelectedTicket] = useState(null); // Armazena o ticket selecionado

  const openEditModal = (ticket) => {
    setSelectedTicket(ticket); // Armazena o ticket selecionado
    setIsEditModalOpen(true);
  };
  
  const closeEditModal = () => {
    setSelectedTicket(null); // Limpa o ticket selecionado
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getUserProfile({ token });
        const qrCodesData = profileData.QRCode || [];

        // Mapeia os dados dos QR codes para incluir os dados completos
        setQrCodes(qrCodesData);
        fetchEventNames(qrCodesData);
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
      }
    };

    fetchProfileData();
  }, [token]);

  const fetchEventNames = async (qrCodesData) => {
    const eventIds = [...new Set(qrCodesData.map(qrCode => qrCode.eventId))];
    const names = {};

    for (const eventId of eventIds) {
      try {
        const event = await getEventById(eventId);
        names[eventId] = event.nomeEvento; 
      } catch (error) {
        console.error(`Erro ao buscar o nome do evento para ID ${eventId}:`, error);
      }
    }

    setEventNames(names);
  };

  return (
    <Container>
      {qrCodes.length > 0 ? (
        qrCodes.map((qrCode, index) => {
          const eventName = eventNames[qrCode.eventId];
          const ticket = { ...qrCode, eventName, index }; // Adiciona informação sobre o ticket

          return (
            <QrContainer key={index} onClick={() => openEditModal(ticket)}>
              {eventName && <EventName><h1>{eventName}</h1></EventName>}
              <QrCode src={qrCode.data} alt={`QR Code ${index + 1}`} />
            </QrContainer>
          );
        })
      ) : (
        <p></p>
      )}
      {isEditModalOpen && <TicketDetails onClose={closeEditModal} ticket={selectedTicket} />}
    </Container>
  );
};

export default QrCodeComponent;
