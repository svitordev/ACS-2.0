"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SlideImage from "./slideImage";

function Gallery({ title, imagens, bg }) {
  

  return (
    <section
      id="gallery"
      className={`${bg} gap-4 flex flex-col items-center justify-center pt-24 pb-28 md:py-28  relative overflow-hidden mt-10`}
    >
      {title}
      <div className="ondaTop"></div>
      <div className="ondaBottom"></div>
            <SlideImage imagens={imagens}/>
    </section>
  );
}

export default Gallery;
