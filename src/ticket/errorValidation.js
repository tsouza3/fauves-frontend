import React from 'react';
import { Section, Content, ImageWrapper, TextWrapper, BackButton } from './errorValidationStyles';

import Deslike from '../assets/icons/deslike.svg'

export default function ErrorValidation() {
  return (
    <Section>
      <Content>
        <ImageWrapper>
            <img src={Deslike}></img>
        </ImageWrapper>
        <TextWrapper>
            <h1 style={{fontSize: '32px', fontWeight: '700', color: '#fff'}}>Ingresso já validado</h1>
            <p style={{fontSize: '18px', fontWeight: '500', color: '#fff'}}>A entrada com este ingresso não foi autorizada.</p>

        </TextWrapper>
        <BackButton>VOLTAR</BackButton>
    
      </Content>
    </Section>
  );
}
