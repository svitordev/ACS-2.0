import axios from "axios";
import { getNoticiasPrinc, getNoticiasSecund } from "./getNews";

export async function handleDeleteNews(
  noticia,
  setNoticiasPrincipais,
  setNoticiaSecundarias
) {
  
  try {
    await axios.delete(`http://localhost:3800/delete/${noticia.id}`);
    
    await getNoticiasPrinc(setNoticiasPrincipais);
    await getNoticiasSecund(setNoticiaSecundarias);
  } catch (error) {
    console.error("Erro ao deletar notícia:", error);
    alert(
      error.response?.data?.message || "Erro ao deletar a notícia no servidor."
    );
  }
}
