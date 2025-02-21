import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD19=() => {
    const images = [
        {
          id: 1,
          src: "https://cdn.acs.art.br/bld%2Fhistorico%2Fbld19.mp4",
          caption: "Bloco levanta defundo em 2019",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        Em 2019, o Bloco Levanta Defunto escreveu mais um capítulo de sua história vibrante e apaixonada. As ruas se encheram de cores, os passos de frevo ganharam vida e a alegria contagiou a todos. Entre confetes e serpentinas, ecoamos com fervor: “FREVOOOO! FREVOOOO!”🎉🎺          
        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
