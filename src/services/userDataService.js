import axios from "axios";

export const getUserProfile = async ({ token }) => {
  try {
    const response = await axios.get(
      "https://fauvesapi.thiagosouzadev.com/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os dados do perfil:", error);
    throw error;
  }
};
