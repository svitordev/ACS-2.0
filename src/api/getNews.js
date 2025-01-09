import axios from "axios";
export async function getNoticiasPrinc(setNoticiasPrincipais) {
  try {
    const noticias = await axios.get("http://localhost:3800/noticiasPrinc");
    setNoticiasPrincipais(noticias.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getNoticiasSecund(setNoticiasSecundarias) {
  try {
    const noticias = await axios.get("http://localhost:3800/noticiasSecun");
    setNoticiasSecundarias(noticias.data);
  } catch (error) {
    console.error(error);
  }
}