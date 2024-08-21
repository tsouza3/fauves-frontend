import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getEventById } from "../services/getEventsById";
import { getUserProfile } from "../services/userDataService";
import { FaRegCreditCard } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import { getPix } from "../services/paymentService";
import QRCode from "qrcode.react";
import axios from "axios";

import {
  Section,
  BlurContainer,
  UserContainer,
  EventImage,
  UserText,
  Date,
  Name,
  FormContainer,
  FormWrapper,
  Title,
  EventOwner,
  UserIcon,
  UserName,
  InputWrapper,
  InputContainer,
  Label,
  Input,
  OptionsContainer,
  Option,
  OptionText,
  PixWrapper,
  QrcodeWrapper,
  PixText,
  BlurredImage,
  SubmitButton
} from "./checkoutStyles";

const Checkout = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { totalPrice, totalTickets, ticketId} = location.state;

  const [eventData, setEventData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [qrCode, setQRCode] = useState(null);
  const [pixCopiaCola, setPixCopiaCola] = useState(null);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const [txid, setTxid] = useState(null);

  const CheckPaymentStatus = () => {
    const { txid } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkPaymentStatus = async () => {
            try {
                const response = await axios.get(`/verificar-pagamento/${txid}`);
                if (response.data.status === 'sucesso') {
                    navigate('/checkout/success'); 
                }
            } catch (error) {
                console.error('Erro ao verificar status do pagamento:', error);
                setError('Erro ao verificar o status do pagamento.');
            }
        };

        const interval = setInterval(() => {
            checkPaymentStatus();
        }, 5000); 

        return () => clearInterval(interval);
    }, [txid, navigate]);

    if (error) {
        return <div>{error}</div>;
    }

    return <div></div>;
};



  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const event = await getEventById(eventId);
        setEventData(event);
      } catch (error) {
        console.error("Erro ao buscar os dados do evento:", error);
        setError("Erro ao buscar os dados do evento.");
      }
    };

    fetchEventData();
  }, [eventId]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        if (token) {
          const userData = await getUserProfile({ token });
          setName(userData.name);
          setUserId(userData.userId);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
        setError("Erro ao buscar os dados do perfil.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleGetPix = async () => {
    try {
      if (!totalPrice || !eventId || !userId || !ticketId || !totalTickets) {
        throw new Error("Todos os campos obrigatórios devem estar preenchidos.");
      }
  
      const pixData = await getPix({ price: totalPrice, eventId, userId, quantidadeTickets: totalTickets, ticketId });
      console.log("Dados do PIX:", pixData); 
      setQRCode(pixData.qrCode);
      setPixCopiaCola(pixData.pixCopiaCola);
      setTxid(pixData.txid);
      console.log(txid)
      setTicketGenerated(true);
    } catch (error) {
      console.error("Erro ao buscar PIX:", error.message);
      setError("Erro ao buscar o PIX. Verifique o valor e tente novamente.");
    }
  };
  

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === "pix") {
      handleGetPix();
    }
  };

  const copyToClipboard = () => {
    if (pixCopiaCola) {
      navigator.clipboard.writeText(pixCopiaCola);
      alert("Código PIX copiado para a área de transferência!");
    }
  };

  

  if (!eventData) {
    return <div></div>;
  }

  return (
    <Section>
      <BlurContainer>
        <BlurredImage src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`} />
        <UserContainer>
          {eventData && (
            <>
              <EventImage src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`} />
              <UserText>
                <Date>{eventData.dataInicio}</Date>
                <Name>{eventData.nomeEvento}</Name>
              </UserText>
            </>
          )}
        </UserContainer>
      </BlurContainer>

      <FormContainer>
        <FormWrapper>
          {paymentMethod === "creditCard" && (
            <>
              <Title>DADOS DO COMPRADOR</Title>
              <EventOwner>
                <UserIcon />
                <UserName>{name}</UserName>
              </EventOwner>
              <InputWrapper>
                <InputContainer>
                  <Label>CPF</Label>
                  <Input mask="999.999.999-99" type="text" placeholder="000.000.000-00" width="100%" />
                </InputContainer>
                <InputContainer>
                  <Label>Data de nasc.</Label>
                  <Input mask="99/99/9999" type="text" placeholder="__/__/____" width="100%" />
                </InputContainer>
              </InputWrapper>
              <Title>FORMA DE PAGAMENTO</Title>
              <OptionsContainer>
                <Option onClick={() => handlePaymentMethodChange("creditCard")} selected={paymentMethod === "creditCard"} width={"30%"} minWidth={"60%;"}>
                  <FaRegCreditCard size="20px" color="#4b4b4b" />
                  <OptionText>CARTÃO DE CRÉDITO</OptionText>
                </Option>
                <Option onClick={() => handlePaymentMethodChange("pix")} selected={paymentMethod === "pix"} width={"15%"} minWidth={"30%;"}>
                  <SiPix size="20px" color="#4b4b4b" />
                  <OptionText>PIX</OptionText>
                </Option>
              </OptionsContainer>
              <Title>DADOS DO CARTÃO</Title>
              <InputWrapper>
                <InputContainer>
                  <Label>Número do cartão</Label>
                  <Input mask="**** **** **** ****" width={"100%"} placeholder="8546 5846 5848 8484" />
                </InputContainer>
                <InputContainer>
                  <Label>Validade</Label>
                  <Input mask="**/**" width={"100%"} placeholder="10/30" />
                </InputContainer>
                <InputContainer>
                  <Label>CVV</Label>
                  <Input mask="***" width={"100%"} placeholder="999" />
                </InputContainer>
              </InputWrapper>
              <InputContainer>
                <Label>Nome impresso no cartão</Label>
                <Input width={"100%"} />
              </InputContainer>
              <InputContainer>
                <Label>Parcelamento</Label>
                <Input width={"100%"} backgroundColor={"#f7f7f7"} readOnly value="Parcelamento não disponível" />
              </InputContainer>
            </>
          )}
          {paymentMethod === "pix" && (
            <>
              <Title>P</Title>
              <OptionsContainer>
                <Option onClick={() => handlePaymentMethodChange("creditCard")} selected={paymentMethod === "creditCard"} width={"30%"} minWidth={"60%;"}>
                  <FaRegCreditCard size="20px" color="#4b4b4b" />
                  <OptionText>CARTÃO DE CRÉDITO</OptionText>
                </Option>
                <Option onClick={() => handlePaymentMethodChange("pix")} selected={paymentMethod === "pix"} width={"15%"} minWidth={"30%;"}>
                  <SiPix size="20px" color="#4b4b4b" />
                  <OptionText>PIX</OptionText>
                </Option>
              </OptionsContainer>
              <PixWrapper>
                <QrcodeWrapper>
                  <QRCode value={qrCode} size={256} includeMargin={true} />
                </QrcodeWrapper>
                <PixText>
                  Aguardando pagamento do PIX. <br />
                  Digitalize o QR Code ou copie o código.
                </PixText>
                <SubmitButton width={"50%"} onClick={copyToClipboard}>Copiar código PIX</SubmitButton>
              </PixWrapper>
            </>
          )}
        </FormWrapper>
      </FormContainer>
    </Section>
  );
};

export default Checkout;
