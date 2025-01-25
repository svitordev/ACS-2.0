import axios from "axios";
import { getNoticiasPrinc, getNoticiasSecund } from "./getNews";
import APIURL from "./api";
export async function handleCreate(
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

    const { data } = await axios.post(`${APIURL}/news/add`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    getNoticiasPrinc(setNoticiasPrincipais);
    getNoticiasSecund(setNoticiasSecundarias);
  } catch (error) {
    console.error("Erro ao adicionar notícia:", error);
    const errorMessage =
      error.response?.data?.message || "Erro ao adicionar a notícia!";
    alert("Erro ao adicionar a notícia:", errorMessage);
  }
}
