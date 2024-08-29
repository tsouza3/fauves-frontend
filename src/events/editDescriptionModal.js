import React, { useState, useEffect } from 'react';
import { ModalContent, ModalWrapper, Close, Container, NameEvent, Title, DescriptionContentInput, SubmitButton } from './editDescriptionModalStyles';
import { getEventById } from '../services/getEventsById';
import { updateEvent } from '../services/updateEvent'; // Importe o serviço de atualização
import { useParams } from 'react-router-dom';
import { SuccessAlert } from './success';
import { ErrorAlert } from './error';
import Loader from '../Loader/loader';

export default function EditDescriptionModal({ onClose }) {
    const [eventData, setEventData] = useState(null);
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const { eventId } = useParams();

    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );

    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const event = await getEventById(eventId);
                setEventData(event);
                setDescription(event.description || ''); // Supondo que a descrição do evento é 'descricao'
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

        try {
            await updateEvent(eventId, { description: description }, token);
            setMessage({ type: 'success', text: 'Descrição atualizada com sucesso!' });
            const updatedEvent = await getEventById(eventId);
            setEventData(updatedEvent);
        } catch (error) {
            setError(error.message || 'Erro ao atualizar a descrição.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ModalWrapper>
            <ModalContent>
                <Close size={"30px"} onClick={handleClose} />
                {eventData ? (
                    <Container>
                        <NameEvent>{eventData.nomeEvento}</NameEvent>
                        <Title>Descrição do evento</Title>
                            <DescriptionContentInput
                                type='text'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <SubmitButton onClick={handleSubmit} type='submit' disabled={loading}>
                                {loading ? <Loader /> : 'Adicionar descrição'}
                            </SubmitButton>
                        {message && message.type === 'success' && (
                            <SuccessAlert style={{width: '92%'}}>
                                {message.text}
                            </SuccessAlert>
                        )}
                        {error && <ErrorAlert>{error}</ErrorAlert>}
                    </Container>
                ) : (
                    <p></p>
                )}
            </ModalContent>
        </ModalWrapper>
    );
}
