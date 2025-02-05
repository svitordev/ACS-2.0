"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";
import VideoIframe from "./videoIframe";

function His22() {
  const bandasPE1 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE1.webp",
      caption: "OIS se apresentando no evento bandas de PE",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE2.webp",
      caption: "OIS se apresentando no evento bandas de PE",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE3.webp",
      caption: "OIS se apresentando no evento bandas de PE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE4.webp",
      caption: "Mestres e professores se apresentando",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE5.webp",
      caption: "Palhetas de bandas de PE se apresentando",
    },
    {
      id: 6,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE6.webp",
      caption: "Todos que participou reunido para foto",
    },
    {
      id: 7,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbandasPE7.webp",
      caption: "Mestres e professores de bandas de PE",
    },
  ];
  const bandasPE2 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbbandasPE1.webp",
      caption: "balizas da OIS",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbbandasPE2.webp",
      caption: "balizas da OIS",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbbandasPE3.webp",
      caption: "balizas da OIS",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FbbandasPE4.webp",
      caption: "balizas da OIS",
    },
  ];
  const encontroBandas = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FencontroSurubim1.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FencontroSurubim2.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FencontroSurubim3.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FencontroSurubim5.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FencontroSurubim6.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
  ];
  const desfile = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fvideo.mp4",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FdesfileSurubim1.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fbalizasdesfile.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
  ];
  const mostraArtes = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FamostraSesc1.webp",
      caption:
        "participação da OIS na Mostra de Artes do Sesc Ler Surubim 2022.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2FamostraSesc3.webp",
      caption:
        "participação da OIS na Mostra de Artes do Sesc Ler Surubim 2022.",
    },
  ];
  const copaXIV = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcopa1.webp",
      caption: "OIS na XVI ETAPA DA COPA PERNAMBUCANA DE BANDAS E FANFARRAS.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcopa2.webp",
      caption: "OIS na XVI ETAPA DA COPA PERNAMBUCANA DE BANDAS E FANFARRAS.",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcopa3.webp",
      caption: "OIS na XVI ETAPA DA COPA PERNAMBUCANA DE BANDAS E FANFARRAS.",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcopa4.webp",
      caption: "OIS na XVI ETAPA DA COPA PERNAMBUCANA DE BANDAS E FANFARRAS.",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcopa5.webp",
      caption: "OIS na XVI ETAPA DA COPA PERNAMBUCANA DE BANDAS E FANFARRAS.",
    },
  ];
  const luauJuventude = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fjuventude1.webp",
      caption:
        "OIS participando do último LUAU DA JUVENTUDE na casa das juventudes de Surubim-PE",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fjuventude2.webp",
      caption:
        "OIS participando do último LUAU DA JUVENTUDE na casa das juventudes de Surubim-PE",
    },
  ];
  const moments22 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fbomjardim5.webp",
      caption: "OIS em BOM JARDIM-PE",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fjoaoalfredo1.webp",
      caption: "OIS em BOM JARDIM-PE",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fpontadpedra1.webp",
      caption: "OIS em Ponta de pedras-PE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fsantamaria1.webp",
      caption: "OIS no encontro de bandas de Santa Maria do Cambucá-PE",
    },
  ];
  const cantataNatal = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcantata1.webp",
      caption: "OIS na cantata de natal de 2022.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F22%2Fcantata2.webp",
      caption: "OIS na cantata de natal de 2022.",
    },
  ];
  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          PROJETO BANDAS DE PE 🎼🎶 - O PROJETO SOCIAL ORQUESTRA INSTRUMENTAL
          SURUBINENSE em parceria com o CONSERVATÓRIO PERNAMBUCANO DE MÚSICA e a
          PREFEITURA MUNICIPAL DE SURUBIM e ESCOLA TÉCNICA ANTÔNIO ARRUDA DE
          FARIAS realizou nos dias 12, 13 e 14 de Agosto de 2022 o Projeto
          Bandas de PE.
        </ParagraphHistory>
        <SlideImage imagens={bandasPE1} />
        <SlideImage imagens={bandasPE2} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          ENCONTRO DE BANDAS E FANFARRAS de nossa querida SURUBIM-PE no dia
          05/09/2022.
        </ParagraphHistory>
        <SlideImage imagens={encontroBandas} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Desfile e aniversário de 94 anos da nossa cidade, Surubim-PE no dia 11
          de Setembro de 2022.
        </ParagraphHistory>
        <SlideImage imagens={desfile} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          participação da OIS na Mostra de Artes do Sesc Ler Surubim 2022.
        </ParagraphHistory>
        <SlideImage imagens={mostraArtes} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          XIV COPA PERNAMBUCANA DE BANDAS E FANFARRAS DE PERNAMBUCO dia
          15/11/22, Surubim-PE.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/5y29NVKflLo?si=lqdju26ECUhKPl4n"}
        />
        <SlideImage imagens={copaXIV} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          participando do último LUAU DA JUVENTUDE na casa das juventudes de
          Surubim-PE no dia 16/12/2022.
        </ParagraphHistory>
        <SlideImage imagens={luauJuventude} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Alguns momentos da OIS em participações em desfiles das cidades de Bom
          JARDIM-PE, JOÃO ALFREDO-PE, Ponta de pedra-PE e Santa Maria do
          Cambucá-PE no ano de 2022.
        </ParagraphHistory>
        <SlideImage imagens={moments22} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          7° Cantata de natal da Orquestra Instrumental Surubinense no dia 25 de
          dezembro de 2022.
        </ParagraphHistory>
        <SlideImage imagens={cantataNatal} />
      </div>
    </div>
  );
}

export default His22;
