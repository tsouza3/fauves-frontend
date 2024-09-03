import React, { useState } from "react";
import { Container, Section, SubTitle, Title, Input, SubmitButton, Close } from "./ticketTransferStyles";
import AlertError from '../events/error';
import TicketHands from '../assets/images/TicketHands.svg';
import { transferTicketService } from '../services/transferTicket';
import SuccessAlert from "../events/success";
import Loader from '../Loader/loader';

export default function TransferTicket({ onClose, uniqueTicketId, ticketId }) { 
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleTransfer = async () => {
        setLoading(true);
        setError(''); // Limpa a mensagem de erro
        setMessage(''); // Limpa a mensagem de sucesso

        if (email !== confirmEmail) {
            setError('Os e-mails não coincidem');
            setLoading(false);
            return;
        }

        try {
            await transferTicketService(email, uniqueTicketId, ticketId);
            setMessage('Ingresso transferido com sucesso!');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section>
            <Close size={"50px"} onClick={onClose} /> {/* Chama onClose quando o botão de fechar for clicado */}
            <Container>
                <img src={TicketHands} alt="Ticket Hands" style={{width: '40%'}} />
                <Title>Transfira seu ingresso para  <p style={{margin: '0'}}>um amigo.</p></Title>
                <SubTitle>Ele receberá o ingresso no app Fauves e no e-mail dele. <strong><p style={{color: '#ef4118', margin: '0'}}>Você não poderá desfazer essa transferência.</p></strong></SubTitle>
                <span style={{height: '1.5em'}}></span>
                    <Input 
                        placeholder='E-mail' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder='Confirmar e-mail' 
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                <SubmitButton onClick={handleTransfer}>{loading ? <Loader /> : "Transferir"}</SubmitButton>
                {error && <div style={{width: '100%'}}><AlertError error={error} /></div>} 
                {message && <div style={{ width: '100%' }}><SuccessAlert message={message} /></div>}
            </Container>
        </Section>
    );
}
