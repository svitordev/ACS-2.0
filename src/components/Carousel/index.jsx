"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
export const CarouselEvents = ({ events }) => {
  const isVideo = (src) => {
    return /\.(mp4|webm|ogg)$/i.test(src);
  };
  return (
    <Carousel
      transition={{ duration: 1 }}
      autoplay={true}
      autoplayDelay={8000}
      loop={true}
      className="w-full h-96 md:h-80 lg:h-96 xl:h-[26rem] 2xl:h-[34rem] shadow-lg shadow-blue-900/50 font-sans rounded-lg bg-white"
    >
      {events.map((event, index) => (
        <div className="w-full h-full" key={index}>
          {isVideo(event) ? (
            <video
              controls
              className="h-auto max-w-full rounded-lg object-cover object-center"
            >
              <source src={event} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          ) : (
            <Image
              src={event}
              alt={""}
              width={1000}
              height={100}
              quality={100}
              className="h-full w-full rounded-lg object-cover object-center"
            />
          )}
        </div>
      ))}
    </Carousel>
  );
};
