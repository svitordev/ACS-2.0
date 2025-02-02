import Image from "next/image";
import { useEffect, useState } from "react";

function SlideImage({ imagens }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 768) {
        setImagesPerView(2.3);
      } else {
        setImagesPerView(1.2);
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);

    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
    );
  };

  // Função para verificar se o link é um vídeo
  const isVideo = (src) => {
    return /\.(mp4|webm|ogg)$/i.test(src);
  };

  return (
    <>
      {imagens.length > 1 && (
        <div className="relative w-full lg:w-[85%] xl:w-[82%] px-2 mx-auto">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10 shadow-lg"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 z-10 shadow-lg"
          >
            &#10095;
          </button>

          <div className="overflow-hidden rounded-lg ">
            <div
              className="flex md:gap-2 transition-transform duration-500 "
              style={{
                transform: `translateX(-${
                  (currentIndex / imagesPerView) * 120
                }%)`,
              }}
            >
              {imagens.map((media) => (
                <div
                  key={media.id}
                  className="flex-shrink-0 w-full md:w-1/2 h-80 lg:h-96 2xl:h-[35rem] relative "
                >
                  {isVideo(media.src) ? (
                    <video
                      controls
                      className="rounded-lg object-cover w-full h-full"
                    >
                      <source src={media.src} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <Image
                      src={media.src}
                      alt={media.caption}
                      quality={100}
                      fill={true}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {imagens.length === 1 && (
        <div className="w-full flex justify-center">
          {imagens.map((media) => (
            <div
              key={media.id}
              className="w-full md:w-3/5 h-72 lg:h-80 2xl:w-1/2 2xl:h-96 relative "
            >
              {isVideo(media.src) ? (
                <video
                  src={media.src}
                  controls
                  className="rounded-lg object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={media.src}
                  alt={media.caption}
                  quality={100}
                  fill={true}
                  className="rounded-lg object-cover w-full h-full"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SlideImage;
