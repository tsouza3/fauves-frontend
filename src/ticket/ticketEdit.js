import React, { useEffect, useState } from "react";
import { updateTicket } from "../services/updateTicket";
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
  InputWrapper,
  Select,
  Option,
  Text,
  SubmitButton,
  Message,
} from "./ticketEditStyles";
import Loader from "../Loader/loader";

export default function TicketEdit({ eventId, ticketId }) {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [price, setPrice] = useState("");
  const [tax, setTax] = useState(0);
  const [priceWithTax, setPriceWithTax] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // Estado para controlar se o modal está aberto

  const calculatePriceWithTax = (priceValue) => {
    const numericPrice = parseFloat(
      priceValue.replace(/[^\d.,]/g, "").replace(",", ".")
    );
    if (!isNaN(numericPrice)) {
      const calculatedTax = numericPrice * 0.15;
      const totalPriceWithTax = numericPrice + calculatedTax;
      setTax(calculatedTax);
      setPriceWithTax(totalPriceWithTax);
    }
  };

  const handlePriceChange = (event) => {
    const inputValue = event.target.value;
    setPrice(inputValue);
    calculatePriceWithTax(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const ticketData = {
      dataInicio: formData.get("dataInicio"),
      dataTermino: formData.get("dataTermino"),
      nome: formData.get("nome"),
      price: formData.get("price"),
      lote: formData.get("lote"),
      quantidadeTotal: formData.get("quantidadeTotal"),
      tipoIngresso: formData.get("tipoIngresso"),
      descricao: formData.get("descricao"),
      limitePessoa: formData.get("limitePessoa"),
    };

    try {
      await updateTicket(token, eventId, ticketId, ticketData);
      setMessage({ type: "success", text: "Ticket atualizado com sucesso!" });
      handleClose(); // Fechar o modal após a atualização bem-sucedida
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false); // Define isOpen como false para fechar o modal
  };

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

  if (!isOpen) {
    return null; // Retorna null se o modal não estiver aberto
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <Close size={"30px"} onClick={handleClose} /> {/* Fecha o modal ao clicar */}
        <Container>
          {event && <NameEvent>{event.nomeEvento}</NameEvent>}
          <Title>Editar ingresso</Title>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Label>Nome do ingresso</Label>
              <Input name="nome" />
            </InputContainer>
            <InputContainer>
              <Label>Preço</Label>
              <Input
                width={"41.5%"}
                name="price"
                value={price}
                onChange={handlePriceChange}
              />
            </InputContainer>
            <Text>
              Seu cliente pagará <strong>R$ {priceWithTax.toFixed(2)}</strong> e
              você receberá <strong>R$ {price || "0"}</strong>
            </Text>
            <InputContainer>
              <Label>Tipo do ingresso</Label>
              <Select name="tipoIngresso" width={"42.5%"}>
                <Option value="Inteira">Inteira</Option>
                <Option value="Meia">Meia</Option>
              </Select>
            </InputContainer>
            <InputWrapper>
              <InputContainer>
                <Label>Qntd. de ingressos</Label>
                <Input name="quantidadeTotal" width={"82.5%"} />
              </InputContainer>
              <InputContainer>
                <Label>Limite por pessoa</Label>
                <Input name="limitePessoa" width={"82.5%"} />
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <InputContainer>
                <Label>Inicio das vendas</Label>
                <Input
                  width={"82.5%"}
                  mask={"**/**/**** ás **:**"}
                  placeholder="__/__/____ ás __:__"
                  name="dataInicio"
                />
              </InputContainer>
              <InputContainer>
                <Label>Fim das vendas</Label>
                <Input
                  width={"82.5%"}
                  mask={"**/**/**** ás **:**"}
                  placeholder="__/__/____ ás __:__"
                  name="dataTermino"
                />
              </InputContainer>
            </InputWrapper>
            <InputContainer>
              <Label>Lote</Label>
              <Select name="lote" width={"91%"}>
                <Option value="1º Lote">1º Lote</Option>
                <Option value="2º Lote">2º Lote</Option>
                <Option value="3º Lote">3º Lote</Option>
                <Option value="4º Lote">4º Lote</Option>
              </Select>
            </InputContainer>
            <InputWrapper>
              <InputContainer>
                <Label>Descrição</Label>
                <Input
                  name="descricao"
                  width={"91%"}
                  height={"100px"}
                  type="text"
                />
              </InputContainer>
            </InputWrapper>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? <Loader /> : "Salvar alterações"}
            </SubmitButton>
          </form>
        </Container>
      </ModalContent>
    </ModalWrapper>
  );
}
