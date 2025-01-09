"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserAPI } from "@/api/authLogin";

const signInSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  password: z
    .string()
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const handleLogin = (data) => {
    setLoading(true);
    loginUserAPI(data)
      .then((result) => {
        if (result.success) {
          login();
          router.push("/painel");
        } else {
          alert("Usuário ou senha incorreto!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Usuário ou senha incorreto!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center w-dvw h-dvh items-center mx-auto bg-blue-800">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-blue-950 p-2 rounded-lg w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/3 flex flex-col items-center gap-8 py-10"
      >
        <h1 className="text-3xl font-semibold text-white">ACS NEWS</h1>
        <div className="flex flex-col gap-4 text-blue-950">
          <input
            className="px-4 py-1.5 rounded-md outline-none"
            type="text"
            placeholder="Administrador"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input
            className="px-4 py-1.5 rounded-md outline-none"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="px-10 py-1 text-lg bg-white rounded-lg font-bold text-blue-950"
          disabled={loading}
        >
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default Login;
