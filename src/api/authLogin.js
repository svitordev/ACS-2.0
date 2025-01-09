import axios from "axios";

export const loginUserAPI = async (data) => {
  try {
    const response = await axios.post("http://localhost:3800/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Retorna os dados da resposta
  } catch (error) {
    // Verifica se o erro é de resposta ou conexão
    const errorMessage =
      error.response?.data?.message || "Erro ao verificar credenciais";
    throw new Error(errorMessage);
  }
};
