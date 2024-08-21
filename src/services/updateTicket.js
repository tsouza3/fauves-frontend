import axios from "axios";

export const updateTicket = async (token, eventId, ticketId, ticketData) => {
  try {
    const response = await axios.put(
      `https://fauvesapi.thiagosouzadev.com/api/users/events/${eventId}/tickets/${ticketId}`,
      ticketData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // certifique-se de ter o token definido aqui
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Erro ao atualizar o ticket");
  }
};
