/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://backendacs-production.up.railway.app/",
      "www.acs.art.br",
      "cdn.acs.art.br"
    ], // Adicione os domínios confiáveis para carregar imagens
  },
};

export default nextConfig;
