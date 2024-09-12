import React from 'react';
import { Section, Content, ImageWrapper, TextWrapper, BackButton } from './errorValidationStyles';

import Deslike from '../assets/icons/deslike.svg'

export default function ErrorValidation({onBack}) {
  return (
    <Section>
      <Content>
        <ImageWrapper>
            <img src={Deslike}></img>
        </ImageWrapper>
        <TextWrapper>
            <h1 style={{fontSize: '35px', fontWeight: '700', color: '#fff', textAlign: 'center'}}>Ingresso<br/> já validado</h1>
            <p style={{fontSize: '18px', fontWeight: '500', color: '#fff', textAlign: 'center'}}>A entrada com este <br/>ingresso não foi autorizada.</p>

        </TextWrapper>
        <BackButton onClick={onBack}>VOLTAR</BackButton>
    
      </Content>
    </Section>
  );
}
