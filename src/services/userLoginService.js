import axios from "axios";

const API_URL = "https://fauvesapi.thiagosouzadev.com/api/users";

export async function loginUser(credentials) {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const token = response.data.token;
    document.cookie = `token=${token}; path=/`;
    return { success: true };
  } catch (error) {
    return { success: false, message: error.response?.data || error.message };
  }
}
