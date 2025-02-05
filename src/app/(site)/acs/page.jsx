import ProjectsSection from "@/components/sections/Projects";
import TitleSections from "@/components/TitleSections";
import About from "@/components/sections/About";
import Paragraph from "@/components/sections/About/Paragraph";
import Contacts from "@/components/sections/Contacts";
import BoxLogoLinks from "@/components/sections/Contacts/BoxLogoLinks";
import Li from "@/components/sections/Contacts/Li";
import LinkSvitor from "@/components/sections/Contacts/LinkSvitor";
import LinksContact from "@/components/sections/Contacts/Links";
import Header from "@/components/sections/Header";
import Home from "@/components/sections/Home";
import Image from "next/image";
import { BiSolidBank } from "react-icons/bi";
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { NewsSection } from "./NewsSection";
import "./acs.css";

export const metadata = {
  title: "Associação Cultural Surubinense - ACS",
  description:
    "Site da Associação Cultural Surubinense e notícias sobre cultura da cidade de Surubim-PE e dos projetos da Associação Cultural Surubinense.",
  openGraph: {
    title: "Associação Cultural Surubinense - ACS",
    description:
      "Site da Associação Cultural Surubinense e notícias sobre cultura da cidade de Surubim-PE e dos projetos da Associação Cultural Surubinense.",
    url: "https://acs.art.br/",
    images: [
      {
        url: "https://www.acs.art.br/acs/estrutura/logo-acs.png",
        width: 800,
        height: 600,
        alt: "Logo da Associação Cultural Surubinense",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Associação Cultural Surubinense - ACS",
    description:
      "Site da Associação Cultural Surubinense e notícias sobre cultura da cidade de Surubim-PE e dos projetos da Associação Cultural Surubinense.",
    images: ["https://www.acs.art.br/acs/estrutura/logo-acs.png"],
  },
  icons: {
    icon: "https://www.acs.art.br/acs%2Festrutura%2FlogoACS.png",
    shortcut: "https://www.acs.art.br/acs%2Festrutura%2FlogoACS.png",
    apple: "https://www.acs.art.br/acs%2Festrutura%2FlogoACS.png",
  },
};
function ACS() {
  const links = {
    news: "Notícias",
    about: "Sobre",
    projects: "Projetos",
    contacts: "Contatos",
  };

  return (
    <div>
      <Header
        links={links}
        srcImg={"https://www.acs.art.br/acs/estrutura/logoHeader.png"}
        altImg={"Logo da Associação Cultural Surubinense"}
        ClassHeader={"headerAcs"}
      >
        <Image
          width="100"
          height="100"
          className="w-16 "
          src={"https://www.acs.art.br/acs%2Festrutura%2FlogoACS.png"}
          alt={"Logo da Associação Cultural Surubinense"}
        />
      </Header>

      <Home
        srcVideo={"https://www.acs.art.br/acs%2Festrutura%2Facs.mp4"}
        section={"news"}
        classHome={"homeAcs"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          Associação Cultural <br /> Surubinense
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">11 de agosto de 2023</p>
      </Home>

      <NewsSection />

      <About
        title={
          <TitleSections color={"text-green-900"}>
            Associação Cultural Surubinense
          </TitleSections>
        }
      >
        <Paragraph>
          A <strong>ASSOCIAÇÃO CULTURAL SURUBINENSE</strong> é uma instituição
          que nasceu com o propósito de servir como um instrumento para a
          sociedade de Surubim. Fundada em 11 de agosto de 2023, sem fins
          lucrativos, ela oferece oportunidades para artistas locais exibirem
          seus talentos e promove uma variedade de eventos e atividades
          culturais.
        </Paragraph>
        <Paragraph>
          Nossas iniciativas abrangem áreas como{" "}
          <strong>teatro, música, dança, artes plásticas e ensino,</strong> com
          foco em crianças, adolescentes, jovens e adultos. Através dessas
          atividades, contribuímos para fortalecer a identidade cultural local e
          enriquecer a vida comunitária.
        </Paragraph>
        <Paragraph>
          Além disso, a Associação Cultural Surubinense estabelece parcerias com
          o poder público e privado para promover festivais, workshops e outras
          experiências que preservam e divulgam a riqueza da cultura local.
          Somos um ponto de encontro para artistas e entusiastas, fomentando a
          troca de experiências e o desenvolvimento artístico na nossa
          comunidade. Afinal, é por meio da arte e da música que mantemos viva a
          tradição e a paixão em Surubim. 🎭🎶
        </Paragraph>
      </About>

      <ProjectsSection />

      <Contacts bg={"border-green-900 bg-acs-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://www.acs.art.br/acs%2Festrutura%2Flogo-acs.png"
            alt="logo ACS"
            quality={100}
            width={300}
            height={300}
            className="logoFooter w-3/5 md:w-1/3 lg:w-[27%] xl:w-[23%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2">
              <Li>
                <FaInstagram size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.instagram.com/associacaoculturalsurubinense/"
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
                <BiSolidBank size={20} />
                <p>CNPJ: 55.066.867/0001-31</p>
              </Li>
              <Li>
                <FaRegEnvelope size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="mailto:orq.instrumentalsurubinense@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-mail
                </a>
              </Li>
            </ul>
          </LinksContact>
        </BoxLogoLinks>
        <LinkSvitor />
      </Contacts>
    </div>
  );
}

export default ACS;
