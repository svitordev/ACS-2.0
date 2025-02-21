import TitleSections from "@/components/TitleSections";
import About from "@/components/sections/About";
import Paragraph from "@/components/sections/About/Paragraph";
import Contacts from "@/components/sections/Contacts";
import BoxLogoLinks from "@/components/sections/Contacts/BoxLogoLinks";
import Li from "@/components/sections/Contacts/Li";
import LinkSvitor from "@/components/sections/Contacts/LinkSvitor";
import LinksContact from "@/components/sections/Contacts/Links";
import Gallery from "@/components/sections/Gallery/sectionGallery";
import Header from "@/components/sections/Header";
import Home from "@/components/sections/Home";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaRegEnvelope,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./rp.css";
import { BackToTopButton } from "@/components/BackToTopButton";

export const metadata = {
  title: "Red Phoenix Percussion - OIS",
  description:
    "Página da REDPHOENIX,Percussão da Orquestra Instrumental Surubinense e um dos projetos da Associação Cultural Surubinense",
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
    title: "Red Phoenix Percussion - OIS",
    description:
      "Página da REDPHOENIX,Percussão da Orquestra Instrumental Surubinense e um dos projetos da Associação Cultural Surubinense",
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
    title: "Red Phoenix Percussion - OIS",
    description:
      "Página da REDPHOENIX,Percussão da Orquestra Instrumental Surubinense e um dos projetos da Associação Cultural Surubinense",
    images: ["https://cdn.acs.art.br/acs/estrutura/logo-acs.png"],
  },
  icons: {
    icon: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/acs%2Festrutura%2Fprojetos%2FlogoRedPhoenixRedonda.png",
    shortcut:
      "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/acs%2Festrutura%2Fprojetos%2FlogoRedPhoenixRedonda.png",
    apple:
      "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/acs%2Festrutura%2Fprojetos%2FlogoRedPhoenixRedonda.png",
  },
};
function RP() {
  const links = {
    gallery: "Galeria",
    about: "Sobre",
    contacts: "Contatos",
  };
  const images = [
    {
      id: 9,
      src: "https://cdn.acs.art.br/rp%2Fapresentacao.mp4",
    },
    {
      id: 1,
      src: "https://cdn.acs.art.br/rp%2FRP23.2.webp",
      caption: "Percussão da OIS de 2023",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/rp%2FRP23.1.webp",
      caption: "Percussão da OIS de 2024",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/rp%2FRP23.webp",
      caption: "Percussão da OIS de 2023",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/rp%2Fsulamericano3.webp",
      caption: "Percussão da OIS de 2023 no sulamericano da WAMSB",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/rp%2Fsulamericano1.webp",
      caption: "Percussão da OIS de 2023 no sulamericano da WAMSB",
    },
    {
      id: 6,
      src: "https://cdn.acs.art.br/rp%2Fsulamericano2.webp",
      caption: "Percussão da OIS de 2023 no sulamericano da WAMSB",
    },
    {
      id: 7,
      src: "https://cdn.acs.art.br/rp%2Fsulamericano4.webp",
      caption: "Percussão da OIS de 2023 no sulamericano da WAMSB",
    },
    {
      id: 8,
      src: "https://cdn.acs.art.br/rp%2Fsulamericano5.webp",
      caption: "Percussão da OIS de 2023 no sulamericano da WAMSB",
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
        ClassHeader={"headerRP"}
      >
        <Image
          width="100"
          height="100"
          className="w-28 2xl:w-24 my-2"
          src={"https://cdn.acs.art.br/rp/logoRP.png"}
          alt={"Logo da companhia de dança da ois"}
        />
      </Header>

      <Home
        srcVideo={"https://cdn.acs.art.br/rp%2FRedPhoenix.mp4"}
        section={"gallery"}
        classHome={"homeRP"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          Red Phoenix <br /> Percussion OIS
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">Setembro de 2022</p>
      </Home>

      <Gallery
        bg={"bg-rp-gradient"}
        title={
          <h1
            id="gallery"
            className="absolute top-2 left-[5.5rem] md:top-10 md:left-16 lg:left-[7.5rem] xl:left-56 2xl:left-72 z-10 text-gray-800 text-3xl 2xl:text-4xl font-extrabold uppercase"
          >
            Galeria
          </h1>
        }
        imagens={images}
      />

      <About
        title={
          <TitleSections color={"text-gray-800"}>
            RED PHOENIX PERCUSSION OIS
          </TitleSections>
        }
      >
        <Paragraph>
          A <strong>Red Phoenix Percussion</strong>, grupo de percussão
          rudimentar da
          <strong> Orquestra Instrumental Surubinense (OIS)</strong>, tem suas
          raízes fincadas no solo de Surubim. Formada por músicos excepcionais
          da nossa cidade, a Red Phoenix Percussion destaca-se pela qualidade e
          autenticidade de seus arranjos e melodias, que transitam entre o
          popular e o erudito.
        </Paragraph>
        <Paragraph>
          Nossa percussão rudimentar é uma celebração da
          <strong> cultura local e mundial,</strong> incorporando instrumentos
          tradicionais e técnicas ancestrais. Os percussionistas da Red Phoenix
          mantêm o ritmo pulsante, utilizando Tenores Drum, pratos, snare, Bass
          Drum, dentre outros elementos como: güira, triangulo e conga, que
          ecoam a tradição e a paixão pela música.
        </Paragraph>
        <Paragraph>
          O nome “Red Phoenix Percussion” não é apenas uma escolha casual. Ele
          simboliza renascimento, vitalidade e resiliência. Assim como a fênix
          que renasce das cinzas, nossa música transcende fronteiras e ressoa
          com a alma da nossa comunidade.
        </Paragraph>
        <Paragraph>
          Com ousadia e autenticidade, a Red Phoenix Percussion mantém viva a
          tradição musical e a conexão com nossa história.
        </Paragraph>
      </About>

      <Contacts bg={"border-gray-800 bg-rp-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://cdn.acs.art.br/rp%2FlogoPercussaoSemFundo.png"
            alt="logo Red Phoenix Percussion OIS"
            quality={100}
            width={300}
            height={300}
            className="logoFooter w-1/2 md:w-[23%] lg:w-[16%] xl:w-[12%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2 h-28">
              <Li>
                <FaInstagram size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.instagram.com/redphoenixpercussionois/"
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
              <Li>
                <FaTiktok size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.tiktok.com/@0rquestra1nstrumentaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok - OIS
                </a>
              </Li>

              <Li>
                <FaRegEnvelope size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="mailto:orq.instrumentalsurubinense@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-mail - OIS
                </a>
              </Li>
            </ul>
          </LinksContact>
        </BoxLogoLinks>
        <LinkSvitor />
      </Contacts>
      <BackToTopButton color={"bg-gray-800 text-gray-800"} />

    </div>
  );
}

export default RP;
