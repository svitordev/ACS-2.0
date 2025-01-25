import axios from "axios";
import { getNoticiasPrinc, getNoticiasSecund } from "./getNews";
import APIURL from "./api";
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

    await axios.put(`${APIURL}/news/edit/${id}`, formData, {
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
