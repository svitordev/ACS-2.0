"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "../../styles/buttons.css";
import Button from "./(button)";
import GradeNoticias from "./gradenoticias";
import SlideShow from "./slideshow";

function Painel() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin");
    } else {
      setAuthChecked(true);
    }
  }, [isLoggedIn, router]);

  if (!authChecked) {
    return <div className="h-dvh flex justify-center items-center font-semibold">Verificando autenticação...</div>;
  }

  return (
    <section>
      <div className="flex items-center flex-col h-24 justify-center gap-2">
        <h1 className="text-3xl text-blue-500 font-semibold">
          Painel de Noticias
        </h1>
        <Button>adicionar</Button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => {
            logout();
            router.push("/admin");
          }}
        >
          Sair
        </button>
      </div>
      <section className="notIma">
        <div className="ondaTop"></div>
        <div className="ondaBottom"></div>
        <SlideShow />
        <GradeNoticias />
      </section>
    </section>
  );
}

export default Painel;
