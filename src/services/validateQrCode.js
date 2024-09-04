const apiBaseUrl = 'https://fauvesapi.thiagosouzadev.com';

// Função para obter o token armazenado nos cookies
const getTokenFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
};

// Função para validar o QR code
export const validateQrCode = async (qrCodeUrl) => {
  try {
    // Extrair os parâmetros da URL
    const url = new URL(qrCodeUrl);
    const paths = url.pathname.split('/').filter(Boolean);
    const uuid = url.hash.substring(1); // Extrai o UUID do fragmento da URL

    // Extrair eventId, userId, ticketId da URL
    const eventId = paths[0];
    const userId = paths[1];
    const ticketId = paths[2];

    const token = getTokenFromCookie(); // Obter o token

    if (!token) {
      throw new Error('Token não encontrado nos cookies');
    }

    const response = await fetch(`${apiBaseUrl}/api/users/validate-qr-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Adicionar o token no cabeçalho
      },
      body: JSON.stringify({ uuid, ticketId, eventId, userId }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Erro ao validar o QR Code.');
    }

    return result;
  } catch (error) {
    console.error('Erro na validação do QR Code:', error);
    throw error;
  }
};
