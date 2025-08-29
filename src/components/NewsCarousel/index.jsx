'use client';
import { Carousel } from "@material-tailwind/react";
import { News } from "./news";
import { news } from "@/data/news";
export const CarouselNews = () => {
    

  return (
    <Carousel transition={{ duration: 1 }} autoplay={true} autoplayDelay={5000} loop={true} className="w-full  h-[26rem] md:h-[32rem] lg:h-96 xl:h-[28rem] 2xl:h-[32rem] 3xl:h-[44rem] shadow-lg shadow-secundary-3 font-sans">
      {news.map((noticia, index) => (
        <News key={index} link={noticia.link} srcImg={noticia.srcImg} title={noticia.title}/>
      ))}
    </Carousel>
  );
};
