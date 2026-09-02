import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Cookies",
  description:
    "Como o Carro Sem Surpresa usa cookies e ferramentas de terceiros, e como você pode gerenciar suas preferências.",
};

export default function AvisoDeCookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Aviso de Cookies</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Última atualização: setembro de 2026
      </p>

      <div className="mt-8 space-y-6 text-neutral-700">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            O que são cookies
          </h2>
          <p className="mt-2">
            Cookies são pequenos arquivos de texto armazenados no seu
            navegador quando você visita um site. Eles ajudam o site a
            funcionar corretamente, lembrar preferências e entender como os
            visitantes o utilizam.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Quais cookies usamos
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li>
              <strong>Cookies essenciais:</strong> necessários para o
              funcionamento básico do site (por exemplo, lembrar que você já
              viu este aviso).
            </li>
            <li>
              <strong>Cookies de audiência/estatística:</strong> usados para
              entender quantas pessoas visitam o site e quais páginas são
              mais acessadas.
            </li>
            <li>
              <strong>Cookies de publicidade (Google AdSense):</strong>{" "}
              usados pelo Google e seus parceiros para exibir anúncios
              relevantes com base na sua navegação.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Como gerenciar seus cookies
          </h2>
          <p className="mt-2">
            Você pode bloquear ou apagar cookies a qualquer momento nas
            configurações do seu navegador. Desativar cookies pode afetar o
            funcionamento de algumas partes do site. Para controlar
            especificamente anúncios personalizados do Google, visite as{" "}
            <a
              href="https://adssettings.google.com/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Configurações de Anúncios do Google
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Mais informações
          </h2>
          <p className="mt-2">
            Para saber como tratamos dados pessoais de forma mais ampla,
            consulte nossa{" "}
            <a href="/politica-de-privacidade" className="underline">
              Política de Privacidade
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
