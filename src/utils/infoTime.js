export function InfoTimeCalc(noticia) {
  const criadoEm = new Date(noticia.criado_em);
  const agora = new Date();
  const diffEmMs = agora - criadoEm;

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
