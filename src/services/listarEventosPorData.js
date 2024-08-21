import axios from "axios";

export const listarEventosPorData = async (profileId, tipo, token) => {
  try {
    const response = await axios.get(
      `https://fauvesapi.thiagosouzadev.com/api/users/listareventos?profileId=${profileId}&tipo=${tipo}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao listar eventos:", error);
    throw error;
  }
};
