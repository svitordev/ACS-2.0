"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";

function His20() {
  const grupoEstudos = [
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Fpaudearara.mp4",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Festudo1.webp",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Festudo2.webp",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Festudo3.mp4",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
  ];
  const caminharte = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Fcaminharte4.webp",
      caption: "OIS no encontro de bandas de Surubim-PE.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Fcaminharte5.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },

    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Fcaminharte7.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F20%2Fcaminharte9.webp",
      caption: "OIS no encontro de bandas de Surubim-PE.",
    },
  ];

  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          Por conta do início da pandemia em 2020 mantivemos estudos onlines e
          presencial com grupo reduzido.
        </ParagraphHistory>
        <SlideImage imagens={grupoEstudos} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          C A M I N H A R T E 🎶🎵🎼 - CAMINHADA PELA ARTE <br />O Projeto
          Social Orquestra Instrumental Surubinense, realizou no dia 01 de
          Novembro de 2020, uma caminhada pelas as principais ruas da cidade,
          levando muita música, dança e principalmente ARTE.
        </ParagraphHistory>
        <SlideImage imagens={caminharte} />
      </div>
    </div>
  );
}

export default His20;
