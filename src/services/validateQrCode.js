import axios from 'axios';

const apiBaseUrl = 'https://fauvesapi.thiagosouzadev.com'; 

const getTokenFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
};

export const validateQrCode = async (qrCodeUrl) => {
  try {
    const token = getTokenFromCookie(); 

    if (!token) {
      throw new Error('Token não encontrado nos cookies');
    }

    const response = await axios.post(
      `${apiBaseUrl}/api/users/validate-qrcode`,
      { qrCodeUrl },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao validar o QR Code:', error);
    throw error;
  }
};
