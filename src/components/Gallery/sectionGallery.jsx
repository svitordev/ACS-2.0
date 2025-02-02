"use client";
import SlideImage from "./slideImage";

function Gallery({ title, imagens, bg }) {
  return (
    <section
      
      className={`${bg} gap-4 flex flex-col items-center justify-center pt-24 pb-28 md:py-28 relative overflow-hidden mt-10`}
    >
      {title}
      <div className="ondaTop"></div>
      <div className="ondaBottom"></div>
      <div className="container">
        <SlideImage imagens={imagens} />
      </div>
      
    </section>
  );
}

export default Gallery;
