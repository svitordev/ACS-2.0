import About from "@/components/About";
import Paragraph from "@/components/About/Paragraph";
import Contacts from "@/components/Contacts";
import BoxLogoLinks from "@/components/Contacts/BoxLogoLinks";
import Li from "@/components/Contacts/Li";
import LinkSvitor from "@/components/Contacts/LinkSvitor";
import LinksContact from "@/components/Contacts/Links";
import Gallery from "@/components/Gallery/sectionGallery";
import Header from "@/components/Header";
import Home from "@/components/Home";
import TitleSections from "@/components/TitleSections";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaRegEnvelope,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import History from "../../../components/History";
import "./ois.css";

export const metadata = {
  title: "Orquestra Instrumental Surubinense",
  description:
    "Página da Orquestra Instrumental Surubinense, um dos projetos da Associação Cultural Surubinense.",
  openGraph: {
    title: "Orquestra Instrumental Surubinense",
    description:
      "Página da Orquestra Instrumental Surubinense, um dos projetos da Associação Cultural Surubinense.",
    url: "https://acs.art.br/",
    images: [
      {
        url: "https://www.acs.art.br/ois/estrutura/logoOIS.png",
        width: 800,
        height: 600,
        alt: "Logo da Orquestra Instrumental Surubinense",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orquestra Instrumental Surubinense",
    description:
      "Página da Orquestra Instrumental Surubinense, um dos projetos da Associação Cultural Surubinense.",
    images: ["https://www.acs.art.br/ois/estrutura/logoOIS.png"],
  },
  icons: {
    icon: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FOIS.png",
    shortcut: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FOIS.png",
    apple: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FOIS.png",
  },
};
function OIS() {
  const links = {
    gallery: "Galeria",
    about: "Sobre",
    history: "Histórico",
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
        links={links}
        linkacs={
          <Link href={"/acs"} className="p-3">
            ACS
          </Link>
        }
        ClassHeader={"headerOIS"}
      >
        <Image
          width="100"
          height="100"
          className="w-16 2xl:w-24 my-2"
          src={"https://www.acs.art.br/ois/estrutura/logoOIS.png"}
          alt={"Logo da companhia de dança da ois"}
        />
      </Header>

      <Home
        srcVideo={"https://www.acs.art.br/cia%2Festrutura%2FciaHome.mp4"}
        section={"gallery"}
        classHome={"homeOIS"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black ">
          Orquestra Instrumental <br /> Surubinense
        </h1>
        <p className="text-xs md:text-sm 2xl:text-2xl">Dezembro de 2016</p>
      </Home>

      <Gallery
        bg={"bg-ois-gradient"}
        title={
          <h1
            id="gallery"
            className="absolute top-2 left-[5.5rem] md:top-10 md:left-16 lg:left-[7.5rem] xl:left-56 2xl:left-72 z-10 text-yellow-500 text-3xl 2xl:text-4xl font-extrabold uppercase"
          >
            Galeria
          </h1>
        }
        imagens={images}
      />

      <About
        title={
          <TitleSections color={"text-yellow-500"}>
            Orquestra Instrumental Surubinense
          </TitleSections>
        }
      >
        <Paragraph>
          A <strong>Orquestra Instrumental Surubinense (O.I.S)</strong> foi
          fundada em 2016 com o objetivo claro: levar a
          <strong>boa música</strong> para a população de Surubim-PE e região.
          Composta exclusivamente por músicos locais, a O.I.S destaca-se pela
          qualidade excepcional de seus arranjos e melodias, abrangendo tanto o
          repertório popular quanto o erudito, com uma pitada de nossos
          clássicos brasileiros e influências da música mundial.
        </Paragraph>
        <Paragraph>
          No cerne de nossa missão está a formação não apenas de músicos, mas
          também a <strong>socialização e interação</strong> de todos os
          envolvidos no projeto. Somos uma ONG sem fins lucrativos, dedicada ao
          desenvolvimento cultural e à preservação da música instrumental de
          qualidade.
        </Paragraph>
        <Paragraph>
          A O.I.S busca revitalizar a cena instrumental em Surubim, com foco
          especial nos instrumentos de sopro e percussão, que têm raízes
          profundas na cidade. Nossa paixão é apropriação da{" "}
          <strong>música popular brasileira</strong> e dos grandes clássicos
          universais. Atualmente, contamos com 75 participantes, entre músicos,
          equipe artística, apoiadores e diretoria.
        </Paragraph>
        <Paragraph>
          Juntos, continuamos a escrever nossa história musical, celebrando a
          riqueza de nossa cultura e inspirando gerações futuras. 🎵🌟
        </Paragraph>
      </About>

      <History />
      <Contacts bg={"border-yellow-500 bg-ois-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://www.acs.art.br/ois%2Festrutura%2Fois-footer.png"
            alt="logo CIA"
            quality={100}
            width={300}
            height={300}
            className="logoFooter w-3/5 md:w-[35%] lg:w-[30%] xl:w-[25%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2 h-28">
              <Li>
                <FaInstagram size={20} />
                <a
                  className="text-gray-300 hover:text-white"
                  href="https://www.instagram.com/orq.instrumentalsurubinense/"
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
                  YouTube
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
                  TikTok
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

export default OIS;
