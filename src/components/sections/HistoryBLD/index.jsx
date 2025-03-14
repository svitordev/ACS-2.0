import TitleSections from '@/components/sections/TitleSections'
import React from 'react'
import YearTitle from '../HistoryOIS/yearTitle'
import { BLD15 } from './bld15'
import { BLD16 } from './bld16'
import { BLD17 } from './bld17'
import { BLD18 } from './bld18'
import { BLD19 } from './bld19'
import { BLD20 } from './bld20'
import ParagraphHistory from '../HistoryOIS/paragraphHistory'
import { BLD23 } from './bld23'
import { BLD24 } from './bld24'

export const HistoryBLD = () => {
  return (
    <section
      id="history"
      className="container px-3 xl:px-32 2xl:px-36 mx-auto  flex flex-col gap-6 mb-10"
    >
        <TitleSections color={"text-green-600"}>Histórico</TitleSections>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2015</YearTitle>
        <BLD15 />
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2016</YearTitle>
        <BLD16 />
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2017</YearTitle>
        <BLD17 />
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2018</YearTitle>
        <BLD18 />
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2019</YearTitle>
        <BLD19 />
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2020</YearTitle>
        <BLD20 />
        </div>
        <div className="space-y-3 text-center">
        <YearTitle color={"text-green-600"}>2021</YearTitle>
        <ParagraphHistory>Por conta da pandemia o carnaval foi cancelado e nosso bloco não foi realizado no ano de 2021.</ParagraphHistory>
        </div>
        <div className="space-y-3 text-center">
        <YearTitle color={"text-green-600"}>2022</YearTitle>
        <ParagraphHistory>Por conta da pandemia o carnaval foi cancelado e nosso bloco não foi realizado no ano de 2022.</ParagraphHistory>
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2023</YearTitle>
        <BLD23 />
        </div>
        <div className="space-y-3">
        <YearTitle color={"text-green-600"}>2024</YearTitle>
        <BLD24 />
        </div>
    </section>
  )
}
