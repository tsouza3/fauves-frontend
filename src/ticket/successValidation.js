import React from 'react';
import { Section, Content } from './successValidationStyles';

export default function SuccessValidation({ data }) {
  return (
    <Section>
      <Content>
        <h1>Check-in realizado com sucesso!</h1>
        <p>Nome do Usuário: {data.nomeUsuario}</p>
        <p>Nome do Ingresso: {data.nomeIngresso}</p>
      </Content>
    </Section>
  );
}
