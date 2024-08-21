// service/ibgeService.js
import axios from "axios";

const API_URL =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";

export const getDistritos = async (orderBy = "nome") => {
  try {
    const response = await axios.get(`${API_URL}?orderBy=${orderBy}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching distritos:", error);
    return [];
  }
};
