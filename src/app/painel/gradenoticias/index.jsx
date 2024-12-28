"use client";

import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { InfoTime } from "../../../hooks/infoTime";

function GradeNoticias() {
  const [noticiasSecundarias, setNoticiasSecundarias] = useState([]);

  useEffect(() => {
    async function fetchNoticias() {
      const NotSec = await fetch("http://localhost:3800/noticiasSecun");
      const noticias = await NotSec.json();
      setNoticiasSecundarias(noticias);
    }

    fetchNoticias();
  }, []); 

  return (
    <div className="secundario" id="noticias-secundarias">
      {noticiasSecundarias.map((noticia, index) => (
        <a key={index} href={noticia.link} target="_blank" className="card1">
          {noticia.imagem && (
            <Image
              loading="lazy"
              width={100}
              height={100}
              src={noticia.imagem}
              alt="Imagem da notícia"
            />
          )}

          <div className="buttons">
            <button className="buttonEdit">
              <MdEdit />
            </button>
            <button className="buttonDel">
              <FaTrashAlt />
            </button>
          </div>

          <span className="infoTime">{InfoTime(noticia)}</span>
          <p>{noticia.titulo}</p>
        </a>
      ))}
    </div>
  );
}

export default GradeNoticias;
