import axios from 'axios';

export const getEventsByProfile = async ({ token, profileId }) => {
  try {
    const response = await axios.get(`https://fauvesapi.thiagosouzadev.com/api/users/eventos/${profileId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erro ao obter eventos');
  }
};
