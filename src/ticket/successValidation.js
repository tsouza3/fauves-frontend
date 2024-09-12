import React from 'react';
import { Section, Content, ImageWrapper, Container, Wrapper, UserWrapper, BackButton, ConfirmButton, UserIcon } from './successValidationStyles';

import Like from '../assets/icons/like.svg'

export default function SuccessValidation({ data, onBack }) {
  return (
    <Section>
      <Content>
        <ImageWrapper>
          <img src={Like}></img>
        </ImageWrapper>
        <Container>
          <Wrapper>
          <h1 style={{fontSize: '30px', fontWeight: '700', color: '#fff', textAlign: 'center', margin: '0'}}>teste</h1>
          <span style={{height: '10px'}}></span>
          <p style={{fontSize: '18px', fontWeight: '500', color: '#fff', textAlign: 'center', margin: '0'}}>teste</p>

          </Wrapper>
          <span style={{height: '1em'}}></span>

          <UserWrapper>
            <UserIcon></UserIcon>
            <p style={{fontSize: '17px', fontWeight: '700', color: '#fff', textAlign: 'center'}}>teste</p>
            <p style={{fontSize: '17px', fontWeight: '700', color: '#fff', textAlign: 'center', marginTop: '0.5em'}}>522.116.468.08</p>

          </UserWrapper>
          <span style={{height: '1em'}}></span>

          <ConfirmButton >LIBERAR</ConfirmButton>
          <span style={{height: '0.5em'}}></span>

          <BackButton onClick={onBack}>CANCELAR</BackButton>

        </Container>
        
      </Content>
    </Section>
  );
}
