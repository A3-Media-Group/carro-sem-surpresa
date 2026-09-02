import type { NextConfig } from "next";

// Deploy alvo: Hostinger. Como ainda não foi confirmado se o plano de
// hospedagem roda Node.js (SSR/ISR), o projeto está configurado como
// export estático — funciona em qualquer hospedagem, inclusive
// compartilhada. Todas as ferramentas rodam 100% client-side.
// Se depois for confirmado suporte a Node.js, remova `output: "export"`
// e `images.unoptimized` para voltar a usar SSR/otimização de imagem nativa.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
