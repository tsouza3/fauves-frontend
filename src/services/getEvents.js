import axios from "axios";

export const getEvents = async ({ token }) => {
  try {
    const response = await axios.get(
      "https://fauvesapi.thiagosouzadev.com/api/users/eventos",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os eventos", error);
    throw error;
  }
};
