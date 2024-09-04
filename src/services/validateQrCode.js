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
    console.log('Iniciando validação do QR Code:', qrCodeUrl);

    // Extrair os parâmetros da URL
    const url = new URL(qrCodeUrl);
    const paths = url.pathname.split('/').filter(Boolean);
    const uuid = url.hash.substring(1); // Extrai o UUID do fragmento da URL

    console.log('Parâmetros extraídos:', { paths, uuid });

    if (paths.length < 3) {
      throw new Error('URL inválida. Parâmetros insuficientes.');
    }

    const eventId = paths[0];
    const userId = paths[1];
    const ticketId = paths[2];

    console.log('Event ID:', eventId, 'User ID:', userId, 'Ticket ID:', ticketId, 'UUID:', uuid);

    const token = getTokenFromCookie();
    console.log('Token obtido:', token);

    // Dados a serem enviados no corpo da requisição
    const requestData = {
      uuid,
      eventId,
      userId,
      ticketId
    };
    
    console.log('Dados enviados para a API:', requestData);

    // Requisição para a API para validar o QR code
    const response = await fetch(`${apiBaseUrl}/api/users/validate-qrcode`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      console.error('Erro na resposta da API:', response.status, response.statusText);
      throw new Error(`Erro ao validar o QR Code: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Resultado da API:', result);

    return result;
  } catch (error) {
    console.error('Erro ao validar QR Code:', error);
    throw error;
  }
};
