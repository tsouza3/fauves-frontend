import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Title,
  Section,
  Container,
  Form,
  Label,
  Input,
  Span,
  SubmitButton,
  SubTitle,
  RadioButtonContainer,
  RadioInput,
  Select,
  Option,
  Wrapper,
  InputWrapper,
  PriceContainer,
  PriceText
} from "./createTicketStyles";
import { ErrorAlert } from '../events/error'
import Rodape from "../rodape/rodape";
import { createTicket } from "../services/CreateTicket";
import Navbar from "../home/navbar";
import { useNavigate } from "react-router-dom";
import Loader from '../Loader/loader'
export default function CreateTicket() {
  const { eventId } = useParams();

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [price, setPrice] = useState("");
  const [tax, setTax] = useState(0);
  const [priceWithTax, setPriceWithTax] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);


  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();


  const calculatePriceWithTax = (priceValue) => {
    const numericPrice = parseFloat(
      priceValue.replace(/[^\d.,]/g, "").replace(",", "."),
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

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const ticketData = {
      dataInicio: formData.get("dataInicio"),
      dataTermino: formData.get("dataTermino"),
      nome: formData.get("nome"),
      price: priceWithTax,  // Enviando o preço com a taxa
      quantidadeTotal: formData.get("quantidadeTotal"),
      tipoIngresso: formData.get("tipoIngresso"),
      descricao: formData.get("descricao"),
      limitePessoa: formData.get("limitePessoa"),
    };

    try {
      await createTicket(ticketData, eventId, token);
      navigate("/createticket/success");
    } catch (error) {
      setErrorMessage(error.message || "Erro ao criar evento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title>Ingresso pago</Title>
            <Label>Nome do ingresso</Label>
            <Span></Span>

            <Input type="text" name="nome" />
            <Span></Span>

            <Label>Preço</Label>
            <Span></Span>

            <Input
              width={"340px"}
              placeholder="R$ 99,99"
              type="text"
              name="price"
              value={`${price}`}
              onChange={handlePriceChange}

            />
            <Span></Span>

            <SubTitle>Vendas online</SubTitle>
            <RadioButtonContainer>
              <RadioInput
                type="radio"
                name="vendasOnline"
                value="permitir"
              ></RadioInput>
              <Label> Permitir vendas online </Label>

              <RadioInput
                type="radio"
                style={{ marginLeft: "3em" }}
                name="vendasOnline"
                value="produtorPaga"
              ></RadioInput>
              <Label> Taxa paga pelo produtor </Label>
            </RadioButtonContainer>
            <Span></Span>
            <Span></Span>

            <PriceContainer>
              <PriceText>
                Taxa: <strong>R$ {tax.toFixed(2)}</strong>
                <br />
                Comprador paga: <strong>R$ {priceWithTax.toFixed(2)}</strong>
                <br />
                Produtor recebe:{" "}
                <strong>R$ {(priceWithTax - tax).toFixed(2)}</strong> por
                ingresso
              </PriceText>
            </PriceContainer>
            <Span></Span>
            <Span></Span>

            <SubTitle>Mais opções</SubTitle>
            <RadioButtonContainer>
              <RadioInput
                type="radio"
                name="tipoIngresso"
                value="Inteira"
              ></RadioInput>
              <Label> Ingresso inteira </Label>

              <RadioInput
                type="radio"
                style={{ marginLeft: "3em" }}
                name="tipoIngresso"
                value="Meia"
              ></RadioInput>
              <Label> Ingresso meia </Label>
            </RadioButtonContainer>
            <Span></Span>
            <Span></Span>

            <Label> Lote </Label>
            <Span></Span>
            <Select width={"340px"} name="lote">
              <Option value="1º Lote">1º Lote</Option>
              <Option value="2º Lote">2º Lote</Option>
              <Option value="3º Lote">3º Lote</Option>
              <Option value="4º Lote">4º Lote</Option>
            </Select>
            <Span></Span>
            <Span></Span>

            <Wrapper>
              <InputWrapper>
                <Label>Qntd. total</Label>
                <Span></Span>
                <Input width={"340px"} type="text" name="quantidadeTotal" />
              </InputWrapper>

              <InputWrapper>
                <Label>Limite por pessoa</Label>
                <Span></Span>
                <Input width={"340px"} type="text" name="limitePessoa" />
              </InputWrapper>
            </Wrapper>
            <Wrapper>
              <InputWrapper>
                <Label>Início das vendas</Label>
                <Span></Span>
                <Input
                  width={"340px"}
                  type="text"
                  mask="**/**/**** ás **:**"
                  name="dataInicio"
                  placeholder="dd/mm/yyyy às hh:mm"
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Término das vendas</Label>
                <Span></Span>
                <Input
                  width={"340px"}
                  type="text"
                  name="dataTermino"
                  mask="**/**/**** ás **:**"
                  placeholder="dd/mm/yyyy às hh:mm"
                />
              </InputWrapper>
            </Wrapper>
            <InputWrapper>
              <Label>Descrição</Label>
              <Span></Span>
              <Input height={"150px"} type="text" name="descricao" />
            </InputWrapper>
            <Span></Span>
            <Span></Span>

            <SubmitButton> {loading ? <Loader /> : "Criar ingresso"}</SubmitButton>
            {errorMessage && <div style={{marginTop: '2em' }}><ErrorAlert error={'Erro ao criar ingresso'}/></div>}

          </Form>
        </Container>
        <Rodape />

      </Section>
    </>
  );
}
