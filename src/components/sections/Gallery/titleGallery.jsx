import React from 'react'

export const TitleGallery = ({color}) => {
  return (
    <h1 id="gallery"
    className={`absolute top-2 left-[5.5rem] md:top-10 md:left-16 lg:left-[7.5rem] xl:left-56 2xl:left-[22rem] z-10 ${color} text-3xl 2xl:text-4xl font-extrabold uppercase`}>
      Galeria
    </h1>
  )
}
