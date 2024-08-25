import React from 'react'

import { Section, Container, CreateTicketContainer, CreateTicketText, Title } from './commercialProfileErrorStyles';

import { IoAddCircle } from 'react-icons/io5';
import { BiMessageSquareError } from "react-icons/bi";


export default function CommercialProfileError () {
    return (
        <Section>
         
            <Container>
            <BiMessageSquareError style={{marginTop: '5em'}} color='#ef4118' size='60px'/>

            <Title>
                Para criar um evento você precisa de um Perfil Comercial, vi que você ainda não tem um.
            </Title>
                <CreateTicketContainer to='/createproductorprofile'>
            <CreateTicketText>
            <IoAddCircle size="50px" color="#7b919f" />
            Criar perfil comercial
          </CreateTicketText>
        </CreateTicketContainer>
            </Container>
        </Section>
    )
}