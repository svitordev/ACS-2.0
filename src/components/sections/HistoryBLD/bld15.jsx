import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD15=() => {
    const images = [
        {
          id: 1,
          src: "https://cdn.acs.art.br/bld%2Fhistorico%2Fbld15.jpg",
          caption: "Bloco levanta defundo em 2015",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        Essa imagem mostra muito de quando começamos esse sonho chamado Bloco Levanta Defunto. A primeira edição do bloco, no ano de 2015. Sempre levando o nosso frevo e a nossa cultura Pernambucana."Eu disse Frevoooo! Frevoooo"..🎶🎭🥁🎺🎷
        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
