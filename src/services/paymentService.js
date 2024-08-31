import axios from 'axios';

export const getPix = async ({ price, eventId, userId, quantidadeTickets, ticketId, devedorCpf, devedorCnpj, devedorNome }) => {
  try {
    const response = await axios.post('https://fauvesapi.thiagosouzadev.com/pix', {
      price,
      eventId,
      userId,
      quantidadeTickets,
      ticketId,
      devedorCpf, 
      devedorCnpj, 
      devedorNome
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar PIX:", error.response ? error.response.data : error.message);
    throw new Error("Erro ao buscar PIX.");
  }
};
