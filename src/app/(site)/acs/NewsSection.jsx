"use client";
import SectionNews from "@/components/SectionNews";
import { getNoticiasPrinc, getNoticiasSecund } from "@/lib/getNews";
import { useEffect, useState } from "react";

export const NewsSection = () => {
  const [noticiasPrincipais, setNoticiasPrincipais] = useState([]);
  const [noticiaSecundarias, setNoticiaSecundarias] = useState([]);

  useEffect(() => {
    getNoticiasPrinc(setNoticiasPrincipais);
    getNoticiasSecund(setNoticiaSecundarias);
  }, []);
  if (noticiasPrincipais.length === 0 || noticiaSecundarias.length === 0) {
    return (
      <div
        id="news"
        className="flex flex-col justify-center items-center text-blue-900 text-xl font-bold my-10"
      >
        <p>Carregando notícias...</p>
        <p>Se demorar, atualize a página.</p>
      </div>
    );
  }
  return (
    <SectionNews
      noticiasPrincipais={noticiasPrincipais}
      noticiaSecundarias={noticiaSecundarias}
    />
  );
};
