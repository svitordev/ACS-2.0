import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD16=() => {
    const images = [
        {
          id: 1,
          src: "https://cdn.acs.art.br/bld%2Fhistorico%2Fbld16.mp4",
          caption: "Bloco levanta defundo em 2016",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        Na segunda edição, no ano de 2016, continuamos a dançar, cantar e celebrar com a mesma paixão e energia. Agradecemos a todos que fizeram parte dessa jornada e mantiveram viva a chama do nosso bloco. Viva o Levanta Defunto! 🌟🎶
        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
