export function InfoTimeCalc(noticia) {
  const criadoEm = new Date(noticia.criado_em);
  const agora = new Date();
  const diffEmMs = agora - criadoEm;

  const minutos = Math.floor(diffEmMs / (1000 * 60));
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  let infoTempo;
  if (minutos < 60) {
    infoTempo = `${minutos} minutos`;
  } else if (horas < 24) {
    infoTempo = `${horas} horas`;
  } else if(horas < 48) {
    infoTempo = `${dias} dia`;
  } else {
    infoTempo = `${dias} dias`;
  }

  return infoTempo;
}
