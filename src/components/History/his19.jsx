"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";
import VideoIframe from "./videoIframe";

function His19() {
  const concertoAdilson = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fconcerto10.mp4",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fconcerto1.webp",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fconcerto4.webp",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fconcerto5.webp",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fconcerto6.webp",
      caption: "Foto do concerto musical PROFESSOR ADILSON FERREIRA",
    },
  ];
  const encontroDesfile = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FencontroSurubim1.webp",
      caption: "OIS no encontro de bandas de Surubim-PE.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FencontroSurubim2.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },

    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FencontroSurubim5.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FencontroSurubim10.webp",
      caption: "OIS no encontro de bandas de Surubim-PE.",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FdesfileSurubim6.webp",
      caption: "OIS no desfile de Surubim-PE.",
    },
    {
      id: 6,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FdesfileSurubim3.webp",
      caption: "OIS no desfile de Surubim-PE.",
    },
    {
      id: 7,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FdesfileSurubim2.webp",
      caption: "OIS no desfile de Surubim-PE.",
    },
  ];
  const RN1 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN1.webp",
      caption: "Apresentação no centro cultural em Natal-RN",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN2.webp",
      caption: "Apresentação no centro cultural em Natal-RN",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN3.webp",
      caption: "Apresentação no centro cultural em Natal-RN",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN5.webp",
      caption: "OIS na praia de Natal.",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN6.webp",
      caption: "OIS em frente a entrada do maior cajueiro do mundo.",
    },
    {
      id: 6,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN8.webp",
      caption: "Apresentação no centro cultural em Natal-RN",
    },
  ];
  const RN2 = [
    {
      id: 7,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN9.webp",
      caption: "OIS no letreiro Natal-RN.",
    },
    {
      id: 8,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN12.webp",
      caption: "OIS na apresentação do concurso interestadual de bandas e fanfarras 2019",
    },
    {
      id: 9,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN10.webp",
      caption: "OIS na apresentação do concurso interestadual de bandas e fanfarras 2019",
    },
    {
      id: 10,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN11.webp",
      caption: "OIS na apresentação do concurso interestadual de bandas e fanfarras 2019",
    },
    {
      id: 11,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2FRN13.webp",
      caption: "OIS na apresentação do concurso interestadual de bandas e fanfarras 2019",
    },
  ];
  const moments19 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcaruaru1.mp4",
    },
  ];
  const cantataNatal1 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata1.webp",
      caption: "OIS na cantata de natal de 2019.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata2.webp",
      caption: "OIS na cantata de natal de 2019.",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata3.webp",
      caption: "OIS na cantata de natal de 2019.",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata4.webp",
      caption: "OIS na cantata de natal de 2019.",
    },
  ];
  const cantataNatal2 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata5.webp",
      caption: "OIS na cantata de natal de 2019.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata6.webp",
      caption: "OIS na cantata de natal de 2019.",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F19%2Fcantata7.webp",
      caption: "OIS na cantata de natal de 2019.",
    }
  ];

  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          CONCERTO MUSICAL PROFESSOR ADILSON FERREIRA. Realizado pela a
          Orquestra Instrumental Surubinense, no dia 17 de Agosto de 2019 no
          auditório da escola Severino Farias Surubim-PE.
        </ParagraphHistory>
        <SlideImage imagens={concertoAdilson} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Encontro de Bandas de Surubim-PE no dia 09 de Setembro de 2019 e
          desfile e aniversário de 91 anos da nossa cidade, Surubim-PE no dia 11
          de Setembro de 2019.
        </ParagraphHistory>
        <SlideImage imagens={encontroDesfile} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          II concurso de bandas e fanfarras do Jordão, no bairro do Ibura, na
          cidade de Recife-PE. No dia 29 de Setembro de 2019
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/mrCqUJvmG74?si=PRo2YO4OiJTM0fuw"}
        />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Viagem para Natal-RN 15 de Novembro de 2019. Para participar do
          CONCURSO INTERESTADUAL DE BANDAS E FANFARRAS 2019 SÃO GONÇALO DO
          AMARANTE - RN.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/vLca44qGIK4?si=DV54_ZL6ECKfxUdO"}
        />
        <SlideImage imagens={RN1} />
        <SlideImage imagens={RN2} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Alguns momentos da OIS em participações em desfiles das cidades de
          CARUARU-PE e JOÃO ALFREDO-PE no ano de 2019.
        </ParagraphHistory>
        <SlideImage imagens={moments19} />
        <VideoIframe
          src={"https://www.youtube.com/embed/AOn6134oJds?si=IWaAGin6X3kTkT1S"}
        />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          4° Cantata de natal e aniversário da Orquestra Instrumental
          Surubinense no dia 22 de dezembro de 2019.
        </ParagraphHistory>
        <SlideImage imagens={cantataNatal1} />
        <SlideImage imagens={cantataNatal2} />
      </div>
    </div>
  );
}

export default His19;
