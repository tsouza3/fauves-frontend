import React from 'react'
import { Section } from './successValidationStyles'

export default function SuccessValidation({ qrData }) {
    return (
      <Section>
        <h1>Check-in realizado com sucesso!</h1>
        <p>Dados do QR Code: {qrData}</p>
      </Section>
    );
  }
