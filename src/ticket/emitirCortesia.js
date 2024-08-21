import React, { useState, useEffect } from 'react';
import { Container, ModalContent, ModalWrapper, Close, InputContainer, Label, Input, NameEvent, Title, SubmitButton, Select } from './emitirCortesiaStyles';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/getEventsById';
import { emitirCortesia } from '../services/emitirCortesia';
import Loader from '../Loader/loader';

export default function EmitirCortesia({ onClose, token }) {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);  // Adicionado estado de carregamento
  const [errorMessage, setErrorMessage] = useState(null);  // Adicionado estado de erro

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        console.log("Event ID:", eventId); // Log do eventId
        const event = await getEventById(eventId);
        console.log("Dados do evento:", event); // Log dos dados do evento
        setEventData(event);
      } catch (error) {
        console.error("Erro ao buscar os dados do evento:", error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async () => {
    setLoading(true);  // Ativar estado de carregamento
    try {
      if (!email || !selectedTicket) {
        alert("Por favor, preencha todos os campos.");
        setLoading(false);
        return;
      }

      await emitirCortesia(email, eventId, selectedTicket, token);
      alert("Ingresso de cortesia enviado com sucesso!");
      onClose();
    } catch (error) {
      console.error("Erro ao enviar ingresso de cortesia:", error);
      setErrorMessage("Ocorreu um erro ao enviar o ingresso.");  // Definir mensagem de erro
    } finally {
      setLoading(false);  // Desativar estado de carregamento
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <Close size={"30px"} onClick={handleClose} />
        {eventData ? (
          <>
            <NameEvent>{eventData.nomeEvento}</NameEvent>
            <Title>Emitir cortesia</Title>

            <Container>
              <InputContainer>
                <Label>Ingresso</Label>
                <Select value={selectedTicket} onChange={(e) => setSelectedTicket(e.target.value)}>
                  <option value="">Selecione um ingresso</option>
                  {eventData.tickets && eventData.tickets.map(ticket => (
                    <option key={ticket._id} value={ticket._id}>{ticket.nome}</option>
                  ))}
                </Select>
              </InputContainer>
              <InputContainer>
                <Label>Email</Label>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
            </Container>
            <SubmitButton onClick={handleSubmit}>
              {loading ? <Loader /> : "Enviar cortesia"}
            </SubmitButton>
          </>
        ) : (
          <p></p> 
        )}
      </ModalContent>
    </ModalWrapper>
  );
}
