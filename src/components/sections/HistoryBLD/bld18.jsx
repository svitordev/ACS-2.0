import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD18=() => {
    const images = [
        {
          id: 1,
          src: "https://cdn.acs.art.br/bld%2Fhistorico%2Fbld18.mp4",
          caption: "Bloco levanta defundo em 2018",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
          Cada folião, com seus corações pulsando no ritmo da música, contribuiu para a magia desse evento. Agradecemos a todos que dançaram conosco, celebrando nossa cultura e enchendo as ruas com energia contagiante. Viva o Levanta Defunto em 2018! 🌟🎶
          </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
