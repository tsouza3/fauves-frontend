// src/services/qrCodeService.js
import axios from 'axios';

const apiBaseUrl = 'https://fauvesapi.thiagosouzadev.com'; // Substitua pela URL base da sua API

export const validateQrCode = async (qrCodeUrl) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/api/users/validate-qrcode`, { qrCodeUrl });
    return response.data;
  } catch (error) {
    console.error('Erro ao validar o QR Code:', error);
    throw error;
  }
};
