// UserHome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import { IoMdStar } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineQrCode } from 'react-icons/md';
import Navbar from '../home/navbar';
import MobileNavbar from '../home/mobileNavbar'; // Importe o MobileNavbar
import { buscarEventosUsuario } from '../services/buscarEventosUsuario';
import { getUserProfile } from '../services/userDataService';
import Rodape from '../rodape/rodape';
import QrCodeComponent from '../ticket/qrCodeComponent';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  TicketContainer,
  CashContainer,
  TextContainer,
  Section,
  AllContainer,
  Container,
  Text,
  EventContainer,
  Banner,
  Txt,
  Date,
  Public,
  TxtContainer,
  Name,
  Delete,
  PubAndDelContainer,
  QntAndPermission,
  QntTicket,
  Permission,
  ComercialProfiles,
  EditProfileBtn,
  EventWrapper,
  EventSection,
  Img,
  ComercialContainer,
  Perfis,
  Title,
  CreateLink,
  CenterContainer
} from './userHomeStyles';
import { Profile } from './profile';

// Função para formatar a data
const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return format(date, 'EEE, dd MMM - HH\'h\'', { locale: ptBR }).toUpperCase();
};

export default function UserHome() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para verificar se é mobile
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  // Atualizar estado ao redimensionar janela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getUserProfile({ token });
        setUserData(profileData);

        const eventData = await buscarEventosUsuario(token);
        setEvents(eventData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [token]);

  const calcularQntIngressos = (event) => {
    return event.tickets.length;
  };

  // Função para definir o ícone e texto com base no papel do usuário
  const getRoleIconAndText = (role) => {
    switch (role) {
      case 'admin':
        return { icon: <IoMdStar size="23px" color="#d75d36" />, text: 'Administrador' };
      case 'observer':
        return { icon: <IoEyeOutline size="23px" color="#9cafb5" />, text: 'Observador' };
      case 'checkin':
        return { icon: <MdOutlineQrCode size="23px" color="#9cafb5" />, text: 'Check-in' };
      case 'seller':
        return { icon: <GiTicket size="23px" color="#9cafb5" />, text: 'Vendedor' };
      default:
        return { icon: null, text: 'Sem Permissão' };
    }
  };

  return (
    <Section>
      {isMobile ? <MobileNavbar /> : <Navbar />} {/* Renderizar condicionalmente Navbar ou MobileNavbar */}
      <Profile />
      <CenterContainer>
        <AllContainer>
          <Container>
            <Text>
              O seu perfil ainda está incompleto. Preencha os dados de{' '}
              <strong>endereço.</strong>
            </Text>
            <EditProfileBtn to="/editprofile">Concluir cadastro</EditProfileBtn>
          </Container>

          <CashContainer>
            <TextContainer>FauvesCASH</TextContainer>
          </CashContainer>
          <Title>Meus perfis comerciais</Title>
          <ComercialContainer>
            <Perfis>
              <Link to="/createproductorprofile">
                <CreateLink>
                  <MdAdd
                    style={{
                      height: '30px',
                      width: '30px',
                      color: '#ef4118',
                    }}
                  />
                </CreateLink>
              </Link>
              {userData &&
                userData.commercialProfiles &&
                userData.commercialProfiles.map((profile, index) => (
                  <ComercialProfiles key={index}>
                    <Link
                      to={`/profile/${profile._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Img
                        src={
                          profile.profilePhoto
                            ? `https://fauvesapi.thiagosouzadev.com/api/users/${profile.profilePhoto}`
                            : null
                        }
                        style={{
                          backgroundColor: profile.profilePhoto
                            ? 'transparent'
                            : '#f3f8fc',
                        }}
                      />
                    </Link>
                  </ComercialProfiles>
                ))}
            </Perfis>
          </ComercialContainer>
          <Title>Meus ingressos</Title>
          <TicketContainer>
            <QrCodeComponent />
          </TicketContainer>

          <Title>Próximos eventos</Title>
          
          <EventSection>
            <EventContainer>
              {events.map((event) => (
                <div key={event._id}>
                  <EventWrapper>
                    <Banner
                      src={`https://fauvesapi.thiagosouzadev.com/api/users/${event.capaEvento}`}
                    />
                    <Txt>
                      <PubAndDelContainer>
                        <Public>Publicado</Public>
                        <Delete>Excluir</Delete>
                      </PubAndDelContainer>

                      <Link
                        to={`/eventedit/${event._id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <TxtContainer>
                          <Name>{event.nomeEvento}</Name>
                          <Date>{formatDate(event.dataInicio)}</Date>
                        </TxtContainer>
                      </Link>

                      <QntAndPermission>
                        <QntTicket>
                          <GiTicket
                            style={{ marginRight: '7px' }}
                            size="23px"
                            color="#d75d36"
                          />
                          {calcularQntIngressos(event)} ingressos
                        </QntTicket>
                        <Permission>
                          {getRoleIconAndText(event.role).icon}
                          <span style={{ verticalAlign: 'middle' }}>
                            {getRoleIconAndText(event.role).text}
                          </span>
                        </Permission>
                      </QntAndPermission>
                    </Txt>
                  </EventWrapper>
                </div>
              ))}
            </EventContainer>
          </EventSection>
        </AllContainer>
      </CenterContainer>
    
      <Rodape />
    </Section>
  );
}
