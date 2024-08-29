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
  Container, 
  EventContainer,
  ImageContainer,
  EventTextContainer,
  EventText,
  NameEvent
 
} from "./checkoutStyles";
import Navbar from '../home/navbar'
import { SuccessAlert } from '../events/success'

const Checkout = () => {
    const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { totalPrice, totalTickets, ticketId } = location.state;

  const [eventData, setEventData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [qrCode, setQRCode] = useState(null);
  const [pixCopiaCola, setPixCopiaCola] = useState(null);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [error, setError] = useState(null);
  const [txid, setTxid] = useState(null);

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
      setTicketGenerated(true);
    } catch (error) {
      console.error("Erro ao buscar PIX:", error.message);
      setError("Erro ao buscar o PIX. Verifique o valor e tente novamente.");
    }
  };

  useEffect(() => {
    if (txid) {
      const checkPaymentStatus = async () => {
        try {
          console.log("Verificando status do pagamento para txid:", txid); // Log do txid
          const response = await axios.get(`https://fauvesapi.thiagosouzadev.com/verificar-pagamento/${txid}`);
          console.log("Resposta da verificação do pagamento:", response.data); // Log da resposta

          if (response.data.status === "sucesso") {
            console.log("Pagamento confirmado. Navegando para sucesso."); // Log do status de sucesso
            navigate("/checkout/success");
          } else {
            console.log("Pagamento não confirmado. Status atual:", response.data.status); // Log do status atual
          }
        } catch (error) {
          console.error("Erro ao verificar status do pagamento:", error);
          setError("Erro ao verificar o status do pagamento.");
        }
      };

      const interval = setInterval(() => {
        checkPaymentStatus();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [txid, navigate]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === "pix") {
      handleGetPix();
    }
  };

  const copyToClipboard = () => {
    if (pixCopiaCola) {
      navigator.clipboard.writeText(pixCopiaCola);
      setShowSuccessAlert(true); // Mostra o alerta de sucesso
    }
  };

  if (!eventData) {
    return <div></div>;
  }


  return (
    <Section>
      <Navbar />
      <Container>
        <EventContainer>
          <ImageContainer>
          <img style={{objectFit: 'cover', alignSelf: 'center', width: '100%', height: '90%', borderRadius: '8px', marginLeft: '0.7em'}} src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`}
></img>
          </ImageContainer>
          <EventTextContainer>

          <EventText>Você está comprando</EventText>
          {eventData && (

<NameEvent>{eventData.nomeEvento}</NameEvent>

          )}
        
          </EventTextContainer>
          

        </EventContainer>

      </Container>

    </Section>
  );
};

export default Checkout;
