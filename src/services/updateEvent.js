import axios from 'axios';

const API_URL = 'https://fauvesapi.thiagosouzadev.com/api/users/eventos'; // Ajuste a URL conforme necessário

export const updateEvent = async (eventId, formData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
    };

    const response = await axios.put(`${API_URL}/${eventId}`, formData, config);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar evento:', error);
    throw error.response ? error.response.data : new Error('Erro ao editar evento');
  }
};
