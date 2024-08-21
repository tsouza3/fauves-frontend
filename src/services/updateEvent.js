// services/updateEvent.js
import axios from 'axios';

const API_URL = 'https://fauvesapi.thiagosouzadev.com/api/users';

export const updateEvent = async (eventId, eventData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Para enviar arquivos
      },
    };

    // Cria um FormData para incluir arquivos, se necessário
    const formData = new FormData();
    Object.keys(eventData).forEach((key) => {
      formData.append(key, eventData[key]);
    });

    const response = await axios.put(`${API_URL}/eventos/${eventId}`, formData, config);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar evento:', error);
    throw error.response ? error.response.data : new Error('Erro ao editar evento');
  }
};
