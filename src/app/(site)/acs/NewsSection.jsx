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
    return null;
  }
  return (
    <SectionNews
      noticiasPrincipais={noticiasPrincipais}
      noticiaSecundarias={noticiaSecundarias}
    />
  );
};
