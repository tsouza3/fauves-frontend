import axios from "axios";

const deleteTicket = async (token, eventId, ticketId) => {
  try {
    const response = await axios.delete(
      `https://fauvesapi.thiagosouzadev.com/api/users/events/${eventId}/tickets/${ticketId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar o ticket:", error);
    throw error;
  }
};

export { deleteTicket };
