import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";


export const metadata = {
  title: "Associação Cultural Surubinense",
  description:
    "Site da Associação Cultural Surubinense e noticias sobre cultura da cidade de Surubim-PE e dos projetos da Associação Cultural Surubinense",
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
