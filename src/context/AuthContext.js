"use client";
import { createContext, useContext, useState } from "react";

// Contexto para armazenar o estado de autenticação
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado apenas durante a sessão

  const login = () => {
    setIsLoggedIn(true); // Marca como logado
  };

  const logout = () => {
    setIsLoggedIn(false); // Marca como deslogado
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext); // Hook para acessar o contexto
}
