import React from "react";
import BoxProjects from "./BoxProjects";
import ImageProject from "./ImageProject";
import LinkProject from "./LinkProject";
import PProject from "./PProject";
import H2Project from "./TituloProject";

function ProjectsSection({ title }) {
  const projects = [
    {
      title: "Música",
      src: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FOIS.png",
      alt: "Logo OIS",
      paragraph: `orquestra <br />
            instrumetal <br />
            surubinense`,
      linkHref: "/ois.html",
    },
    {
      title: "Dança",
      src: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2FCIA.jpg",
      alt: "Logo da companhia de dança",
      paragraph: `companhia de <br />
            dança <br />
            ois`,
      linkHref: "/cia",
    },
    {
      title: "Percussão",
      src: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-percussao.png",
      alt: "Logo da percussão da OIS",
      paragraph: `red <br />
            phoenix <br />
            &nbsp;`,
      linkHref: "/redphoenix.html",
    },
    {
      title: "Carnavalesco",
      src: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-Dmetade.jpg",
      alt: "Logo da orquestra de frevo da ACS",
      paragraph: `d´metade <br />
            no <br />
            frevo`,
      linkHref: "/dMetade.html",
    },
    {
      title: "Carnavalesco",
      src: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-levantaDefunto.png",
      alt: "Logo do bloco Carnavalesco Levanta Defunto",
      paragraph: `bloco carnavalesco <br />
            levanta <br />
            defunto`,
      linkHref: "/bld.html",
    },
    {
      title: "Eventos",
      src: "https://www.acs.art.br/acs%2Festrutura%2Fprojetos%2Flogo-palhamusicos.png",
      alt: "Logo do Grupo Palhamúsicos",
      paragraph: `palhamúsicos <br />
            &nbsp; <br />
            &nbsp;`,
      linkHref: "/palhamusicos.html",
    },
  ];

  return (
    <section
      id="projects"
      className="w-[90%] lg:w-[85%] xl:w-9/12 2xl:w-[70%] mx-auto my-10 gap-4 flex flex-col"
    >
      {title}
      <div className="grid justify-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 uppercase font-extrabold text-xl text-center">
        {projects.map((project) => (
          <BoxProjects key={project.linkHref}>
            <H2Project>{project.title}</H2Project>
            <ImageProject src={project.src} alt={project.alt} />
            <PProject>
              {project.paragraph.split("<br />").map((line, i) => (
                <React.Fragment key={i}>
                  {line.trim() === "&nbsp;" ? <>&nbsp;</> : line}
                  <br />
                </React.Fragment>
              ))}
            </PProject>
            <LinkProject href={project.linkHref} />
          </BoxProjects>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
