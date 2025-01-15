"use client";
import { InfoTimeCalc } from "@/hooks/infoTime";
import ButtonsEditDel from "../../(admin)/components/ButtonsEditDel";
import SpanInfoTime from "./InfoTime";
import Paragraph from "./Paragraph";

function SlideShow({ noticia, slideRef, index, onEditClick, onDelClick }) {
  const src = noticia.previewUrl || noticia.imagem;
  let border = "";
  if (noticia.previewUrl) {
    border = "border-[4px]  border-red-600";
  } else if (noticia.temporary) {
    border = "border-[4px]  border-yellow-400";
  }
  return (
    <div
      ref={(el) => {
        if (el) slideRef.current[index] = el;
      }}
      className="w-full h-full"
    >
      <a
        href={noticia.link}
        target="_blank"
        className={`mySlides fade w-full h-full block brightness-[60%] rounded-lg  hover:scale-105 ${border} transition-all duration-300`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></a>
      <SpanInfoTime>{InfoTimeCalc(noticia)}</SpanInfoTime>
      <Paragraph
        style={
          "bottom-8 2xl:bottom-14 text-center md:text-xl lg:text-2xl 2xl:text-4xl px-6 2xl:px-16"
        }
      >
        {noticia.titulo}
      </Paragraph>
      {onEditClick && onDelClick && (
        <ButtonsEditDel
          onEditClick={() => onEditClick(noticia)}
          onDelClick={() => onDelClick(noticia)}
        />
      )}
    </div>
  );
}

export default SlideShow;
