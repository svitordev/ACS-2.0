import TitleSections from "@/components/sections/TitleSections";
import About from "@/components/sections/About";
import Paragraph from "@/components/sections/About/Paragraph";
import Contacts from "@/components/sections/Contacts";
import BoxLogoLinks from "@/components/sections/Contacts/BoxLogoLinks";
import Li from "@/components/sections/Contacts/Li";
import LinkSvitor from "@/components/sections/Contacts/LinkSvitor";
import LinksContact from "@/components/sections/Contacts/Links";
import Gallery from "@/components/sections/Gallery/sectionGallery";
import Header from "@/components/sections/Header";
import Hire from "@/components/sections/Hire";
import Home from "@/components/sections/Home";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./dmf.css";
import { BackToTopButton } from "@/components/BackToTopButton";
import { TitleGallery } from "@/components/sections/Gallery/titleGallery";

export const metadata = {
  title: "D´metade no Frevo",
  description:
    "Página da dmetade no frevo, um dos projetos da Associação Cultural Surubinense",
  keywords: [
    "ACS",
    "Associação Cultural Surubinense",
    "Surubim",
    "Cultura",
    "OIS",
    "Orquestra Instrumental Surubinense",
    "CIA",
    "Redphoenix",
    "percussão da ois",
    "Levanta defunto",
    "de metade no frevo",
    "dmetade",
    "frevo",
    "carnaval",
    "bloco",
    "palhaço",
    "musico",
    "palhamusicos",
  ],
  openGraph: {
    title: "D´metade no Frevo",
    description:
      "Página da dmetade no frevo, um dos projetos da Associação Cultural Surubinense",
    url: "https://acs.art.br/",
    images: [
      {
        url: "https://cdn.acs.art.br/acs/estrutura/logo-acs.png",
        width: 800,
        height: 600,
        alt: "Logo da Associação Cultural Surubinense",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D´metade no Frevo",
    description:
      "Página da dmetade no frevo, um dos projetos da Associação Cultural Surubinense",
    images: ["https://cdn.acs.art.br/acs/estrutura/logo-acs.png"],
  },
  icons: {
    icon: "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2FlogoDmetade1.png",
    shortcut:
      "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2FlogoDmetade1.png",
    apple:
      "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2FlogoDmetade1.png",
  },
};
function DMF() {
  const links = {
    gallery: "Galeria",
    about: "Sobre",
    hire: "Contrate",
    contacts: "Contatos",
  };
  const images = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/dmetade%2FDmetade.mp4",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/dmetade%2Fdestaque1.webp",
      caption: "Orquestra D´metade no frevo se apresentando",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/dmetade%2Fdestaque2.webp",
      caption: "Orquestra D´metade no frevo se apresentando",
    },
  ];
  return (
    <div>
      <Header
        linkacs={
          <Link href={"/acs"} className="p-3">
            ACS
          </Link>
        }
        links={links}
        ClassHeader={"headerDMF"}
      >
        <Image
          width="100"
          height="100"
          className="w-16 2xl:w-20"
          src={
            "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2FlogoDmetade1.png"
          }
          alt={"Logo da companhia de dança da ois"}
        />
      </Header>

      <Home
        srcVideo={"https://cdn.acs.art.br/dmetade%2FdMetadeHome.mp4"}
        section={"gallery"}
        classHome={"homeDMF"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          D´METADE NO <br /> FREVO
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">Janeiro de 2021</p>
      </Home>

      <Gallery
        bg={"bg-dmf-gradient"}
        title={
          <TitleGallery color={"text-yellow-500"}/>
        }
        imagens={images}
      />

      <About
        title={
          <TitleSections color={"text-yellow-500"}>
            D´METADE NO FREVO
          </TitleSections>
        }
      >
        <Paragraph>
          Em 2021, nasceu a D’Metade, uma Pocket Orquestra de frevo com uma
          proposta singular: ser metade de uma orquestra padrão de rua. Essa
          formação reduzida permite apresentações versáteis em diversos
          ambientes, como bares, restaurantes e clubes.
        </Paragraph>
        <Paragraph>
          A D’METADE NO FREVO surge com a missão de explorar a base tradicional
          do frevo e misturá-la com outros ritmos e gêneros musicais.
          Acreditamos que é possível transmitir toda a energia e alegria do
          frevo mesmo com um grupo menor.
        </Paragraph>
        <Paragraph>
          Em 2024, a D’METADE teve a honra de participar do maior carnaval do
          mundo, nas cidades de Olinda e Recife. Além disso, levamos nossa
          música para nossa cidade natal, Surubim, e suas redondezas.
        </Paragraph>
        <Paragraph>
          A D’Metade no Frevo é uma ramificação do projeto maior da OIS
          (Orquestra Instrumental Surubinense), explorando misturas e texturas
          musicais em sua formação. Com ousadia e autenticidade, celebramos a
          cultura e a paixão pela música, mostrando que o frevo pode ser
          vibrante mesmo em um grupo compacto.🎶🎺🥁
        </Paragraph>
      </About>
      <Hire
        title={
          <TitleSections color={"text-yellow-500"}>
            Nos contrate para seu evento!
          </TitleSections>
        }
        srcVideo={"https://cdn.acs.art.br/dmetade%2FcontratarDM.mp4"}
      >
        <Paragraph>
          D’Metade no Frevo: A Trilha Sonora Perfeita para o Seu Evento! 🎉🎺
        </Paragraph>
        <Paragraph>
          Você está planejando um evento especial? Quer torná-lo inesquecível
          com música vibrante e autêntica? A D’Metade no Frevo está aqui para
          fazer parte desse momento único!
        </Paragraph>
        <Paragraph>Por que escolher a D’Metade no Frevo?</Paragraph>
        <Paragraph>
          🎵 Repertório Contagiante: Nossa Pocket Orquestra traz o melhor do
          frevo, com pitadas de outros ritmos e gêneros musicais. Do tradicional
          ao contemporâneo, temos algo para todos os gostos!
        </Paragraph>
        <Paragraph>
          🎺 Energia e Alegria: O frevo é sinônimo de festa e celebração. Com
          nossos músicos talentosos, garantimos que seus convidados vão dançar e
          se divertir.
        </Paragraph>
        <Paragraph>
          🎶 Adaptação a Diferentes Ambientes: Seja um casamento, aniversário,
          festa escolar, recepção ou evento corporativo, estamos prontos para
          criar a atmosfera perfeita.
        </Paragraph>
        <Paragraph>
          Não deixe a festa sem frevo! Contrate a D’Metade e faça do seu evento
          uma verdadeira folia! 🎊🎺🔥
        </Paragraph>
        <Paragraph>
          Entre em contato pelo{" "}
          <a
            href="https://wa.me/5581999075419"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600"
          >
            WhatsApp
          </a>
          !
        </Paragraph>
      </Hire>
      <Contacts bg={"border-yellow-500 bg-dmf-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2FlogoDmetade1.png"
            alt="logo CIA"
            quality={100}
            width={300}
            height={300}
            className="logoFooter w-1/2 md:w-[25%] lg:w-[18%] xl:w-[12%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2 h-28">
              <Li>
                <FaInstagram size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.instagram.com/dmetadenofrevo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Li>
              <Li>
                <FaWhatsapp size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://wa.me/5581999075419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Li>
              <Li>
                <FaYoutube size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.youtube.com/@orquestrainstrumentalsurub2277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube - OIS
                </a>
              </Li>
            </ul>
          </LinksContact>
        </BoxLogoLinks>
        <LinkSvitor />
      </Contacts>
      <BackToTopButton color={"bg-yellow-500 text-yellow-500"} />

    </div>
  );
}

export default DMF;
