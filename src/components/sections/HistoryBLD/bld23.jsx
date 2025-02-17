import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD23=() => {
    const images = [
        {
          id: 1,
          src: "https://www.acs.art.br/bld%2Fhistorico%2Fbld23.mp4",
          caption: "Bloco levanta defundo em 2023",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        Após um período de silêncio e saudade, o Bloco Levanta Defunto emergiu das sombras da pandemia com uma energia renovada. As ruas, antes vazias, agora vibravam com os passos de frevo e alegria contagiante. Entre abraços apertados e sorrisos, ecoamos com esperança: “FREVOOOO! FREVOOOO!” 🎉🎺       
        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
