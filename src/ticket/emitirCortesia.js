import React, { useState, useEffect } from 'react';
import { Container, ModalContent, ModalWrapper, Close, InputContainer, Label, Input, NameEvent, Title, SubmitButton, Select } from './emitirCortesiaStyles';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/getEventsById';
import { emitirCortesia } from '../services/emitirCortesia';
import Loader from '../Loader/loader';
import { ErrorAlert } from '../events/error';
import { SuccessAlert } from '../events/success'; // Importar o SuccessAlert

export default function EmitirCortesia({ onClose, token }) {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Novo estado para a mensagem de sucesso

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        console.log("Event ID:", eventId);
        const event = await getEventById(eventId);
        console.log("Dados do evento:", event);
        setEventData(event);
      } catch (error) {
        console.error("Erro ao buscar os dados do evento:", error);
        setErrorMessage("Ocorreu um erro ao buscar os dados do evento.");
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage(null); // Limpar mensagem de erro anterior
    setSuccessMessage(null); // Limpar mensagem de sucesso anterior
    try {
      if (!email || !selectedTicket) {
        setErrorMessage("Por favor, preencha todos os campos.");
        return;
      }

      await emitirCortesia(email, eventId, selectedTicket, token);
      setSuccessMessage("Ingresso de cortesia enviado com sucesso!"); // Atualizar mensagem de sucesso
      setErrorMessage(null);
    } catch (error) {
      console.error("Erro ao enviar ingresso de cortesias");
      setErrorMessage("Ocorreu um erro ao enviar o ingresso.");
    } finally {
      setLoading(false);
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
            <SubmitButton onClick={handleSubmit} disabled={loading}>
              {loading ? <Loader /> : "Enviar cortesia"}
            </SubmitButton>
            {errorMessage && <div style={{marginLeft: '2em', marginTop: '0.5em', width: '90%', alignSelf: 'center', marginBottom: '2em' }}><ErrorAlert error={errorMessage} /></div>}
            {successMessage && <div style={{marginLeft: '2em', marginTop: '0.5em', width: '90%', alignSelf: 'center', marginBottom: '2em' }}><SuccessAlert message={successMessage} /></div>}
          </>
        ) : (
          <p></p>
        )}
      </ModalContent>
    </ModalWrapper>
  );
}
