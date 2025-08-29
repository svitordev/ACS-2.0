import React from "react";
import { Events } from "./groupEvent";
import { CarouselEvents } from "@/components/Carousel";
import { bandaSuasFuncoes } from "@/data/events";

export const SectionEvent = ({ title }) => {
  return (
    <section
      id="events"
      className="container px-3 xl:px-32 2xl:px-36 mx-auto space-y-4 my-16"
    >
      {title}
      <div className="space-y-4">
        <Events title={"WORKSHOP - Bandas e suas funções"}>
          <div className="flex flex-col md:flex-row gap-4">
            <CarouselEvents events={bandaSuasFuncoes.one} />
            <CarouselEvents events={bandaSuasFuncoes.two} />
          </div>
        </Events>
        
      </div>
    </section>
  );
};
