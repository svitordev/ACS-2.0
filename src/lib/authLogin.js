import axios from "axios";
import APIURL from "./api";

export const loginUserAPI = async (data) => {
  try {
    const response = await axios.post(`${APIURL}/auth/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    // Verifica se o erro é de resposta ou conexão
    const errorMessage =
      error.response?.data?.message || "Erro ao verificar credenciais";
    throw new Error(errorMessage);
  }
};
