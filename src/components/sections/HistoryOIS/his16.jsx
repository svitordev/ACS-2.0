"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";

function His16() {
  const images = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F16%2Fcantata16.webp",
      caption: "Foto da banda na primeira cantata de natal em 2016.",
    },
  ];
  return (
    <div className="text-center space-y-3">
      <ParagraphHistory>
        1° Cantata de natal da Orquestra Instrumental Surubinense no dia 25 de
        dezembro de 2016.
      </ParagraphHistory>
      <SlideImage imagens={images} />
    </div>
  );
}

export default His16;
