"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { handleDeleteNews } from "@/api/NewsDelete";
import { getNoticiasPrinc, getNoticiasSecund } from "@/api/getNews";
import { handleCreate } from "@/api/newsCreate";
import { handleEdit } from "@/api/newsUpdate";
import Buttons from "@/app/(admin)/components/Buttons";
import SectionNews from "@/app/components/sectionNews";
import Form from "../components/Form";
import Modal from "../components/Modal";
function Painel() {
  const { isLoggedIn, authChecked, logout } = useAuth();
  const router = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [mode, setMode] = useState("add");
  const openModalAdd = () => {
    setSelectedNews(null);
    setMode("add");
    setModalIsOpen(true);
  };
  const openModalEdit = (noticia) => {
    setSelectedNews(noticia);
    setMode("edit");
    setModalIsOpen(true);
  };
  const openModalDell = (noticia) => {
    setSelectedNews(noticia);
    setMode("disabled");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setMode("add");
    setModalIsOpen(false);
  };

  //listas
  const [noticiasPrincipais, setNoticiasPrincipais] = useState([]);
  const [noticiaSecundarias, setNoticiaSecundarias] = useState([]);

  useEffect(() => {
    getNoticiasPrinc(setNoticiasPrincipais);
    getNoticiasSecund(setNoticiaSecundarias);
  }, []);

  useEffect(() => {
    if (authChecked && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, authChecked, router]);

  const handleAddTemporaryNews = (dados) => {
    const file = dados.imagem && dados.imagem[0];
    const previewUrl = file ? URL.createObjectURL(file) : null;

    const newNews = {
      id: Date.now(),
      titulo: dados.titulo,
      link: dados.link,
      categoria: dados.categoria,
      imagem: file,
      previewUrl: previewUrl,
      temporary: true,
    };

    if (dados.categoria === "P") {
      setNoticiasPrincipais((prev) => [...prev, newNews]);
    } else if (dados.categoria === "S") {
      setNoticiaSecundarias((prev) => [...prev, newNews]);
    }
    closeModal();
  };
  const handleEditTemporaryNews = (dados) => {
    const file = dados.imagem && dados.imagem[0];
    const previewUrl = file ? URL.createObjectURL(file) : null;
    if (selectedNews.temporary) {
      const oldCat = selectedNews.categoria;
      const newCat = dados.categoria;

      const updated = {
        ...selectedNews,
        titulo: dados.titulo,
        link: dados.link,
        categoria: newCat,
        imagem: file || selectedNews.imagem,
        previewUrl: file ? previewUrl : selectedNews.previewUrl,
      };

      if (oldCat === newCat) {
        if (newCat === "P") {
          setNoticiasPrincipais((prev) =>
            prev.map((n) => (n.id === selectedNews.id ? updated : n))
          );
        } else {
          setNoticiaSecundarias((prev) =>
            prev.map((n) => (n.id === selectedNews.id ? updated : n))
          );
        }
      } else {
        if (oldCat === "P") {
          setNoticiasPrincipais((prev) =>
            prev.filter((n) => n.id !== selectedNews.id)
          );
          setNoticiaSecundarias((prev) => [...prev, updated]);
        } else {
          setNoticiaSecundarias((prev) =>
            prev.filter((n) => n.id !== selectedNews.id)
          );
          setNoticiasPrincipais((prev) => [...prev, updated]);
        }
      }

      closeModal();
    } else {
      const oldCat = selectedNews.categoria;
      const newCat = dados.categoria;

      const updatedTemp = {
        ...selectedNews,
        titulo: dados.titulo,
        link: dados.link,
        categoria: newCat,
        imagem: file || selectedNews.imagem,
        previewUrl: file ? previewUrl : selectedNews.previewUrl,

        temporary: true,

        originalId: selectedNews.id,
      };
      if (oldCat === newCat) {
        if (newCat === "P") {
          setNoticiasPrincipais((prev) =>
            prev.map((n) => (n.id === selectedNews.id ? updatedTemp : n))
          );
        } else {
          setNoticiaSecundarias((prev) =>
            prev.map((n) => (n.id === selectedNews.id ? updatedTemp : n))
          );
        }
      } else {
        if (oldCat === "P") {
          setNoticiasPrincipais((prev) =>
            prev.filter((n) => n.id !== selectedNews.id)
          );
          setNoticiaSecundarias((prev) => [...prev, updatedTemp]);
        } else {
          setNoticiaSecundarias((prev) =>
            prev.filter((n) => n.id !== selectedNews.id)
          );
          setNoticiasPrincipais((prev) => [...prev, updatedTemp]);
        }
      }

      closeModal();
    }
  };
  const handleConfirmNews = async () => {
    const temporariasPrincipais = noticiasPrincipais.filter((n) => n.temporary);
    const temporariasSecundarias = noticiaSecundarias.filter(
      (n) => n.temporary
    );

    if (
      temporariasPrincipais.length === 0 &&
      temporariasSecundarias.length === 0
    ) {
      alert("Não há notícias temporárias para confirmar.");
      return;
    }

    try {
      for (const noticia of [
        ...temporariasPrincipais,
        ...temporariasSecundarias,
      ]) {
        if (noticia.originalId) {
          const dadosParaEnvio = {
            titulo: noticia.titulo,
            link: noticia.link,
            categoria: noticia.categoria,
            imagem: noticia.imagem ? [noticia.imagem] : [],
          };
          await handleEdit(
            noticia.originalId,
            dadosParaEnvio,
            setNoticiasPrincipais,
            setNoticiaSecundarias
          );
        } else {
          const dadosParaEnvio = {
            titulo: noticia.titulo,
            link: noticia.link,
            categoria: noticia.categoria,
            imagem: noticia.imagem ? [noticia.imagem] : [],
          };

          await handleCreate(
            dadosParaEnvio,
            setNoticiasPrincipais,
            setNoticiaSecundarias
          );
        }

        if (noticia.previewUrl) {
          URL.revokeObjectURL(noticia.previewUrl);
        }
      }

      await getNoticiasPrinc(setNoticiasPrincipais);
      await getNoticiasSecund(setNoticiaSecundarias);
    } catch (error) {
      console.error("Erro ao enviar notícias:", error);
      alert("Erro ao enviar notícias. Tente novamente.");
    }
  };
  const hasTemp =
    noticiasPrincipais.some((n) => n.temporary) ||
    noticiaSecundarias.some((n) => n.temporary);
  const handleCancelNews = async () => {
    if (!hasTemp) {
      alert("Não há notícias temporárias para cancelar.");
      return;
    }

    [...noticiasPrincipais, ...noticiaSecundarias].forEach((n) => {
      if (n.previewUrl) {
        URL.revokeObjectURL(n.previewUrl);
      }
    });

    setNoticiasPrincipais((prev) =>
      prev.filter((n) => !n.temporary || n.originalId)
    );
    setNoticiaSecundarias((prev) =>
      prev.filter((n) => !n.temporary || n.originalId)
    );

    await getNoticiasPrinc(setNoticiasPrincipais);
    await getNoticiasSecund(setNoticiaSecundarias);
  };
  function handleDeleteNew(noticia) {
    if (noticia.temporary) {
      handleCancelNews();
    } else {
      handleDeleteNews(noticia, setNoticiasPrincipais, setNoticiaSecundarias);
    }

    closeModal();
  }
  if (!authChecked) {
    return (
      <div className="h-dvh flex justify-center items-center font-semibold">
        Verificando autenticação...
      </div>
    );
  }
  return (
    <section className="relative py-4">
      <div className="flex items-center flex-col h-24 justify-center gap-2">
        <h1 className="text-4xl text-blue-800 font-semibold">
          Painel de Notícias
        </h1>
        <Buttons
          textSubmit={"Adicionar"}
          textCancel={"Sair"}
          handleClick={openModalAdd}
          onRequestClose={() => {
            logout();
            router.push("/login");
          }}
        />
      </div>

      {(noticiasPrincipais.length > 0 || noticiaSecundarias.length > 0) && (
        <SectionNews
          noticiasPrincipais={noticiasPrincipais}
          noticiaSecundarias={noticiaSecundarias}
          onEditClick={openModalEdit}
          onDelClick={openModalDell}
        />
      )}
      {hasTemp && (
        <Buttons
          handleClick={handleConfirmNews}
          onRequestClose={handleCancelNews}
          textCancel={"Cancelar"}
          textSubmit={"Confirmar"}
        />
      )}

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          title={
            mode === "edit"
              ? "Editar Notícia"
              : mode === "add"
              ? "Adicionar Notícia"
              : "Deletar Notícia"
          }
          form={
            <Form
              onRequestClose={closeModal}
              textSubmit={
                mode === "edit"
                  ? "Salvar"
                  : mode === "add"
                  ? "Adicionar"
                  : "Deletar"
              }
              mode={mode}
              selectedNews={selectedNews}
              submit={(dados) => {
                if (mode === "edit") {
                  handleEditTemporaryNews(dados);
                } else if (mode === "add") {
                  handleAddTemporaryNews(dados);
                } else {
                  handleDeleteNew(selectedNews);
                }
              }}
            />
          }
        />
      )}
    </section>
  );
}

export default Painel;
