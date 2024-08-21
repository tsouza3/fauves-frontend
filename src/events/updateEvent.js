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
  Message,
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

    const formData = new FormData(e.target);
    const eventData = {
      nomeEvento: formData.get("nomeEvento"),
      dataInicio: formData.get("dataInicio"),
      dataTermino: formData.get("dataTermino"),
      localDoEvento: formData.get("localDoEvento"),
      capaEvento: formData.get("capaEvento"),
    };

    try {
      await updateEvent(eventId, eventData, token);
      setMessage({ type: "success", text: "Evento atualizado com sucesso!" });
      const updatedEventData = await getEventById(eventId);
      setEvent(updatedEventData);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Erro ao atualizar o evento.",
      });
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
              <Label>Clique na imagem para enviar uma nova capa para seu evento</Label>
              <Input name="capaEvento" type="file" height={'240px'} />
            </InputContainer>
            <InputContainer>
              <Label>Nome do evento</Label>
              <Input name="nomeEvento"  />
            </InputContainer>
            <InputContainer>
              <Label>Data de Início</Label>
              <Input name="dataInicio" 
              mask="**/**/**** às **:**"
              placeholder="dd/mm/yyyy às hh:mm" />
            </InputContainer>
            <InputContainer>
              <Label>Data de Término</Label>
              <Input
              mask="**/**/**** às **:**"
              placeholder="dd/mm/yyyy às hh:mm"
                name="dataTermino"
              />
            </InputContainer>
            <InputContainer>
              <Label>Local do Evento</Label>
              <Input
                name="localDoEvento"
              />
            </InputContainer>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? <Loader /> : "Salvar alterações"}
            </SubmitButton>
          </form>
        </Container>
      </ModalContent>
    </ModalWrapper>
  );
}
