import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Buttons from "./Buttons";
const fileListType = typeof FileList === "function" ? FileList : null;
const newsCreateSchema = z.object({
  titulo: z.string().min(1, "O título é obrigatório."),
  link: z.string().url("O link precisa ser uma URL válida."),
  categoria: z.enum(["P", "S"], "Selecione uma categoria válida."),
  imagem: fileListType
    ? z.instanceof(fileListType).optional()
    : z.any().optional(),
});

function Form({ submit, onRequestClose, textSubmit, selectedNews, mode }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newsCreateSchema),
  });
  useEffect(() => {
    if (selectedNews) {
      setValue("titulo", selectedNews.titulo);
      setValue("link", selectedNews.link);
      setValue("categoria", selectedNews.categoria);
    }
  }, [selectedNews, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2 mt-6">
      {/* Campo Título */}
      <div className="flex flex-col">
        <textarea
          className="bg-blue-950 border-2 border-solid border-white px-2 py-1 focus:outline-none focus:ring-0 rounded-md h-14"
          placeholder="Digite o título"
          {...register("titulo")}
          disabled={mode === "disabled" ? "disabled" : null}
        />
        {errors.titulo && (
          <span className="text-red-600">{errors.titulo.message}</span>
        )}
      </div>

      {/* Campo Link */}
      <div className="flex flex-col">
        <input
          type="url"
          placeholder="Digite o link da publicação"
          className="bg-blue-950 border-2 border-solid border-white px-2 py-1 focus:outline-none focus:ring-0 rounded-md"
          {...register("link")}
          disabled={mode === "disabled" ? "disabled" : null}
        />
        {errors.link && (
          <span className="text-red-600">{errors.link.message}</span>
        )}
      </div>

      {/* Campo Categoria */}
      <div className="flex flex-col">
        <select
          className="bg-blue-950 border-2 border-solid border-white px-2 py-1 focus:outline-none focus:ring-0 rounded-md"
          {...register("categoria")}
          disabled={mode === "disabled" ? "disabled" : null}
        >
          <option value="">Selecione uma categoria</option>
          <option value="P">Principal</option>
          <option value="S">Secundária</option>
        </select>
        {errors.categoria && (
          <span className="text-red-600">{errors.categoria.message}</span>
        )}
      </div>

      {/* Campo Imagem */}
      <div className="flex flex-col">
        <input
          type="file"
          className="bg-blue-950 border-2 border-solid border-white px-2 py-1 focus:outline-none focus:ring-0 rounded-md"
          {...register("imagem")}
          disabled={mode === "disabled" ? "disabled" : null}
        />
        {errors.imagem && (
          <span className="text-red-600">{errors.imagem.message}</span>
        )}
      </div>

      {/* Botões */}
      <Buttons
        onRequestClose={onRequestClose}
        textSubmit={textSubmit}
        textCancel={"Cancelar"}
      />
    </form>
  );
}

export default Form;
