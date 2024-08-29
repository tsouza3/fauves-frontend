import { SuccessAlert } from './success';
import { ErrorAlert } from './error';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateEvent } from "../services/updateEvent";
import { getEventById } from "../services/getEventsById";
import {
  ModalContent,
  ModalWrapper,
  Close,
  Container,
  NameEvent,
  Title,
  InputContainer,
  Input,
  Label,
  SubmitButton,
} from "./updateEventStyles";
import Loader from "../Loader/loader";

export default function EventEdit({ onClose }) {
  const { eventId } = useParams();

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventById(eventId);
        setEvent(eventData);
      } catch (error) {
        setError("Erro ao buscar o evento.");
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null); // Limpa mensagem anterior
    setError(null);   // Limpa erro anterior

    const formData = new URLSearchParams();

    formData.append("nomeEvento", e.target.nomeEvento.value);
    formData.append("dataInicio", e.target.dataInicio.value);
    formData.append("dataTermino", e.target.dataTermino.value);
    formData.append("localDoEvento", e.target.localDoEvento.value);

    console.log("Dados enviados:", {
      nomeEvento: e.target.nomeEvento.value,
      dataInicio: e.target.dataInicio.value,
      dataTermino: e.target.dataTermino.value,
      localDoEvento: e.target.localDoEvento.value,
    });

    try {
      await updateEvent(eventId, formData, token);
      setMessage({ type: "success", text: "Evento atualizado com sucesso!" });
      const updatedEventData = await getEventById(eventId);
      setEvent(updatedEventData);
    } catch (error) {
      setError(error.message || "Erro ao atualizar o evento.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose(); // Chamada para fechar o modal
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <Close size={"30px"} onClick={handleClose} />
        <Container>
          {event && <NameEvent>{event.nomeEvento}</NameEvent>}
          <Title>Editar evento</Title>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Label>Nome do evento</Label>
              <Input name="nomeEvento" defaultValue={event?.nomeEvento || ''} />
            </InputContainer>
            <InputContainer>
              <Label>Data de Início</Label>
              <Input name="dataInicio" defaultValue={event?.dataInicio || ''} placeholder="dd/mm/yyyy às hh:mm" />
            </InputContainer>
            <InputContainer>
              <Label>Data de Término</Label>
              <Input name="dataTermino" defaultValue={event?.dataTermino || ''} placeholder="dd/mm/yyyy às hh:mm" />
            </InputContainer>
            <InputContainer>
              <Label>Local do Evento</Label>
              <Input name="localDoEvento" defaultValue={event?.localDoEvento || ''} />
            </InputContainer>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? <Loader /> : "Salvar alterações"}
            </SubmitButton>

            {message && message.type === "success" && (
              <SuccessAlert style={{ width: '92%', marginTop: '1em' }}>
                {message.text}
              </SuccessAlert>
            )}
            {error && <ErrorAlert>{error}</ErrorAlert>}
          </form>
        </Container>
      </ModalContent>
    </ModalWrapper>
  );
}
