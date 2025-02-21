"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";
import VideoIframe from "./videoIframe";

function His23() {
  const concertoTempo = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Ftempo1.webp",
      caption: "OIS no concerto: tempo",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Ftempo2.webp",
      caption: "OIS no concerto: tempo",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Ftempo3.webp",
      caption: "OIS no concerto: tempo",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Ftempo4.webp",
      caption: "OIS no concerto: tempo",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Ftempo5.webp",
      caption: "OIS no concerto: tempo",
    },
    {
      id: 6,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Ftempo6.webp",
      caption: "OIS no concerto: tempo",
    },
  ];
  const encontro = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FencontroSurubim1.webp",
      caption: "OIS no encontro de bandas e fanfarras de Surubim-PE.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FencontroSurubim2.webp",
      caption: "OIS no encontro de bandas e fanfarras de Surubim-PE.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FencontroSurubim3.webp",
      caption: "OIS no encontro de bandas e fanfarras de Surubim-PE.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FencontroSurubim5.webp",
      caption: "OIS no encontro de bandas e fanfarras de Surubim-PE.",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FencontroSurubim7.webp",
      caption: "OIS no encontro de bandas e fanfarras de Surubim-PE.",
    },
  ];
  const desfile = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FdesfileSurubim1.webp",
      caption: "OIS no desfile e aniversário de Surubim-PE.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FdesfileSurubim2.webp",
      caption: "OIS no desfile e aniversário de Surubim-PE.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FdesfileSurubim3.webp",
      caption: "OIS no desfile e aniversário de Surubim-PE.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2FdesfileSurubim4.webp",
      caption: "OIS no desfile e aniversário de Surubim-PE.",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Faniversario4.webp",
      caption: "OIS no desfile e aniversário de Surubim-PE.",
    },
  ];
  const vaquejada = [
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fvaquejada.mp4",
    },
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fvaquejada2.webp",
      caption: "OIS na Vaquejada de Surubim-PE.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fvaquejada1.webp",
      caption: "OIS na Vaquejada de Surubim-PE.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fvaquejada3.webp",
      caption: "OIS na Vaquejada de Surubim-PE.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fvaquejada4.webp",
      caption: "OIS na Vaquejada de Surubim-PE.",
    },
  ];
  const piracaia = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fpiracaia1.webp",
      caption: "OIS em Piracaia-SP",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fpiracaia2.webp",
      caption: "OIS em Piracaia-SP",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fpiracaia3.webp",
      caption: "OIS em Piracaia-SP",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fpiracaia4.webp",
      caption: "OIS na Avenida Paulista em São Paulo",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fpiracaia5.webp",
      caption: "OIS na Avenida Paulista em São Paulo",
    },
  ];
  const recitalEdu = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Frecital1.webp",
      caption: "Eduardo Henrique em sua apresentação no recital de conclusão.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Frecital2.webp",
      caption: "Eduardo Henrique em sua apresentação no recital de conclusão.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Frecital3.webp",
      caption: "Eduardo Henrique em sua apresentação no recital de conclusão.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Frecital4.webp",
      caption: "Eduardo Henrique em sua apresentação no recital de conclusão.",
    },
  ];
  const moments23 = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcaruaru.mp4",
      caption: "OIS no IV ENCONTRO DE BANDAS E FANFARRAS DE CARUARU-PE.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcaruaru1.webp",
      caption: "OIS no IV ENCONTRO DE BANDAS E FANFARRAS DE CARUARU-PE.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fjoaoalfredo1.webp",
      caption: "OIS participação no IV FEST BANFAS - JOÃO ALFREDO - PE",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fjoaoalfredo2.webp",
      caption: "OIS participação no IV FEST BANFAS - JOÃO ALFREDO - PE",
    },
  ];
  const natalGente = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fnatalgente1.webp",
      caption: "OIS no evento: NATAL DA GENTE da prefeitura de Surubim-PE.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fnatalgente6.webp",
      caption: "OIS no evento: NATAL DA GENTE da prefeitura de Surubim-PE.",
    },
  ];
  const cantataNatal = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcantata1.webp",
      caption: "OIS na sua 8°Cantata de natal.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcantata2.webp",
      caption: "OIS na sua 8°Cantata de natal.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcantata3.webp",
      caption: "OIS na sua 8°Cantata de natal.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcantata5.webp",
      caption:
        "Coral raio de sol e quarteto de cordas em sua apresentação na cantata.",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F23%2Fcantata8.webp",
      caption:
        "CIA(companhia de dança da OIS) estava la presente com sua belíssima apresentação junto com a OIS.",
    },
  ];
  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          projeto social orquestra instrumental surubinense - concerto: tempo
          ⏳🎵 no dia 19/08/2023.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/S_S6dZojipY?si=Un1hPNeYufnlIUnQ"}
        />
        <SlideImage imagens={concertoTempo} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          encontro de bandas e fanfarras de surubim-pe no dia 04/09/2023 🎶🎵🎼
          e <br /> 🔰11 de setembro de 2023 - 95 anos de surubim-pe🔰
        </ParagraphHistory>
        <SlideImage imagens={encontro} />
        <SlideImage imagens={desfile} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          vaquejada de surubim 2023 onde fomos convidados para homenagear o
          saudoso sr dão galdino 🏇.
        </ParagraphHistory>
        <SlideImage imagens={vaquejada} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          OIS viajou para piracaia-sp e participou do campeonato sulamericano
          wamsb-2023 conquistando o 6° lugar.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/GApoiWYkml8?si=PZjeA7L7CMZ0FMSx"}
        />
        <SlideImage imagens={piracaia} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          recital de conclusão do curso de licenciatura em música - eduardo
          henrique, ifpe campus belo JARDIM-PE no dia 05/12/2023.
        </ParagraphHistory>
        <SlideImage imagens={recitalEdu} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Alguns momentos da OIS em participações em desfiles das cidades de
          CARUARU-PE e JOÃO ALFREDO-PE no ano de 2023.
        </ParagraphHistory>
        <SlideImage imagens={moments23} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          natal da gente: 2023🎄 - OIS participou do "natal da gente", evento
          realizado pela{" "}
          <a
            className="text-red-500"
            href="https://surubim.pe.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            prefeitura de surubim-pe.
          </a>
        </ParagraphHistory>
        <SlideImage imagens={natalGente} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          viii cantata de natal da ois 2023🎄Participação do CORAL RAIO DE SOL,
          do QUARTETO DE CORDAS e do nosso CORPO COREOGRÁFICO abrilhantando o
          evento.
        </ParagraphHistory>
        <SlideImage imagens={cantataNatal} />
      </div>
    </div>
  );
}

export default His23;
