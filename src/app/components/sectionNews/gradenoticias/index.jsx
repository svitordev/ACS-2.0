"use client";
import { InfoTimeCalc } from "@/hooks/infoTime";
import ButtonsEditDel from "../../../(admin)/components/ButtonsEditDel";
import SpanInfoTime from "../InfoTime";
import Paragraph from "../Paragraph";

function GradeNoticias({ noticia, onEditClick, onDelClick }) {
  const src = noticia.previewUrl || noticia.imagem;
  let border = "";
  if (noticia.previewUrl) {
    border = "border-[4px]  border-red-600";
  } else if (noticia.temporary) {
    border = "border-[4px]  border-yellow-400";
  }
  return (
    <div className="w-full h-56 md:h-full rounded-lg relative overflow-hidden shadow-lg shadow-black/60">
      <a
        href={noticia.link}
        target="_blank"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.3s",
        }}
        className={`w-full h-full block brightness-[60%] hover:scale-105 ${border} rounded-lg`}
      ></a>
      <SpanInfoTime>{InfoTimeCalc(noticia)}</SpanInfoTime>
      <Paragraph style={"bottom-3 px-2"}>{noticia.titulo}</Paragraph>
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
