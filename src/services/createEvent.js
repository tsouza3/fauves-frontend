import axios from "axios";

export async function createEvent(eventData, token) {
  try {
    const response = await axios.post(
      "https://fauvesapi.thiagosouzadev.com/api/users/eventos",
      eventData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar evento", error);
    throw error;
  }
}
