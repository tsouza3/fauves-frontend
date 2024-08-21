import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddMemberTeam from "../ticket/addMemberModal";
import { getUsersByRole } from '../services/getUsersByRole';
import { AddMember, Section, Container, Wrapper, EventName, Title, SubTitle, Cargo, AddMemberText, SubmitButton, MembersContainer } from "./equipeStyles";
import Navbar from '../home/navbar';
import Rodape from '../rodape/rodape';
import StaffComponent from "./staffComponent";

export default function Equipe() {
    const { eventId } = useParams();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsersByRole(eventId);
                console.log('Users Data:', usersData); // Verifique se os dados estão corretos
                setUsers(usersData);
            } catch (error) {
                setError('Erro ao carregar usuários do evento');
                console.error(error); // Log do erro
            }
        };

        fetchUsers();
    }, [eventId]);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const filterUsersByRole = (role) => {
        if (!Array.isArray(users)) return [];
        return users.filter(user => user.role === role);
    };

    return (
        <Section>
            <Navbar />
            <Container>
                <Wrapper>
                    <EventName>Teste</EventName>
                    <Title>Equipe</Title>
                    <SubTitle>Adicione pessoas a sua equipe e defina o cargo de cada uma delas.</SubTitle>

                    {/* Administradores */}
                    <Cargo>Administradores</Cargo>
                    <SubTitle>Somente administradores com "Responsável Financeiro" permissão podem realizar a transferência de saque.</SubTitle>
                    <MembersContainer>
                        {filterUsersByRole('admin').length > 0 ? (
                            filterUsersByRole('admin').map(user => (
                                <StaffComponent
                                    key={user.userId}
                                    userName={user.name}
                                    userEmail={user.email}
                                    profilePhoto={user.profilePhoto}
                                />
                            ))
                        ) : (
                            <AddMember>
                                <AddMemberText>Você ainda não tem administradores cadastrados.</AddMemberText>
                            </AddMember>
                        )}
                    </MembersContainer>

                    {/* Observadores */}
                    <Cargo>Observadores</Cargo>
                    <MembersContainer>
                        {filterUsersByRole('observer').length > 0 ? (
                            filterUsersByRole('observer').map(user => (
                                <StaffComponent
                                    key={user.userId}
                                    userName={user.name}
                                    userEmail={user.email}
                                    profilePhoto={user.profilePhoto}
                                />
                            ))
                        ) : (
                            <AddMember>
                                <AddMemberText>Você ainda não tem observadores cadastrados.</AddMemberText>
                            </AddMember>
                        )}
                    </MembersContainer>

                    {/* Vendedores e promotores */}
                    <Cargo>Vendedores e promotores</Cargo>
                    <MembersContainer>
                        {filterUsersByRole('seller').length > 0 ? (
                            filterUsersByRole('seller').map(user => (
                                <StaffComponent
                                    key={user.userId}
                                    userName={user.name}
                                    userEmail={user.email}
                                    profilePhoto={user.profilePhoto}
                                />
                            ))
                        ) : (
                            <AddMember>
                                <AddMemberText>Você ainda não tem vendedores e promotores cadastrados.</AddMemberText>
                            </AddMember>
                        )}
                    </MembersContainer>

                    {/* Check-in */}
                    <Cargo>Check-in</Cargo>
                    <MembersContainer>
                        {filterUsersByRole('checkin').length > 0 ? (
                            filterUsersByRole('checkin').map(user => (
                                <StaffComponent
                                    key={user.userId}
                                    userName={user.name}
                                    userEmail={user.email}
                                    profilePhoto={user.profilePhoto}
                                />
                            ))
                        ) : (
                            <AddMember>
                                <AddMemberText>Você ainda não tem responsáveis pelo check-in cadastrados!</AddMemberText>
                            </AddMember>
                        )}
                    </MembersContainer>

                    <SubmitButton onClick={openEditModal}>Adicionar pessoa à equipe</SubmitButton>
                </Wrapper>
            </Container>

            <Rodape />
            {isEditModalOpen && (
                <AddMemberTeam onClose={closeEditModal} />
            )}
        </Section>
    );
}
