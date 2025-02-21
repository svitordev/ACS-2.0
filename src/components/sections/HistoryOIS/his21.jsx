"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";

function His21() {
  const semFome = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2FliveSolidaria.webp",
      caption: "OIS na live solidária da campanha SURUBIM SEM FOME.",
    },
  ];
  const encontroDesfile1 = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile1.webp",
      caption: "Nossa baliza Anayran Maria.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile2.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },

    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile3.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile4.webp",
      caption: "OIS no desfile da cidade de Surubim-PE..",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile5.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
  ];
  const encontroDesfile2 = [
    {
      id: 7,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile7.webp",
      caption: "Nosso balizador Vinícius Bertoncine.",
    },
    {
      id: 8,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile8.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
    {
      id: 9,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile9.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
    {
      id: 10,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile10.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
    {
      id: 11,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile11.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
    {
      id: 12,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fdesfile12.webp",
      caption: "OIS no desfile da cidade de Surubim-PE.",
    },
  ];
  const cantataNatal1 = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata6.webp",
      caption: "OIS na cantata de natal de 2021.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata5.webp",
      caption: "OIS na cantata de natal de 2021.",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata7.webp",
      caption: "OIS na cantata de natal de 2021.",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata13.webp",
      caption: "CIA(companhia de dança) na cantata de natal de 2021",
    },
  ];
  const cantataNatal2 = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata10.webp",
      caption:
        "Família de Leandro ao qual foi homenageado na cantata de natal de 2021.",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata9.webp",
      caption: "OIS na cantata de natal de 2021",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata14.webp",
      caption:
        "Coral raio de sol do Sesc Surubim-PE na cantata de natal de 2021",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata15.webp",
      caption: "Nosso conterrânio cantor cirânda na cantata de natal de 2021",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/ois%2Fhistorico%2F21%2Fcantata12.webp",
      caption: "OIS na cantata de natal de 2021",
    },
  ];

  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          QUEM TEM FOME TEM PRESSA! <br />
          LIVE SOLIDÁRIA da campanha SURUBIM SEM FOME realizada no dia 18 de
          Julho de 2021.
        </ParagraphHistory>
        <SlideImage imagens={semFome} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          93 ANOS DE EMANCIPAÇÃO POLÍTICA DE SURUBIM-PE 💚💙🤍
          <br />
          11 DE SETEMBRO DIA DA EMANCIPAÇÃO POLÍTICA DE SURUBIM-PE.
        </ParagraphHistory>
        <SlideImage imagens={encontroDesfile1} />
        <SlideImage imagens={encontroDesfile2} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          V CANTATA DE NATAL E ANIVERSÁRIO DA OIS 🎄
          <br />
          homenagem ao nosso músico LEANDRO LUIZ DA SILVA, que recentemente
          tinha partido para morar ao lado de Deus.
        </ParagraphHistory>
        <SlideImage imagens={cantataNatal1} />
        <SlideImage imagens={cantataNatal2} />
      </div>
    </div>
  );
}

export default His21;
