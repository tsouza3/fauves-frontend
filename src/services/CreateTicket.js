import axios from 'axios';

export const createTicket = async (ticketData, eventId, token) => {
  try {
    const response = await axios.post(
      `https://fauvesapi.thiagosouzadev.com/api/users/events/${eventId}/tickets`,
      ticketData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Erro ao criar o ticket");
  }
};
