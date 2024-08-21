import axios from "axios";

export async function createProductorProfile(formData, token) {
  try {
    const response = await axios.post(
      "https://fauvesapi.thiagosouzadev.com/api/users/productorprofile",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar perfil comercial:", error);
    throw error;
  }
}
