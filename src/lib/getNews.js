import axios from "axios";
import APIURL from "./api";

export async function getNoticiasPrinc(setNoticiasPrincipais) {
  try {
    const noticias = await axios.get(`${APIURL}/news/main`);
    setNoticiasPrincipais(noticias.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getNoticiasSecund(setNoticiasSecundarias) {
  try {
    const noticias = await axios.get(`${APIURL}/news/secondary`);
    setNoticiasSecundarias(noticias.data);
  } catch (error) {
    console.error(error);
  }
}