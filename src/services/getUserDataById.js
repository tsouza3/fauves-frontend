import axios from "axios";

export const getUserDataById = async (profileId) => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1",
    );
    const response = await axios.get(
      `https://fauvesapi.thiagosouzadev.com/api/users/profile/${profileId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o usuário:", error);
    throw new Error("Erro ao buscar o usuário.");
  }
};
