"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { InfoTime } from "../../../hooks/infoTime";

function SlideShow() {
  const [noticiasPrincipais, setNoticiasPrincipais] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1); // Controle do slide atual
  const slideRef = useRef([]); // Referências para os slides
  const dotRef = useRef([]); // Referências para os dots

  useEffect(() => {
    // Fetch das notícias principais
    async function fetchNoticias() {
      const NotPrin = await fetch("http://localhost:3800/noticiasPrinc");
      const noticias = await NotPrin.json();
      setNoticiasPrincipais(noticias);
    }

    fetchNoticias();
  }, []);

  // Função para exibir o slide
  function showSlides(n) {
    const slides = slideRef.current;
    const dots = dotRef.current;

    if (n > slides.length) {
      setSlideIndex(1); // Voltar ao primeiro slide
    } else if (n < 1) {
      setSlideIndex(slides.length); // Ir para o último slide
    } else {
      setSlideIndex(n); // Mover para o slide especificado
    }

    // Esconder todos os slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // Remover a classe 'active' de todos os pontos
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Exibir o slide atual e adicionar a classe 'active' ao ponto atual
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("active");
    }
  }

  // Navegar entre os slides
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  useEffect(() => {
    if (noticiasPrincipais.length > 0) {
      showSlides(slideIndex); // Exibir o primeiro slide ao carregar
    }
  }, [noticiasPrincipais, slideIndex]);

  return (
    <div className="slideshow-container">
      <div id="slide-noticia">
        {noticiasPrincipais.map((noticia, index) => (
          <a
            key={index}
            href={noticia.link}
            target="_blank"
            className="mySlides fade"
            ref={(el) => (slideRef.current[index] = el)} // Ref para os slides
          >
            {noticia.imagem && (
              <Image
                loading="lazy"
                className="principal"
                width={100}
                height={100}
                src={noticia.imagem}
                alt="Imagem da notícia"
              />
            )}
            <div className="buttons">
              <button className="buttonEdit">
                <MdEdit />
              </button>
              <button className="buttonDel">
                <FaTrashAlt />
              </button>
            </div>

            <span className="infoTime">{InfoTime(noticia)}</span>
            <p>{noticia.titulo}</p>
          </a>
        ))}
      </div>

      {noticiasPrincipais.length > 1 && (
        <div id="prevNext">
          <a
            className="prev"
            onClick={() => plusSlides(-1)} // Navegar para o slide anterior
          >
            &#10094;
          </a>
          <a
            className="next"
            onClick={() => plusSlides(1)} // Navegar para o próximo slide
          >
            &#10095;
          </a>
        </div>
      )}

      <div id="dots">
        {noticiasPrincipais.map((_, index) => (
          <span
            key={index}
            className="dot"
            onClick={() => showSlides(index + 1)} // Navegar para o slide específico
            ref={(el) => (dotRef.current[index] = el)} // Ref para os dots
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
