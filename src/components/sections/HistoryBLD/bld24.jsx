import React from 'react'
import ParagraphHistory from '../HistoryOIS/paragraphHistory';
import SlideImage from '../Gallery/slideImage';

export const BLD24=() => {
    const images = [
        {
          id: 1,
          src: "https://www.acs.art.br/bld%2Festrutura%2FvideoBLD.mp4",
          caption: "Bloco levanta defundo em 2024",
        },
      ];
  return (
    <div className="text-center space-y-3">
        <ParagraphHistory>
        BLOCO LEVANTA DEFUNTO 💀 BLD 8 💥 - Isso é um resumão de como foi esse dia lindo, dia do BLOCO MULTICULTURAL de SURUBIM! Agradecemos a todos que mantiveram a chama do Levanta Defunto acesa, iluminando nossos corações e reafirmando nossa cultura pernambucana. Viva o Levanta Defunto em 2024! 🌟🎶        
        </ParagraphHistory>
        <SlideImage imagens={images}/>
    </div>
  )
}
