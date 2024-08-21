import axios from 'axios';

const API_URL = 'https://fauvesapi.thiagosouzadev.com/api/users';

export const updateUserPermission = async (token, email, role, eventId) => {
  try {
    const response = await axios.post(
      `${API_URL}/update-permission`,
      { email, eventId, role }, // Enviando email, eventId e role corretamente
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro ao atualizar a permissão');
  }
};
