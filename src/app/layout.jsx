import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Painel de Notícias",
  description: "Painel Administrativo de Notícias da ACS",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
