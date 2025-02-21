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
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./bld.css";
import { HistoryBLD } from "@/components/sections/HistoryBLD";
import { BackToTopButton } from "@/components/BackToTopButton";

export const metadata = {
  title: "Bloco Levanta Defunto",
  description:
    "Página do Bloco levanta defunto, um dos projetos da Associação Cultural Surubinense",
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
    title: "Bloco Levanta Defunto",
    description:
      "Página do Bloco levanta defunto, um dos projetos da Associação Cultural Surubinense",
    url: "https://acs.art.br/",
    images: [
      {
        url: "https://cdn.acs.art.br/acs/estrutura/logo-acs.png",
        width: 800,
        height: 600,
        alt: "Logo do Bloco Levanta Defunto",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloco Levanta Defunto",
    description:
      "Página do Bloco levanta defunto, um dos projetos da Associação Cultural Surubinense",
    images: ["https://cdn.acs.art.br/acs/estrutura/logo-acs.png"],
  },
  icons: {
    icon: "/logoBLD.png",
    shortcut: "/logoBLD.png",
    apple: "/logoBLD.png",
  },
}
function CIA() {
  const links = {
    gallery: "Galeria",
    about: "Sobre",
    history: "Histórico",
    contacts: "Contatos",
  };
  const images = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/bld%2Fdestaques%2Fbld24c.webp",
      caption: "Image 1",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/bld%2Fdestaques%2Fbld24b.webp",
      caption: "Image 2",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/bld%2Fdestaques%2Fbld24a.webp",
      caption: "Image 3",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/bld%2Fdestaques%2Fbld24d.webp",
      caption: "Image 4",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/bld%2Fdestaques%2Fbanda24.webp",
      caption: "Image 5",
    },
    {
      id: 6,
      src: "https://cdn.acs.art.br/bld%2Fdestaques%2Fviloesdoforro.webp",
      caption: "Image 5",
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
        ClassHeader={"headerBLD"}
      >
        <Image
          width="100"
          height="100"
          className="w-24 2xl:w-28 my-2"
          src={"https://cdn.acs.art.br/bld/estrutura/logoBLD.png"}
          alt={"Logo da companhia de dança da ois"}
        />
      </Header>

      <Home
        srcVideo={"https://cdn.acs.art.br/bld%2Festrutura%2FvideoBLD.mp4"}
        section={"gallery"}
        classHome={"homeBLD"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          BLOCO CARNAVALESCO <br /> LEVANTA DEFUNTO
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">Fevereiro de 2015</p>
      </Home>

      <Gallery
        bg={"bg-bld-gradient"}
        title={
          <h1
            id="gallery"
            className="absolute top-2 left-[5.5rem] md:top-10 md:left-16 lg:left-[7.5rem] xl:left-56 2xl:left-72 z-10 text-green-600 text-3xl 2xl:text-4xl font-extrabold uppercase"
          >
            Galeria
          </h1>
        }
        imagens={images}
      />

      <About
        title={
          <TitleSections color={"text-green-600"}>
            BLOCO CARNAVALESCO LEVANTA DEFUNTO
          </TitleSections>
        }
      >
        <Paragraph>
          O <strong>Bloco Carnavalesco Levanta Defunto</strong> é muito mais do
          que um simples grupo de foliões. Fundado com propósito claro, ele se
          dedica a atividades artísticas e culturais, especialmente aquelas que
          resgatam a essência do
          <strong> carnaval de rua.</strong> Nossa missão vai além da diversão;
          queremos contribuir para a promoção turística da cidade e manter viva
          a tradição do Frevo pernambucano, seja na dança ou na música.
        </Paragraph>
        <Paragraph>
          A ideia nasceu entre amigos músicos que testemunharam o declínio dos
          antigos carnavais. Sentimos a necessidade de criar um bloco que unisse
          a sociedade surubinense, sem distinção de cor, raça ou religião. O
          nome “Levanta Defunto” pode parecer curioso, mas tem um significado
          especial. Ele não faz referência aos mortos, mas sim ao último dia do
          carnaval, quando todos estão exaustos. É o momento de acordar,
          animar-se e celebrar juntos. Assim, o Bloco Carnavalesco Levanta
          Defunto mantém viva a alegria e a tradição em Surubim. 🎉🎺
        </Paragraph>
      </About>
      <HistoryBLD />
      <Contacts bg={"border-green-600 bg-bld-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://cdn.acs.art.br/bld/estrutura/logoBLD.png"
            alt="logo CIA"
            quality={100}
            width={300}
            height={300}
            className="logoFooter w-1/2 md:w-[30%] lg:w-[25%] xl:w-[20%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2 h-auto">
              <Li>
                <FaInstagram size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.instagram.com/blocolevantadefunto/"
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
            </ul>
          </LinksContact>
        </BoxLogoLinks>
        <LinkSvitor />
      </Contacts>
      <BackToTopButton color={"bg-green-600 text-green-600"} />

    </div>
  );
}

export default CIA;
