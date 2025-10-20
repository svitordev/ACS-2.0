export function InfoTimeCalc(noticia) {
  const d = noticia.created_at instanceof Date ? noticia.created_at : new Date(noticia.created_at);
  const createdAt = new Date(d.getTime());
  const now = new Date();
  const diffEmMs = now - createdAt;

  const segundos = Math.floor(diffEmMs / 1000);
  const minutos = Math.floor(diffEmMs / (1000 * 60));
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7); 

  let infoTempo;
  if (segundos < 60) {
    infoTempo = `${segundos} seg`;
  } else if (minutos < 60) {
    infoTempo = `${minutos} min`;
  } else if (horas < 24) {
    infoTempo = `${horas} h`;
  } else if (dias < 7) {
    infoTempo = `${dias} dias`;
  } else {
    infoTempo = `${semanas} sem`; 
  }

  return infoTempo;
}
