import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
