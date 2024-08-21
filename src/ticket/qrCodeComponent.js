import React, { useEffect, useState } from "react";
import jsQR from "jsqr";
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
  const [decodedUrls, setDecodedUrls] = useState([]);
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

        setQrCodes(qrCodesData);
        decodeQrCodes(qrCodesData);
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
      }
    };

    fetchProfileData();
  }, [token]);

  const decodeQrCodes = async (qrCodesData) => {
    const urls = [];

    for (const base64Image of qrCodesData) {
      const img = new Image();
      img.src = base64Image;

      await new Promise((resolve) => {
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const decoded = jsQR(imageData.data, canvas.width, canvas.height);

          if (decoded) {
            urls.push(decoded.data);
          }
          resolve();
        };
      });
    }

    setDecodedUrls(urls);
    fetchEventNames(urls);
  };

  const fetchEventNames = async (urls) => {
    const eventIds = urls.map(url => new URL(url).pathname.split('/')[2]);
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
      {decodedUrls.length > 0 ? (
        decodedUrls.map((url, index) => {
          const eventId = new URL(url).pathname.split('/')[2];
          const eventName = eventNames[eventId];
          const ticket = { url, index }; // Adiciona informação sobre o ticket

          return (
            <QrContainer key={index} onClick={() => openEditModal(ticket)}>
              {eventName && <EventName><h1>{eventName}</h1></EventName>}
              <QrCode src={qrCodes[index]} alt={`QR Code ${index + 1}`} />
            </QrContainer>
          );
        })
      ) : (
        <p></p>
      )}
      {isEditModalOpen && <TicketDetails onClose={closeEditModal} />}
    </Container>
  );
};

export default QrCodeComponent;
