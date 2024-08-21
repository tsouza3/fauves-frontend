import axios from 'axios';

export const emitirCortesia = async (email, event_Id, ticket_Id, token) => {
  try {
    const response = await axios.post(
      'https://fauvesapi.thiagosouzadev.com/api/users/emitircortesia',
      {
        email,
        event_Id,
        ticket_Id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao emitir cortesia:", error);
    throw error;
  }
};
