"use client";
import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
