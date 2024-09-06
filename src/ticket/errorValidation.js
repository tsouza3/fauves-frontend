import React from 'react';
import { Section, Content, ImageWrapper, TextWrapper } from './errorValidationStyles';

import Deslike from '../assets/icons/deslike.svg'
import { SubmitButton } from './checkoutStyles';

export default function ErrorValidation() {
  return (
    <Section>
      <Content>
        <ImageWrapper>
            <img src={Deslike}></img>
        </ImageWrapper>
        <TextWrapper>
            <h1 style={{fontSize: '27px', fontWeight: '700'}}>Ingresso já validado</h1>
            <p style={{fontSize: '17px', fontWeight: '600'}}>A entrada com este ingresso não foi autorizada.</p>

        </TextWrapper>
        <SubmitButton>VOLTAR</SubmitButton>
    
      </Content>
    </Section>
  );
}
