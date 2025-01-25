"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Gallery({ title, imagens, bg }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(1);

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerView(2.3); // Desktop
      } else if (window.innerWidth >= 768) {
        setImagesPerView(2.3); // Tablet
      } else {
        setImagesPerView(1.2); // Mobile
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

  return (
    <section
      id="gallery"
      className={`${bg} gap-4 flex flex-col items-center justify-center pt-24 pb-28 md:py-28  relative overflow-hidden mt-10`}
    >
      {title}
      <div className="ondaTop"></div>
      <div className="ondaBottom"></div>
      <div className="relative w-full lg:w-[85%] xl:w-[70%] 2xl:w-[60%] px-2 mx-auto">
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
            {imagens.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full md:w-1/2  h-72 lg:h-80 relative"
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  quality={100}
                  fill={true}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
