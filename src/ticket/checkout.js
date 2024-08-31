import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getEventById } from "../services/getEventsById";
import { getUserProfile } from "../services/userDataService";
import { FaRegCreditCard } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import { MdLockOutline } from "react-icons/md";
import Pix from '../assets/images/pix-106.svg'
import Loader from '../Loader/loader'

import { getPix } from "../services/paymentService";
import QRCode from "qrcode.react";
import axios from "axios";
import Rodape from '../rodape/rodape'
import {
  Section,
  Container, 
  PixWrapper,
  PixText,
  QrcodeWrapper,
  PaymentContentContainer,
  TitleContainer,
  FirstPixTextContainer,
  Title,
  Label,
  Lote,
  TypeTicket,
  Input,
  InputContainer,
  EventContainer,
  ImageContainer,
  EventTextContainer,
  EventText,
  NameEvent,
  TotalPrice,
  PriceText,
  Price,
  AlignContainer,
  CountContainer,
  InformationTicketContainer,
  TicketAndTags,
  TicketName,
  ClockAndTimer,
  Timer,
  PaymmentMethodChange,
  PixImage,
  PixInstrucoes,
  InputCpfOrCnpj,
  TermsAndCheckoutButton,
  PurchaseButton,
  TagParcelamento,
  SubmitButton
 
} from "./checkoutStyles";
import Navbar from '../home/navbar'
import { SuccessAlert } from '../events/success'
import { MdOutlineTimer } from "react-icons/md";


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
  const [documentType, setDocumentType] = useState("cpf");
  const [documentValue, setDocumentValue] = useState("");
  const [pixCopiaCola, setPixCopiaCola] = useState(null);
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [devedorNome, setDevedorNome] = useState("");
const [devedorCpf, setDevedorCpf] = useState("");
const [devedorCnpj, setDevedorCnpj] = useState("");

  const [error, setError] = useState(null);
  const [time, setTime] = useState(2999); // 49 minutos e 59 segundos em segundos (49 * 60 + 59)

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

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  

  const handleGetPix = async () => {
    setIsLoading(true);

    try {
      if (!totalPrice || !eventId || !userId || !ticketId || !totalTickets || !devedorNome || (documentType === "cpf" && !devedorCpf) || (documentType === "cnpj" && !devedorCnpj)) {
        throw new Error("Todos os campos obrigatórios devem estar preenchidos.");
    }
      const pixData = await getPix({ price: totalPrice, eventId, userId, quantidadeTickets: totalTickets, ticketId, devedorNome, devedorCpf, devedorCnpj  });
      console.log("Dados do PIX:", pixData); 
      setQRCode(pixData.qrCode);
      setPixCopiaCola(pixData.pixCopiaCola);
      setTxid(pixData.txid);
      setTicketGenerated(true);
    } catch (error) {
      console.error("Erro ao buscar PIX:", error.message);
      setError("Erro ao buscar o PIX. Verifique o valor e tente novamente.");
    } finally {
      setIsLoading(false);
  }
  };



  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
    setDocumentValue(""); // Limpar o valor do documento ao mudar o tipo
    setDevedorCpf(""); // Opcional: Limpar o CPF armazenado
    setDevedorCnpj(""); // Opcional: Limpar o CNPJ armazenado
  };
  
  const handleDocumentValueChange = (e) => {
    const value = e.target.value;
    setDocumentValue(value); // Atualize o estado de documentValue
    if (documentType === "cpf") {
      setDevedorCpf(value);
    } else if (documentType === "cnpj") {
      setDevedorCnpj(value);
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
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [txid, navigate]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);

    
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
            <img 
              style={{
                objectFit: 'cover', 
                alignSelf: 'center', 
                width: '100%', 
                height: '90%', 
                borderRadius: '8px', 
                marginLeft: '0.7em'
              }} 
              src={`https://fauvesapi.thiagosouzadev.com/api/users/${eventData.capaEvento}`}
              alt="Capa do evento"
            />
          </ImageContainer>
          <EventTextContainer>
            <EventText>Você está comprando</EventText>
            <NameEvent>{eventData.nomeEvento}</NameEvent>
          </EventTextContainer>
          <TotalPrice>
            <PriceText>Total da compra</PriceText>
            <Price>R$ {totalPrice}</Price>
          </TotalPrice>
        </EventContainer>
        <CountContainer><p style={{marginLeft: '0.7em'}}>Após este tempo, os ingressos serão liberados para venda novamente.</p>
        <ClockAndTimer>        <MdOutlineTimer color='#ef4118' size='30px' />
<Timer>{formatTime(time)}</Timer></ClockAndTimer>
        </CountContainer>
        <TitleContainer>
          <Title>Informações dos participantes</Title>
          <InformationTicketContainer>
            <TicketAndTags>
              <TicketName>teste</TicketName>
              <Lote>1ª Lote</Lote>
              <TypeTicket>Inteira</TypeTicket>
            </TicketAndTags>
            <InputContainer>
              <Label>Nome e sobrenome</Label>
              <Input
                type="text"
                value={devedorNome} // Vincula o valor do input ao estado
                onChange={(e) => setDevedorNome(e.target.value)} // Atualiza o estado quando o 
                
              />
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <Input
               type="text"
              />
            </InputContainer>
          

          </InformationTicketContainer>

            <>
           <PaymmentMethodChange 
  style={{ marginTop: '1em', borderRadius: '10px 10px 0px 0px', display: 'flex', alignItems: 'center', gap: '8px' }} 
  onClick={() => handlePaymentMethodChange("pix")}
>
  <div style={{ position: 'relative' }}>
    <input
      type="radio"
      name="paymentMethod"
      checked={paymentMethod === "pix"}
      style={{
        appearance: 'none',
        backgroundColor: '#ffffff',
        border: '2px solid #ef4118', // Borda laranja
        borderRadius: '50%',
        width: '18px', // Tamanho total do botão de rádio
        height: '18px',
        position: 'relative',
        cursor: 'pointer',
        outline: 'none',
        marginRight: '8px',
        marginLeft: '1em',

        padding: '2px', // Espaçamento interno
        boxSizing: 'border-box', // Inclui borda no tamanho total
      }}
    />
    {paymentMethod === "pix" && (
      <div
        style={{
          backgroundColor: '#ef4118', // Fundo laranja
          borderRadius: '50%',
          width: '12px', // Diminuído para ajustar ao centro
          height: '12px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />
    )}
  </div>
  <SiPix color='#36b4a9' size='22px' />
  <p>Pix</p>
</PaymmentMethodChange>

<span style={{ height: '2px', backgroundColor: 'transparent' }}></span>

<PaymmentMethodChange 
  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
  onClick={() => handlePaymentMethodChange("creditCard")}
>
  <div style={{ position: 'relative' }}>
    <input
      type="radio"
      name="paymentMethod"
      checked={paymentMethod === "creditCard"}
      style={{
        appearance: 'none',
        backgroundColor: '#ffffff',
        border: '2px solid #ef4118', 
        borderRadius: '50%',
        width: '18px', 
        height: '18px',
        position: 'relative',
        cursor: 'pointer',
        outline: 'none',
        marginRight: '8px',
        marginLeft: '1em',

        padding: '2px',
        boxSizing: 'border-box',  
      }}
    />
    {paymentMethod === "creditCard" && (
      <div
        style={{
          backgroundColor: '#ef4118', // Fundo laranja
          borderRadius: '50%',
          width: '12px', // Diminuído para ajustar ao centro
          height: '12px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />
    )}
  </div>
  <FaRegCreditCard size='22px' color='#4b4b4b' />
  <p>Cartão de crédito</p>
  <TagParcelamento>
    <p style={{ fontSize: '12px', color: '#ef4118' }}>Parcele em até 12x</p>
  </TagParcelamento>
</PaymmentMethodChange>

<PaymentContentContainer>
  {paymentMethod === "pix" ? (
    <>
      {!ticketGenerated ? (
        <>
          <FirstPixTextContainer>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', marginLeft: '1em', gap: '0.7em' }}>
              <MdLockOutline color='#ef4118' size='20px' />
              <p>Pagamento instantâneo</p>
            </div>
            <img style={{ width: '13%', alignSelf: 'center', marginRight: '1.5em' }} src={Pix} alt="QR Code do Pix" />
          </FirstPixTextContainer>

          <PixInstrucoes>
            <strong><p style={{ marginTop: '1em' }}>Como pagar com o Pix?</p></strong>
            <span style={{ height: '10px' }}></span>
            <p>Ao finalizar a compra, será gerado um <strong>QR Code de pagamento.</strong> Use um aplicativo do seu banco ou carteira digital para escaneá-lo e realizar o pagamento.</p>
          </PixInstrucoes>

          <span style={{ height: '2px', marginTop: '2em', marginBottom: '2em', backgroundColor: '#ccc', width: '97%', alignSelf: 'center' }}></span>

          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '21%' }}>
              <Label>Tipo do documento *</Label>
              <div style={{ display: "flex", alignItems: "center", marginLeft: '0.8em', width: '100%', marginTop: '1em' }}>
                <label>
                  <input
                    type="radio"
                    value="cpf"
                  
                    checked={documentType === "cpf"}
                    onChange={handleDocumentTypeChange} 
                  />
                  CPF
                </label>
                <label style={{ marginLeft: "10px" }}>
                  <input
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    type="radio"
                    value="cnpj"
                    checked={documentType === "cnpj"}
                    onChange={handleDocumentTypeChange}
                  />
                  CNPJ
                </label>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Label>{documentType === "cpf" ? "CPF *" : "CNPJ *"}</Label>
              <InputCpfOrCnpj
                mask={documentType === "cpf" ? "99999999999" : "99.999.999/9999-99"}
                value={documentValue}
                onChange={handleDocumentValueChange}
                placeholder={documentType === "cpf" ? "Digite o CPF" : "Digite o CNPJ"}
           
              >
                {(inputProps) => <Input {...inputProps} />}
              </InputCpfOrCnpj>
            </div>
          </div>
        </>
      ) : (
        // Conteúdo para quando o ticketGenerated for true, mostrando o QR Code e as instruções de pagamento
        <PixWrapper>
          <QrcodeWrapper >
            <QRCode value={qrCode} size={236} includeMargin={true} />
          </QrcodeWrapper>

          <PixText>
            Aguardando pagamento do PIX. <br />
            Digitalize o QR Code ou copie o código.
          </PixText>

          <SubmitButton width={"50%"} onClick={copyToClipboard}>
            Copiar código PIX
          </SubmitButton>
        </PixWrapper>
      )}
    </>
  ) : (
    <div>
      {/* Conteúdo do cartão de crédito será adicionado aqui */}
    </div>
  )}
</PaymentContentContainer>

  </>

              <TermsAndCheckoutButton>
                <p style={{color: '#4b4b4b'}}>Ao prosseguir, você declara estar ciente dos Termos e Política da Fauves.</p>
                <PurchaseButton onClick={handleGetPix} >  
                  {isLoading ? <Loader /> : 'Pagar'}
</PurchaseButton>
              </TermsAndCheckoutButton>

            


         

        </TitleContainer>

      </Container>
      <Rodape></Rodape>
    </Section>
  );
};

export default Checkout;
