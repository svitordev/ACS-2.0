"use client";
import { InfoTimeCalc } from "@/utils/infoTime";
import ButtonsEditDel from "../Painel/ButtonsEditDel";
import SpanInfoTime from "./InfoTime";
import Paragraph from "./Paragraph";

function GradeNoticias({ noticia, onEditClick, onDelClick }) {
  const src = noticia.previewUrl || noticia.imagem;
  let border = "";
  if (noticia.previewUrl) {
    border = "border-[4px]  border-green-600";
  } else if (noticia.temporary) {
    border = "border-[4px]  border-red-500";
  }
  return (
    <div className="w-full h-72 md:h-full rounded-lg relative overflow-hidden shadow-lg shadow-black/60">
      <a
        href={noticia.link}
        target="_blank"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`w-full h-full block brightness-[60%] hover:scale-105 ${border} rounded-lg transition-all duration-300`}
      ></a>
      <SpanInfoTime style={"text-sm 2xl:text-base 2xl:top-5 2xl:right-6"}>
        {InfoTimeCalc(noticia)}
      </SpanInfoTime>
      <Paragraph
        style={
          "bottom-6 md:bottom-3 px-8 md:px-2 2xl:px-5 md:text-sm lg:text-base 2xl:text-xl"
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

export default GradeNoticias;
