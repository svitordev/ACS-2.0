import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD20=() => {
    const images = [
        {
          id: 1,
          src: "https://cdn.acs.art.br/bld%2Fhistorico%2Fbld20.mp4",
          caption: "Bloco levanta defundo em 2020",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        Cada folião, com seus corações pulsando no ritmo da música, contribuiu para a magia desse evento. Os passos de dança se entrelaçaram, os sorrisos se multiplicaram e a tradição se manteve viva, celebrando nossa cultura e enchendo as ruas com alegria. Viva o Levanta Defunto em 2020! 🌟🎶        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
