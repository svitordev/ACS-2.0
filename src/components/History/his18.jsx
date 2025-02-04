"use client";
import SlideImage from "../Gallery/slideImage";
import ParagraphHistory from "./paragraphHistory";
import VideoIframe from "./videoIframe";

function His18() {
  const moments18 = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FMariana4.mp4",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FMariana5.mp4",
    },
  ];
  const imgsCopa = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcopa1.webp",
      caption:
        "Participação da OIS na X Copa Pernambucana de Bandas e fanfarras no ano de 2018",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcopa2.webp",
      caption:
        "Participação da OIS na X Copa Pernambucana de Bandas e fanfarras no ano de 2018",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcopa3.webp",
      caption:
        "Participação da OIS na X Copa Pernambucana de Bandas e fanfarras no ano de 2018",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcopa4.webp",
      caption:
        "Participação da OIS na X Copa Pernambucana de Bandas e fanfarras no ano de 2018",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcopa5.webp",
      caption:
        "Participação da OIS na X Copa Pernambucana de Bandas e fanfarras no ano de 2018",
    },
  ];
  const encontroDesfile = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FdesfileSurubim1.webp",
      caption: "OIS no desfile e aniversário da cidade de Surubim-PE",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FencontroSurubim4.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },

    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FencontroSurubim3.webp",
      caption: "OIS no encontro de bandas de Surubim-PE",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FdesfileSurubim2.webp",
      caption: "OIS no desfile e aniversário da cidade de Surubim-PE",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FdesfileSurubim4.webp",
      caption: "OIS no desfile e aniversário da cidade de Surubim-PE",
    },
    {
      id: 6,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FdesfileSurubim6.webp",
      caption: "OIS no desfile e aniversário da cidade de Surubim-PE",
    },
    {
      id: 7,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2FdesfileSurubim7.webp",
      caption: "OIS no desfile e aniversário da cidade de Surubim-PE",
    },
  ];
  const sonoraBrasilSesc = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fsesc.webp",
      caption: "OIS reunida para foto depois de realizar a abertura do evento.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fsesc1.webp",
      caption: "OIS reunida para foto depois de realizar a abertura do evento.",
    },
  ];
  const sextetoSesc = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fsesc6.mp4",
      caption: "OIS reunida para foto depois de realizar a abertura do evento.",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fsesc2.webp",
      caption: "OIS reunida para foto depois de realizar a abertura do evento.",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fsesc3.webp",
      caption: "OIS reunida para foto depois de realizar a abertura do evento.",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fsesc4.webp",
      caption: "OIS reunida para foto depois de realizar a abertura do evento.",
    },
  ];
  const cantataNatal = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcantata1.webp",
      caption: "OIS no concerto de Natal de 2018",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F18%2Fcantata6.webp",
      caption: "OIS no concerto de Natal de 2018",
    },
  ];

  return (
    <div className="text-center space-y-10">
      <div className="space-y-3">
        <ParagraphHistory>
          Alguns momentos da OIS no ano de 2018.
        </ParagraphHistory>
        <SlideImage imagens={moments18} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          X Copa Pernambucana de Bandas e Fanfarras no ano de 2018.
        </ParagraphHistory>
        <VideoIframe
          src={"https://www.youtube.com/embed/U3pg993-u2U?si=H4jlUlw7YNIxp5bZ"}
        />
        <SlideImage imagens={imgsCopa} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Encontro de Bandas de Surubim-PE no dia 06 de Setembro de 2018 e
          desfile e aniversário de 90 anos da nossa cidade, Surubim-PE no dia 11
          de Setembro de 2018.
        </ParagraphHistory>
        <SlideImage imagens={encontroDesfile} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Na noite do dia 12 de Setembro e 10 de Novembro de 2018 a OIS
          participou do Projeto SONORA BRASIL do Sesc. Fizemos a abertura para a{" "}
          <a
            className="text-red-500"
            href="https://www.instagram.com/bandauniaojosefense/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @bandauniaojosefense
          </a>{" "}
          de Santa Catarina no qual fizemos um grande intercâmbio não só de
          música, mas também de experiências e conhecimento músical e humano.
        </ParagraphHistory>
        <SlideImage imagens={sonoraBrasilSesc} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          Na noite do dia 10 de Dezembro de 2018 nosso SEXTETO foi convidado
          para participar do recital de conclusão das oficinas de musicalização
          infantil do Sesc Ler Surubim. Fizemos uma pequena apresentação para as
          crianças, pais, professores, funcionários e alunos do Sesc Ler
          Surubim.
        </ParagraphHistory>
        <SlideImage imagens={sextetoSesc} />
      </div>
      <div className="space-y-3">
        <ParagraphHistory>
          3° Cantata de natal e aniversário da Orquestra Instrumental
          Surubinense no dia 22 de dezembro de 2018.
        </ParagraphHistory>
        <SlideImage imagens={cantataNatal} />
      </div>
    </div>
  );
}

export default His18;
