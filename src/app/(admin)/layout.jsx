export const metadata = {
  title: "Painel de notícias - ACS",
  icons: {
    icon: "https://cdn.acs.art.br/acs%2Festrutura%2FlogoACS.png", 
    shortcut: "https://cdn.acs.art.br/acs%2Festrutura%2FlogoACS.png", 
    apple: "https://cdn.acs.art.br/acs%2Festrutura%2FlogoACS.png", 
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} type="image/png" />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
      </head>
      <body>{children}</body>
    </html>
  );
}
