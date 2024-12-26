async function carregarAmostraNoticias() {
  const NotPrin = await fetch("http://localhost:3000/noticiasPrinc");
  const NotSec = await fetch("http://localhost:3000/noticiasSecun");
  const noticiasPrincipais = await NotPrin.json();
  const noticiasSecundarias = await NotSec.json();

  const slideNoticia = document.getElementById("slide-noticia");
  const noticiasSec = document.getElementById("noticias-secundarias");
  const dots = document.getElementById("dots");
  const prevNext = document.getElementById("prevNext");
  noticiasSec.innerHTML = "";
  slideNoticia.innerHTML = "";
  dots.innerHTML = "";

  function informaçãoTempo(noticia) {
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
    } else {
      infoTempo = `${dias} dias`;
    }

    return infoTempo;
  }

  noticiasPrincipais.forEach((noticia, index) => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.className = "mySlides fade";
    link.href = noticia.link;

    link.innerHTML = `${
      noticia.imagem
        ? `<img loading="lazy" class="principal" src='${noticia.imagem}' alt='Imagem da notícia'>`
        : ""
    }
        <span class="infoTime">${informaçãoTempo(noticia)}</span>
        <p>${noticia.titulo}</p>`;
    slideNoticia.appendChild(link);
    const span = document.createElement("span");
    if (noticiasPrincipais.length <= 1) {
      prevNext.style.display = "none";
    } else {
      prevNext.style.display = "block";
      span.className = "dot";
      span.onclick = `currentSlide(${index})`;
      dots.appendChild(span);
    }
  });
  noticiasSecundarias.forEach((noticia) => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.className = "card1";
    link.href = noticia.link;

    link.innerHTML = `${
      noticia.imagem
        ? `<img loading="lazy" src='${noticia.imagem}' alt='Imagem da notícia'>`
        : ""
    }
        <span class="infoTime">${informaçãoTempo(noticia)}</span>
        <p>${noticia.titulo}</p>`;
    noticiasSec.appendChild(link);
  });
}
carregarAmostraNoticias();
