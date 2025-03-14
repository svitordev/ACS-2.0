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
  title: "Palhamúsicos",
  description:
    "Página dos palhamusicos, um dos projetos da Associação Cultural Surubinense",
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
    title: "Palhamúsicos",
    description:
      "Página dos palhamusicos, um dos projetos da Associação Cultural Surubinense",
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
    title: "Palhamúsicos",
    description:
      "Página dos palhamusicos, um dos projetos da Associação Cultural Surubinense",
    images: ["https://cdn.acs.art.br/acs/estrutura/logo-acs.png"],
  },
  icons: {
    icon: "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png",
    shortcut:
      "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png",
    apple:
      "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png",
  },
};
function Palhamusicos() {
  const links = {
    gallery: "Galeria",
    about: "Sobre",
    hire: "Contrate",
    contacts: "Contatos",
  };
  const images = [
    {
      id: 1,
      src: "https://cdn.acs.art.br/palhamusicos%2F1.webp",
    },
    {
      id: 2,
      src: "https://cdn.acs.art.br/palhamusicos%2F3.webp",
      caption: "Orquestra D´metade no frevo se apresentando",
    },
    {
      id: 3,
      src: "https://cdn.acs.art.br/palhamusicos%2F4.webp",
      caption: "Orquestra D´metade no frevo se apresentando",
    },
    {
      id: 4,
      src: "https://cdn.acs.art.br/palhamusicos%2F2.webp",
      caption: "Orquestra D´metade no frevo se apresentando",
    },
    {
      id: 5,
      src: "https://cdn.acs.art.br/palhamusicos%2F5.webp",
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
        ClassHeader={"headerPM"}
      >
        <Image
          width="100"
          height="100"
          className="w-20 -my-1.5 2xl:w-24"
          src={
            "https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png"
          }
          alt={"Logo da companhia de dança da ois"}
        />
      </Header>

      <Home
        srcVideo={"https://cdn.acs.art.br/palhamusicos%2Fpalhamusicos.mp4"}
        section={"gallery"}
        classHome={"homePM"}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black">
          PALHAMUSICOS
        </h1>
        <h2 className="mb-5 text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-black">
          Palhaçaria e Música
        </h2>
        <p className="text-xs md:text-sm 2xl:text-2xl">Janeiro de 2016</p>
      </Home>

      <Gallery
        bg={"bg-pm-gradient"}
        title={
          <TitleGallery color={"text-red-600"}/>
        }
        imagens={images}
      />

      <About
        title={
          <TitleSections color={"text-red-600"}>
            D´METADE NO FREVO
          </TitleSections>
        }
      >
        <Paragraph>
          Os <strong>PALHAMÚSICOS</strong>, fundados em 2016, têm como propósito
          intervir na sociedade, promovendo a arte como um mínimo social para
          crianças, adolescentes e outros públicos em situação de
          vulnerabilidade e risco social. Priorizam hospitais públicos e
          ambientes adversos, como comunidades afastadas dos centros urbanos,
          utilizando a linguagem do palhaço como referência.
        </Paragraph>
        <Paragraph>
          Através dessa intervenção, buscam ampliar canais de diálogo reflexivo
          com a sociedade, contribuindo para a promoção da cultura e inspirando
          políticas públicas universais e democráticas voltadas ao
          desenvolvimento social sustentável. Tudo isso tendo a MÚSICA como a
          principal base elementar para o fazer artístico do grupo. 🎶🤡🌟
        </Paragraph>
      </About>
      <Hire
        title={
          <TitleSections color={"text-red-600"}>
            Nos contrate para seu evento!
          </TitleSections>
        }
      >
        <Paragraph>
          🎺🎉 PALHAMÚSICOS: A Trilha Sonora Perfeita para o Seu Evento! 🎉🎺
        </Paragraph>
        <Paragraph>
          Você está planejando um evento especial? Quer torná-lo inesquecível
          com música vibrante e autêntica? A PALHAMÚSICOS está aqui para fazer
          parte desse momento único!
        </Paragraph>
        <Paragraph>Por que escolher a PALHAMÚSICOS?</Paragraph>
        <Paragraph>
          🎵 Melodias que Curam: Nossa trupe de palhaços-músicos traz consigo a
          magia da música. Através de notas e acordes, buscamos aliviar o
          sofrimento e espalhar alegria nos corações daqueles que mais precisam.
        </Paragraph>
        <Paragraph>
          🤹‍♂️ Palhaçaria Reflexiva: A linguagem do palhaço é nossa ferramenta.
          Com narizes vermelhos e sorrisos largos, criamos diálogos reflexivos
          com a sociedade, estimulando a empatia e a compreensão.
        </Paragraph>
        <Paragraph>
          🌟 Cultura como Transformação: Inspiramos políticas públicas
          inclusivas e universais, visando um desenvolvimento social
          sustentável. A música é nosso elo, nossa base para o fazer artístico.
          🎊🎺🔥
        </Paragraph>
        <Paragraph>
          Não deixe sua jornada sem trilha sonora! Contrate os PALHAMÚSICOS e
          faça parte dessa sinfonia de esperança e riso! 🎊🎶✨
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
      <Contacts bg={"border-yellow-500 bg-pm-gradient"}>
        <BoxLogoLinks>
          <Image
            src="https://cdn.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png"
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
      <BackToTopButton color={"bg-blue-900 text-blue-900"} />

    </div>
  );
}

export default Palhamusicos;
