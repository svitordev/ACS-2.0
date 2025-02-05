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
import "./cia.css";

export const metadata = {
  title: "Companhia de Dança - OIS",
  description:
    "Página da CIA companhia de dança da OIS e um dos projetos da Associação Cultural Surubinense.",
  openGraph: {
    title: "Companhia de Dança - OIS",
    description:
      "Página da CIA companhia de dança da OIS e um dos projetos da Associação Cultural Surubinense.",
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
    title: "Companhia de Dança - OIS",
    description:
      "Página da CIA companhia de dança da OIS e um dos projetos da Associação Cultural Surubinense.",
    images: ["https://www.acs.art.br/acs/estrutura/logo-acs.png"],
  },
  icons: {
    icon: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FCIA.jpg",
    shortcut: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FCIA.jpg",
    apple: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FCIA.jpg",
  },
};
function CIA() {
  const links = {
    gallery: "Galeria",
    about: "Sobre",
    contacts: "Contatos",
  };
  const images = [
    {
      id: 1,
      src: "https://www.acs.art.br/ois/historico/24/CCcopa24.webp",
      caption: "Image 1",
    },
    {
      id: 2,
      src: "https://www.acs.art.br/cia%2Fdestaques%2Fcia1.webp",
      caption: "Image 2",
    },
    {
      id: 3,
      src: "https://www.acs.art.br/cia%2Fdestaques%2Fcia2.webp",
      caption: "Image 3",
    },
    {
      id: 4,
      src: "https://www.acs.art.br/ois/historico/24/baliza-dor.webp",
      caption: "Image 4",
    },
    {
      id: 5,
      src: "https://www.acs.art.br/ois%2Fhistorico%2F23%2Fjoaoalfredo4.webp",
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
        ClassHeader={"headerCia"}
      >
        <Image
          width="100"
          height="100"
          className="w-16 2xl:w-24 my-2"
          src={"https://www.acs.art.br/cia/estrutura/logoCIA.png"}
          alt={"Logo da companhia de dança da ois"}
        />
      </Header>

      <Home
        srcVideo={"https://www.acs.art.br/cia%2Festrutura%2FciaHome.mp4"}
        section={"gallery"}
        classHome={"homeCia"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          Companhia de Dança <br /> da OIS
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">Dezembro de 2023</p>
      </Home>

      <Gallery
        bg={"bg-cia-gradient"}
        title={
          <h1 className="absolute top-2 left-[5.5rem] md:top-10 md:left-16 lg:left-[7.5rem] xl:left-56 2xl:left-72 z-10 text-cia-color text-3xl 2xl:text-4xl font-extrabold uppercase">
            Galeria
          </h1>
        }
        imagens={images}
      />

      <About
        title={
          <TitleSections color={"text-cia-color"}>
            COMPANHIA DE DANÇA OIS
          </TitleSections>
        }
      >
        <Paragraph>
          A Companhia de Dança OIS (CIA OIS) surgiu no final de 2023 com o
          objetivo de promover o trabalho artístico e o aperfeiçoamento por meio
          da dança. Acreditamos que a dança é uma ferramenta cultural poderosa
          para transformar a sociedade. Ela não apenas desenvolve habilidades
          técnicas, mas também molda o caráter humano, tornando-nos mais
          tolerantes, sensíveis, criativos e livres de preconceitos.
        </Paragraph>
        <Paragraph>
          Nossas apresentações abrangem desde o regionalismo até o aspecto da
          dança mundial, combinando elementos contemporâneos, clássicos e
          populares. A CIA OIS não é apenas um grupo de dança; é um processo
          educacional que vai além da aquisição de habilidades. Buscamos
          aprimorar os padrões fundamentais do movimento, explorar as
          potencialidades humanas e sua conexão com o mundo.
        </Paragraph>
        <Paragraph>
          Ao mesmo tempo, contribuímos para a construção de conhecimento e a
          formação profissional de nossos bailarinos e bailarinas. A dança
          transcende o palco; ela é uma jornada de autodescoberta, expressão e
          transformação. 🩰🌟
        </Paragraph>
      </About>

      <Contacts bg={"border-cia-color bg-cia-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://www.acs.art.br/cia%2Festrutura%2FCIA.png"
            alt="logo CIA"
            quality={100}
            width={300}
            height={300}
            className="logoFooter w-1/2 md:w-[30%] lg:w-[25%] xl:w-[20%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2 h-28">
              <Li>
                <FaInstagram size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.instagram.com/ois.cia/"
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
    </div>
  );
}

export default CIA;
