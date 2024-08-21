import axios from "axios";

export const deleteEvent = async (token, eventId) => {
  try {
    const response = await axios.delete(
      `https://fauvesapi.thiagosouzadev.com/api/users/event/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
