import axios from 'axios';

export const updateUser = async (formData, token) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put('https://fauvesapi.thiagosouzadev.com/api/users/editprofile', formData, config);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    throw new Error(error.response?.data?.message || "Erro ao atualizar perfil");
  }
};
