"use client";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const signInSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  password: z
    .string()
    .min(8, { message: "Senha deve ter pelo menos 8 caracteres" }),
});
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();
  const loginUsers = async (data) => {
    try {
      const response = await fetch("http://localhost:3800/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Erro ao verificar credenciais");
      }
      if (result.success) {
        alert("Login bem-sucedido");
        router.push("/index.html");
      } else {
        alert("Usuário ou senha incorreto!");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar ao servidor!");
    }
  };
  return (
    <div className="flex justify-center h-dvh items-center">
      <form
        onSubmit={handleSubmit(loginUsers)}
        className="bg-blue-900/90 w-11/12 flex flex-col items-center gap-8 py-10 rounded-2xl"
      >
        <h1 className="text-3xl font-semibold text-white">ACS NEWS</h1>
        <div className="flex flex-col gap-4">
          <input
            className="px-4 py-1.5 rounded-md outline-none"
            type="text"
            placeholder="usuário"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <input
            className="px-4 py-1.5 rounded-md outline-none"
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button className="px-10 py-1 text-lg bg-white rounded-lg font-bold">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
