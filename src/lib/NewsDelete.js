import axios from "axios";
import { getNoticiasPrinc, getNoticiasSecund } from "./getNews";
import APIURL from "./api";

export async function handleDeleteNews(
  noticia,
  setNoticiasPrincipais,
  setNoticiaSecundarias
) {
  
  try {
    await axios.delete(`${APIURL}/news/delete/${noticia.id}`);

    await getNoticiasPrinc(setNoticiasPrincipais);
    await getNoticiasSecund(setNoticiaSecundarias);
  } catch (error) {
    console.error("Erro ao deletar notícia:", error);
    alert(
      error.response?.data?.message || "Erro ao deletar a notícia no servidor."
    );
  }
}
