import axios from "axios";
import { getNoticiasPrinc, getNoticiasSecund } from "./getNews";
export async function handleEdit(
  id,
  dados,
  setNoticiasPrincipais,
  setNoticiasSecundarias
) {
  try {
    const formData = new FormData();
    formData.append("titulo", dados.titulo);
    formData.append("link", dados.link);
    formData.append("categoria", dados.categoria);

    if (dados.imagem && dados.imagem[0]) {
      formData.append("imagem", dados.imagem[0]);
    }

    await axios.put(`http://localhost:3800/edit/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    
      getNoticiasPrinc(setNoticiasPrincipais);
      getNoticiasSecund(setNoticiasSecundarias);
    
  } catch (error) {
    console.error("Erro ao editar notícia:", error);
    const errorMessage =
      error.response?.data?.message || "Erro ao editar a notícia!";
    alert("Erro ao editar a notícia:", errorMessage);
  }
}
