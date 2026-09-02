import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o Carro Sem Surpresa coleta, usa e protege os dados dos visitantes do site.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Última atualização: setembro de 2026
      </p>

      <div className="mt-8 space-y-6 text-neutral-700">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            1. Quem somos
          </h2>
          <p className="mt-2">
            O Carro Sem Surpresa (carrosemsurpresa.com.br) é um site com
            calculadoras e conteúdos gratuitos sobre custos de comprar,
            manter e vender um carro no Brasil. Esta política explica como
            tratamos os dados de quem visita o site, em conformidade com a
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            2. Quais dados coletamos
          </h2>
          <p className="mt-2">
            As calculadoras do site (custo de posse, manutenção, recibo de
            veículo, IPVA) rodam inteiramente no seu navegador: os valores
            que você digita não são enviados para os nossos servidores nem
            armazenados por nós. Podemos coletar automaticamente dados de
            navegação (como páginas visitadas, tipo de dispositivo e
            localização aproximada) por meio de cookies e ferramentas de
            terceiros descritas no{" "}
            <a href="/aviso-de-cookies" className="underline">
              Aviso de Cookies
            </a>
            , usados para estatísticas de audiência e exibição de anúncios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            3. Publicidade e Google AdSense
          </h2>
          <p className="mt-2">
            O site pode exibir anúncios por meio do Google AdSense. O Google
            e seus parceiros podem usar cookies para veicular anúncios com
            base em visitas anteriores suas a este e a outros sites. Você
            pode desativar a personalização de anúncios nas{" "}
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
            4. Formulário de recibo de veículo
          </h2>
          <p className="mt-2">
            O gerador de recibo de compra e venda processa os dados do
            formulário (comprador, vendedor, dados do veículo) somente no
            seu navegador, para montar o PDF. Nenhum desses dados é enviado
            ou armazenado em nossos servidores.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            5. Seus direitos como titular de dados
          </h2>
          <p className="mt-2">
            Conforme a LGPD, você tem direito a confirmar a existência de
            tratamento, acessar, corrigir, anonimizar ou solicitar a
            eliminação de dados pessoais, entre outros direitos previstos na
            lei. Para exercer esses direitos ou tirar dúvidas, entre em
            contato pelo e-mail{" "}
            <a href="mailto:contato@carrosemsurpresa.com.br" className="underline">
              contato@carrosemsurpresa.com.br
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            6. Alterações desta política
          </h2>
          <p className="mt-2">
            Esta política pode ser atualizada periodicamente. Recomendamos
            revisitar esta página de tempos em tempos.
          </p>
        </section>
      </div>
    </main>
  );
}
