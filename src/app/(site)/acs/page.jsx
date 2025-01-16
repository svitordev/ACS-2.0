"use client";
import { getNoticiasPrinc, getNoticiasSecund } from "@/api/getNews";
import About from "@/app/components/about";
import ParagraphAbout from "@/app/components/about/ParagraphAbout";
import Contacts from "@/app/components/contacts";
import BoxLogoLinks from "@/app/components/contacts/BoxLogoLinks";
import LinksContact from "@/app/components/contacts/Links";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
import ProjectsSection from "@/app/components/projects";
import BoxProjects from "@/app/components/projects/BoxProjects";
import ImageProject from "@/app/components/projects/ImageProject";
import LinkProject from "@/app/components/projects/LinkProject";
import PProject from "@/app/components/projects/PProject";
import H2Project from "@/app/components/projects/TituloProject";
import SectionNews from "@/app/components/sectionNews";
import TitleSections from "@/app/components/titleSections";
import { useEffect, useState } from "react";
import { BiSolidBank } from "react-icons/bi";
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import "./style.css";

import Li from "@/app/components/contacts/Li";
import Image from "next/image";
function ACS() {
  const [noticiasPrincipais, setNoticiasPrincipais] = useState([]);
  const [noticiaSecundarias, setNoticiaSecundarias] = useState([]);

  useEffect(() => {
    getNoticiasPrinc(setNoticiasPrincipais);
    getNoticiasSecund(setNoticiaSecundarias);
  }, []);
  const links = {
    news: "Notícias",
    about: "Sobre",
    projects: "Projetos",
    contacts: "Contatos",
  };
  return (
    <div className="scroll-mt-14">
      <Header links={links} />
      <Home />
      <SectionNews
        noticiasPrincipais={noticiasPrincipais}
        noticiaSecundarias={noticiaSecundarias}
      />
      <About
        title={<TitleSections>Associação Cultural Surubinense</TitleSections>}
      >
        <ParagraphAbout>
          A <strong>ASSOCIAÇÃO CULTURAL SURUBINENSE</strong> é uma instituição
          que nasceu com o propósito de servir como um instrumento para a
          sociedade de Surubim. Fundada em 11 de agosto de 2023, sem fins
          lucrativos, ela oferece oportunidades para artistas locais exibirem
          seus talentos e promove uma variedade de eventos e atividades
          culturais.
        </ParagraphAbout>
        <ParagraphAbout>
          Nossas iniciativas abrangem áreas como
          <strong>teatro, música, dança, artes plásticas e ensino,</strong>
          com foco em crianças, adolescentes, jovens e adultos. Através dessas
          atividades, contribuímos para fortalecer a identidade cultural local e
          enriquecer a vida comunitária.
        </ParagraphAbout>
        <ParagraphAbout>
          Além disso, a Associação Cultural Surubinense estabelece parcerias com
          o poder público e privado para promover festivais, workshops e outras
          experiências que preservam e divulgam a riqueza da cultura local.
          Somos um ponto de encontro para artistas e entusiastas, fomentando a
          troca de experiências e o desenvolvimento artístico na nossa
          comunidade. Afinal, é por meio da arte e da música que mantemos viva a
          tradição e a paixão em Surubim. 🎭🎶
        </ParagraphAbout>
      </About>
      <ProjectsSection title={<TitleSections>Projetos</TitleSections>}>
        <BoxProjects>
          <H2Project>Música</H2Project>
          <ImageProject
            src={"https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FOIS.png"}
            alt="Orquestra Instrumetal Surubinense"
          />
          <PProject>
            orquestra <br />
            instrumetal <br />
            surubinense
          </PProject>
          <LinkProject href={"/ois.html"} />
        </BoxProjects>

        <BoxProjects>
          <H2Project>Dança</H2Project>
          <ImageProject
            src={"https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FCIA.jpg"}
            alt="Companhia de Dança da OIS"
          />
          <PProject>
            companhia de <br />
            dança <br />
            ois
          </PProject>
          <LinkProject href={"/cia.html"} />
        </BoxProjects>

        <BoxProjects>
          <H2Project>Percussão</H2Project>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-percussao.png"
            }
            alt="Percussão da OIS"
          />
          <PProject>
            red <br />
            phoenix <br />
            &nbsp;
          </PProject>
          <LinkProject href={"/redphoenix.html"} />
        </BoxProjects>

        <BoxProjects>
          <H2Project>Carnavalesco</H2Project>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-Dmetade.jpg"
            }
            alt="Orquestra de frevo da ACS"
          />
          <PProject>
            d´metade <br />
            no <br />
            frevo
          </PProject>
          <LinkProject href={"/dMetade.html"} />
        </BoxProjects>

        <BoxProjects>
          <H2Project>Carnavalesco</H2Project>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-levantaDefunto.png"
            }
            alt="Bloco Carnavalesco Levanta Defunto"
          />
          <PProject>
            bloco carnavalesco <br />
            levanta <br />
            defunto
          </PProject>
          <LinkProject href={"/bld.html"} />
        </BoxProjects>

        <BoxProjects>
          <H2Project>Eventos</H2Project>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png"
            }
            alt="Grupo Palhamúsicos"
          />
          <PProject>
            palhamúsicos <br />
            &nbsp; <br />
            &nbsp;
          </PProject>
          <LinkProject href={"/palhamusicos.html"} />
        </BoxProjects>
      </ProjectsSection>
      <Contacts bg={"bg-acs-gradient border-green-900"}>
        <BoxLogoLinks>
          <Image
            src="https://www.acs.art.br/acs%2Festrutura%2Flogo-acs.png"
            alt="logo ACS"
            quality={100}
            width={300}
            height={300}
            className="w-3/5 md:w-1/3 lg:w-[27%] xl:w-[23%] self-center"
          />
          <LinksContact>
            <h3 className="text-2xl font-bold">Contatos</h3>
            <ul className="flex flex-col flex-wrap list-none gap-2">
              <Li>
                <FaInstagram size={20} />
                <a
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
      </Contacts>
    </div>
  );
}

export default ACS;
