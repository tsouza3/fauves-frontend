import axios from 'axios';

export const buscarEventosUsuario = async (token) => {
  try {
    const response = await axios.get('https://fauvesapi.thiagosouzadev.com/api/users/events', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
