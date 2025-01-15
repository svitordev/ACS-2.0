"use client";
import { getNoticiasPrinc, getNoticiasSecund } from "@/api/getNews";
import About from "@/app/components/about";
import ParagraphAbout from "@/app/components/about/ParagraphAbout";
import Header from "@/app/components/header";
import Home from "@/app/components/home";
import ProjectsSection from "@/app/components/projects";
import BoxProjects from "@/app/components/projects/BoxProjects";
import ImageProject from "@/app/components/projects/ImageProject";
import LinkProject from "@/app/components/projects/LinkProject";
import SectionNews from "@/app/components/sectionNews";
import TitleSections from "@/app/components/titleSections";
import { useEffect, useState } from "react";
import "./style.css";
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
          <h2>Música</h2>
          <ImageProject
            src={"https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FOIS.png"}
            alt="Orquestra Instrumetal Surubinense"
          />
          <p>
            orquestra <br />
            instrumetal <br />
            surubinense
          </p>
          <LinkProject href={"/ois.html"} />
        </BoxProjects>

        <BoxProjects>
          <h2>Dança</h2>
          <ImageProject
            src={"https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FCIA.jpg"}
            alt="Companhia de Dança da OIS"
          />
          <p>
            companhia de <br />
            dança <br />
            ois
          </p>
          <LinkProject href={"/cia.html"} />
        </BoxProjects>

        <BoxProjects>
          <h2>Percussão</h2>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-percussao.png"
            }
            alt="Percussão da OIS"
          />
          <p>
            red <br />
            phoenix <br />
            &nbsp;
          </p>
          <LinkProject href={"/redphoenix.html"} />
        </BoxProjects>

        <BoxProjects>
          <h2>Carnavalesco</h2>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-Dmetade.jpg"
            }
            alt="Orquestra de frevo da ACS"
          />
          <p>
            d´metade <br />
            no <br />
            frevo
          </p>
          <LinkProject href={"/dMetade.html"} />
        </BoxProjects>

        <BoxProjects>
          <h2>Carnavalesco</h2>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-levantaDefunto.png"
            }
            alt="Bloco Carnavalesco Levanta Defunto"
          />
          <p>
            bloco carnavalesco <br />
            levanta <br />
            defunto
          </p>
          <LinkProject href={"/bld.html"} />
        </BoxProjects>

        <BoxProjects>
          <h2>Eventos</h2>
          <ImageProject
            src={
              "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png"
            }
            alt="Grupo Palhamúsicos"
          />
          <p>
            palhamúsicos <br />
            &nbsp; <br />
            &nbsp;
          </p>
          <LinkProject href={"/palhamusicos.html"} />
        </BoxProjects>
      </ProjectsSection>
    </div>
  );
}

export default ACS;
