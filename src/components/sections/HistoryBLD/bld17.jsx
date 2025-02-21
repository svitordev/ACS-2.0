import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD17=() => {
    const images = [
        {
          id: 1,
          src: "https://cdn.acs.art.br/bld%2Fhistorico%2Fbld17.mp4",
          caption: "Bloco levanta defundo em 2017",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        No ano de 2017, o Bloco Levanta Defunto continuou a escrever sua história vibrante e colorida. Entre confetes, serpentinas e passos de frevo, ecoamos com alegria: “FREVOOOO! FREVOOOO!” 🎊🎶
        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
