import React, { useEffect, useState } from 'react';
import jsQR from 'jsqr';
import { getEventById } from '../services/getEventsById';
import { getUserProfile } from '../services/userDataService'; 

import { ModalContent, ModalWrapper, Wrapper, Container, Title, Close, SubmitButton, Text } from './ticketDetailsStyles';

export default function TicketDetails({ onClose }) {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [qrCodes, setQrCodes] = useState([]);
  const [eventName, setEventName] = useState('');
  const [userName, setUserName] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState(''); // Armazena a imagem QR Code em base64
  const [uniqueTicketId, setUniqueTicketId] = useState(''); // Armazena o uniqueTicketId
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getUserProfile({ token });
        setUserName(profileData.name); // Pega o nome do usuário logado
        const qrCodesData = profileData.QRCode || [];
        setQrCodes(qrCodesData);
        decodeQrCodes(qrCodesData);
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
        setError("Erro ao buscar os dados do perfil");
      }
    };

    fetchProfileData();
  }, [token]);

  const decodeQrCodes = async (qrCodesData) => {
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
            const url = decoded.data;
            const pathParts = new URL(url).pathname.split('/');
            const eventId = pathParts[2];
            const uniqueTicketId = pathParts[4]; // Supondo que o uniqueTicketId esteja na 4ª posição

            fetchEventName(eventId);
            setQrCodeImage(base64Image); // Armazena a imagem do QR Code
            setUniqueTicketId(uniqueTicketId); // Armazena o uniqueTicketId
          }
          resolve();
        };
      });
    }
  };

  const handleClose = () => {
    onClose(); 
  };

  const fetchEventName = async (eventId) => {
    try {
      const event = await getEventById(eventId);
      setEventName(event.nomeEvento);
    } catch (error) {
      console.error(`Erro ao buscar o nome do evento para ID ${eventId}:`, error);
      setError("Erro ao buscar o nome do evento");
    }
  };

  return (
    <ModalWrapper>
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
            <SubmitButton backgroundColor={'#2625d9'}>Transferir ingresso</SubmitButton>
            <SubmitButton backgroundColor={'#ccc'} color={'#4b4b4b'}>Cancelar ingresso</SubmitButton>
          </Wrapper>
        </Container>
      </ModalContent>
    </ModalWrapper>
  );
}
