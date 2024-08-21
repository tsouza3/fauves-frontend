import axios from "axios";

const API_URL = "https://fauvesapi.thiagosouzadev.com/api/users/register";

export async function createUser(userData) {
  try {
    const response = await axios.post(API_URL, userData);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message:
        error.response.data.message ||
        "Erro ao registrar. Verifique os dados enviados.",
    };
  }
}
