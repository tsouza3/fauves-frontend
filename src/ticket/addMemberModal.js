import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GiTicket } from "react-icons/gi";
import { IoMdStar } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineQrCode } from "react-icons/md";
import { updateUserPermission } from '../services/permissionService';

import { ErrorAlert } from '../events/error';
import { SuccessAlert } from '../events/success';

import {
  ModalContent,
  ModalWrapper,
  Close,
  Container,
  NameEvent,
  Title,
  SubmitButton,
  SelectedPermission,
  SelectedPermissionContainer,
  PermissionTitle,
  Wrapper,
  InputContainer,
  Input, 
  Label,
  PermissionSubTitle
} from "./addMemberModalStyles";
import Loader from "../Loader/loader";

export default function AddMemberTeam({ onClose }) {
  const { eventId } = useParams(); 

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [email, setEmail] = useState('');
  const [selectedPermission, setSelectedPermission] = useState('admin'); // Valor padrão
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClose = () => {
    onClose(); 
  };

  const handleSubmit = async () => {
    if (!token) {
      setError("Token de autenticação não encontrado.");
      return;
    }

    setLoading(true);
    setMessage(null); // Limpar mensagem anterior
    setError(null); // Limpar erro anterior

    try {
      const response = await updateUserPermission(token, email, selectedPermission, eventId);
      setMessage('Membro adicionado á equipe com sucesso');
    } catch (err) {
      setError('Erro ao adicionar membro á equipe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <Close size={"30px"} onClick={handleClose} />
        <Container>
          <NameEvent>Teste</NameEvent>
          <Title>Adicionar pessoa à equipe</Title>
          <Wrapper>
            <SelectedPermissionContainer>
              <SelectedPermission
                tabIndex="0"
                onClick={() => setSelectedPermission('admin')}
                style={{ border: selectedPermission === 'admin' ? '2px solid #ef4118' : '2px solid #c8dae7' }}
              >
                <IoMdStar style={{marginTop: '1em'}} size='50px' color="#d75d36"/>
                <PermissionTitle>Administrador</PermissionTitle>
                <PermissionSubTitle>Você pode editar informações do evento, adicionar membros e acompanhar relatórios.</PermissionSubTitle>
              </SelectedPermission>
              <SelectedPermission
                tabIndex="1"
                onClick={() => setSelectedPermission('observer')}
                style={{ border: selectedPermission === 'observer' ? '2px solid #ef4118' : '2px solid #c8dae7' }}
              >
                <IoEyeOutline style={{marginTop: '1em'}} size='50px' color="#9cafb5" />
                <PermissionTitle>Observador</PermissionTitle>
                <PermissionSubTitle>Você pode acompanhar relatórios e informações de eventos, mas não pode editar.</PermissionSubTitle>
              </SelectedPermission>
              <SelectedPermission
                tabIndex="2"
                onClick={() => setSelectedPermission('seller')}
                style={{ border: selectedPermission === 'seller' ? '2px solid #ef4118' : '2px solid #c8dae7' }}
              > 
                <GiTicket style={{marginTop: '1em'}} size='50px' color="#9cafb5" />
                <PermissionTitle>Vendedor</PermissionTitle>
                <PermissionSubTitle>Você pode vender ingressos e acompanhar seus próprios relatórios.</PermissionSubTitle>
              </SelectedPermission>
              <SelectedPermission
                tabIndex="3"
                onClick={() => setSelectedPermission('checkin')}
                style={{ border: selectedPermission === 'checkin' ? '2px solid #ef4118' : '2px solid #c8dae7' }}
              >
                <MdOutlineQrCode style={{marginTop: '1em'}} size='50px' color="#9cafb5" />
                <PermissionTitle>Check-in</PermissionTitle>
                <PermissionSubTitle>Você pode simplesmente visualizar a lista de participantes e realizar check-in</PermissionSubTitle>
              </SelectedPermission>
              <InputContainer>
                <Label>E-mail</Label>
                <Input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
            </SelectedPermissionContainer>
            <SubmitButton onClick={handleSubmit}>
              {loading ? <Loader /> : "Adicionar"}
            </SubmitButton>
          </Wrapper>
          {/* Renderizar Alert com base na mensagem e erro */}
          {error && <div style={{ width: '91%', alignSelf: 'center', marginBottom: '2em' }}><ErrorAlert error={error} /></div>}
          {message && <div style={{ width: '91%', alignSelf: 'center', marginBottom: '2em' }}><SuccessAlert message={message} /></div>}
        </Container>
      </ModalContent>
    </ModalWrapper>
  );
}
