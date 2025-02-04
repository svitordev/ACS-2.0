"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";
import VideoIframe from "./videoIframe";

function His24() {
  const nossasRaizes = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2Fnossasraizes1.webp",
      caption: "OIS na realização do concerto nossas raizes.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2Fnossasraizes2.webp",
      caption: "OIS na realização do concerto nossas raizes.",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2Fnossasraizes4.webp",
      caption: "OIS na realização do concerto nossas raizes.",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2Fnossasraizes3.webp",
      caption: "OIS na realização do concerto nossas raizes.",
    },
  ];
  const XVcopa = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2Fcopa24.webp",
      caption: "OIS na entrada da XV copa Pernambucana.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2Fbaliza-dor.webp",
      caption: "Nosso balizador e baliza na apresentação na copa pernambucana.",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FCCcopa24.webp",
      caption: "Nosso corpo coreografico na apresentação na copa pernambucana.",
    },
  ];
  const dayTrompete = [
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FdiaT1.webp",
      caption: "foto do pessoal que participou do DIA DO TROMPETE",
    },
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FdiaT2.webp",
      caption: "foto do pessoal que participou do DIA DO TROMPETE",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FdiaT3.webp",
      caption: "foto do pessoal que participou do DIA DO TROMPETE",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FdiaT6.webp",
      caption: "foto do pessoal que participou do DIA DO TROMPETE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FdiaT4.webp",
      caption:
        "foto da OIS recepcionando o pessoal que participou do DIA DO TROMPETE",
    },
    {
      id: 6,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F24%2FdiaT5.webp",
      caption: "foto do pessoal que participou do DIA DO TROMPETE",
    },
  ];
  const wamsb = [
    {
      id: 5,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB1.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
    {
      id: 1,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB2.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB3.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB5.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB6.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
    {
      id: 6,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB7.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
    {
      id: 7,
      src: "https://www.acs.art.br/ois/historico/24/WAMSB8.webp",
      caption: "OIS no campeonato WAMSB regional norte e nordeste",
    },
  ];

  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          NOSSAS RAÍZES 🌵☀️ Concerto realizado na praça de nossa cidade evento
          esse com incentivo da LEI PAULO GUSTAVO, MINISTÉRIO DA CULTURA em
          parceria com a PREFEITURA MUNICIPAL DE SURUBIM.
        </ParagraphHistory>
        <SlideImage imagens={nossasRaizes} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          XV COPA PERNAMBUCANA DE BANDAS E FANFARRAS DE PERNAMBUCO DIA 18/05/24,
          Caruaru-PE.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/-ITvBLvPokU?si=r4h1VXxP3gRRnC5P"}
        />
        <VideoIframe
          src={"https://www.youtube.com/embed/bPLxWy1eA1I?si=xZVECCtxxumG1Y9Z"}
        />
        <SlideImage imagens={XVcopa} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          𝑫𝑰𝑨 𝑫𝑶 𝑻𝑹𝑶𝑴𝑷𝑬𝑻𝑬 𝑫𝑨 𝑼𝑭𝑷𝑬 - 𝑶𝑰𝑺 🎺 - dia 09 de junho de 2024 foi
          realizado o MASTER CLASS com o professor M.e Helder Passinho Jr,
          docente do curso de música e da classe de trompete da Universidade
          Federal de Pernambuco do campus Recife-PE junto com sua equipe.
        </ParagraphHistory>
        <SlideImage imagens={dayTrompete} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          𝐖𝐀𝐌𝐒𝐁 𝐈𝐍𝐓𝐄𝐑𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋- 𝐑𝐄𝐆𝐈𝐎𝐍𝐀𝐋 𝐍𝐎𝐑𝐓𝐄 𝐄 𝐍𝐎𝐑𝐃𝐄𝐒𝐓𝐄 🌵
        </ParagraphHistory>
        <SlideImage imagens={wamsb} />
      </div>
    </div>
  );
}

export default His24;
