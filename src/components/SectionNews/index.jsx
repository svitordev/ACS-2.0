import { useEffect, useRef, useState } from "react";
import GradeNoticias from "./GradeNoticias";
import PrevNext from "./PrevNext";
import SlideShow from "./SlideShow";

function SectionNews({
  noticiasPrincipais,
  noticiaSecundarias,
  onEditClick,
  onDelClick,
}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const slideRef = useRef([]);
  const dotRef = useRef([]);
  function showSlides(n) {
    const slides = slideRef.current;
    const dots = dotRef.current;

    let currentIndex = n - 1;
    if (n > slides.length) {
      setSlideIndex(1);
      currentIndex = 0;
    } else if (n < 1) {
      setSlideIndex(slides.length);
      currentIndex = slides.length - 1;
    } else {
      setSlideIndex(n);
    }

    slides.forEach((slide, i) => {
      if (slide) slide.style.display = i === currentIndex ? "block" : "none";
    });

    dots.forEach((dot, i) => {
      if (dot) dot.classList.toggle("active", i === currentIndex);
    });
  }
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }
  useEffect(() => {
    if (noticiasPrincipais.length > 0) {
      showSlides(1);
    }
  }, [noticiasPrincipais]);
  return (
    <section
      id="news"
      className="bg-acs-gradient gap-2 lg:gap-3 xl:gap-4 bg-no-repeat bg-cover flex flex-col md:flex-row flex-wrap justify-center px-3 md:px-0 lg:px-16 xl:px-40 2xl:px-60 pt-20 pb-28 md:py-20 relative overflow-hidden md:h-[32rem] lg:h-[32rem] xl:h-[34rem] 2xl:h-[45rem] mt-10"
    >
      <h1 className="absolute top-2 left-[5.5rem] md:top-6 md:left-12 lg:left-[7.5rem] xl:left-56 2xl:left-72 z-10 text-green-900 text-3xl 2xl:text-4xl font-extrabold uppercase">
        Notícias
      </h1>
      <div className="ondaTop"></div>
      <div className="ondaBottom"></div>
      {noticiasPrincipais.length > 0 && (
        <div className=" overflow-hidden rounded-lg relative shadow-lg shadow-black/60 h-[23rem] md:w-[48%]  md:h-full mb-2 md:mb-0">
          {noticiasPrincipais.map((noticia, index) => (
            <SlideShow
              key={noticia.id}
              noticia={noticia}
              slideRef={slideRef}
              index={index}
              onEditClick={onEditClick}
              onDelClick={onDelClick}
            />
          ))}
          {noticiasPrincipais.length > 1 && (
            <div>
              <PrevNext
                styles={"rounded-e-lg  2xl:text-xl 2xl:p-4"}
                onClick={() => plusSlides(-1)}
              >
                &#10094;
              </PrevNext>
              <PrevNext
                styles={"rounded-s-lg right-0 2xl:text-xl 2xl:p-4"}
                onClick={() => plusSlides(1)}
              >
                &#10095;
              </PrevNext>
            </div>
          )}
          {noticiasPrincipais.length > 1 && (
            <div
              id="dots"
              className="w-full flex justify-center items-center absolute bottom-4 2xl:bottom-6"
            >
              {noticiasPrincipais.map((_, index) => (
                <span
                  key={index}
                  className="dot cursor-pointer border-2 2xl:border-4 border-solid w-5 mx-0.5 hover:border-blue-500 active:border-blue-500"
                  onClick={() => showSlides(index + 1)}
                  ref={(el) => {
                    if (el) dotRef.current[index] = el;
                  }}
                ></span>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        className="grid justify-center grid-cols-1 md:grid-cols-2  gap-4 md:gap-2 lg:gap-3 w-full h-full md:w-[48%]"
        id="noticias-secundarias"
      >
        {noticiaSecundarias.map((noticia) => (
          <GradeNoticias
            key={noticia.id}
            noticia={noticia}
            onEditClick={onEditClick}
            onDelClick={onDelClick}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionNews;
