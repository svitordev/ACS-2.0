// src/api/authApi.js

export const loginUserAPI = async (data) => {
  try {
    const response = await fetch("http://localhost:3800/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Erro ao verificar credenciais");
    }

    return result; // Retorna o resultado da requisição
  } catch (error) {
    throw new Error(error.message || "Erro ao conectar ao servidor!");
  }
};
