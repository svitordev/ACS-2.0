"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";
import VideoIframe from "./videoIframe";

function His17() {
  const desEnc17 = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2FdesfileSurubim2.webp",
      caption: "OIS no encontro de bandas de 2017",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2FdesfileVideo.mp4",
      caption: "OIS no encontro de bandas de 2017",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2FencontroSurubim16.webp",
      caption: "OIS no encontro de bandas de 2017",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2FdesfileSurubim.webp",
      caption: "OIS no encontro de bandas de 2017",
    },
  ];
  const concertoNatalImg = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2Fcantata17.4.webp",
      caption: "Foto da OIS no concerto de Natal de 2017",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2Fcantata17.1.webp",
      caption: "Foto da OIS no concerto de Natal de 2017",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2Fcantata17.5.webp",
      caption: "Foto da OIS no concerto de Natal de 2017",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2Fcantata17.7.webp",
      caption: "Foto da OIS no concerto de Natal de 2017",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F17%2FcantataCC.webp",
      caption: "Foto da OIS no concerto de Natal de 2017",
    },
  ];
  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          Desfile e encontro de bandas de Surubim-PE em setembro de 2017.
        </ParagraphHistory>
        <SlideImage imagens={desEnc17} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          OIS participou da competição COBANFIGG ainda no ano de 2017.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/kuZRg5HmEAE?si=z7HPO3Xph3-CElod"}
        />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          2° Cantata de natal e aniversário da Orquestra Instrumental
          Surubinense no dia 22 de dezembro de 2017.
        </ParagraphHistory>
        <SlideImage imagens={concertoNatalImg} />
      </div>
    </div>
  );
}

export default His17;
