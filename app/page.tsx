import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { HeroCalculator } from "@/components/home/HeroCalculator";
import { CALCULADORAS, TOOLS } from "@/lib/tools";
import ipvaData from "@/lib/data/ipva-por-estado.json";

const COMO_FUNCIONA = [
  {
    numero: "1",
    titulo: "Escolha uma ferramenta",
    descricao:
      "Calculadora, consulta de tabela, gerador de recibo ou diagnóstico por sintoma — todas gratuitas, sem cadastro.",
  },
  {
    numero: "2",
    titulo: "Preencha com os dados do seu carro",
    descricao:
      "Valor, km rodado, estado, sintoma — só o que a conta ou a busca realmente precisam, nada além disso.",
  },
  {
    numero: "3",
    titulo: "Veja o resultado na hora",
    descricao:
      "Tudo roda no seu navegador. Nenhum dado seu é enviado pra nenhum servidor nosso.",
  },
] as const;

const PILARES = [
  {
    href: "/calculadoras",
    icon: Calculator,
    titulo: "Calculadoras",
    contagem: `${CALCULADORAS.length} calculadoras`,
    descricao:
      "As que recebem os números do seu carro e fazem a conta: posse, financiamento, consórcio, manutenção.",
    exemplos: [
      { href: "/calculadora-custo-de-posse", label: "Custo de Posse" },
      { href: "/simulador-financiamento-veiculo", label: "Financiamento" },
      { href: "/calculadora-consumo-medio", label: "Consumo Médio" },
    ],
  },
  {
    href: "/ferramentas",
    icon: LayoutGrid,
    titulo: "Ferramentas",
    contagem: `${TOOLS.length} ferramentas`,
    descricao:
      "O diretório completo: as calculadoras e mais as consultas de tabela, o gerador de recibo e o diagnóstico.",
    exemplos: [
      { href: "/tabela-ipva-por-estado", label: "IPVA por Estado" },
      { href: "/consulta-tabela-fipe", label: "Consulta FIPE" },
      { href: "/diagnostico-de-problemas-do-carro", label: "Diagnóstico" },
    ],
  },
  {
    href: "/guias",
    icon: BookOpen,
    titulo: "Guias",
    contagem: "13 guias completos",
    descricao:
      "Pra entender o porquê por trás do número — no tom que ninguém te conta na concessionária.",
    exemplos: [
      { href: "/guias/checklist-comprar-carro-usado", label: "Comprar Usado" },
      { href: "/guias/carro-0km-ou-seminovo", label: "0km ou Seminovo" },
      { href: "/guias/faq-custo-de-carro", label: "FAQ" },
    ],
  },
] as const;

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Sem cadastro, sem pegadinha",
    description:
      "Nenhuma ferramenta pede e-mail, cartão ou login. É abrir e usar.",
  },
  {
    icon: Lock,
    title: "Seus dados ficam com você",
    description:
      "As calculadoras e o gerador de recibo rodam no seu navegador — nada é enviado pra nenhum servidor.",
  },
  {
    icon: BadgeCheck,
    title: "Fontes verificadas",
    description:
      "Dados de IPVA pesquisados estado a estado, com data de referência e aviso claro quando é estimativa.",
  },
] as const;

const GUIAS_DESTAQUE = [
  {
    href: "/guias/como-calcular-se-carro-cabe-no-orcamento",
    titulo: "Como Calcular se um Carro Cabe no Seu Orçamento",
    resumo: "A regra dos 20% da renda, passo a passo.",
  },
  {
    href: "/guias/reduzir-custo-por-km-rodado",
    titulo: "5 Formas de Reduzir o Custo por Quilômetro Rodado",
    resumo: "O gasto escondido do dia a dia, resolvido com hábito.",
  },
  {
    href: "/guias/faq-custo-de-carro",
    titulo: "FAQ: Perguntas Frequentes Sobre o Custo de um Carro",
    resumo: "Depreciação, elétrico e isenção de IPVA, direto ao ponto.",
  },
] as const;

const totalEstados = ipvaData.estados.length;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden bg-graphite text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 82% 15%, rgba(249,115,22,0.35), transparent 55%), radial-gradient(circle at 10% 90%, rgba(249,115,22,0.12), transparent 45%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_420px] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Sparkles size={14} className="text-brand-orange" />
              100% grátis, sem cadastro
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Carro <span className="text-brand-orange">Sem Surpresa</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/70">
              Ajudamos você a nunca mais ser pego de surpresa pelos custos
              escondidos de comprar, manter ou vender um carro no Brasil.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/diagnostico-de-problemas-do-carro"
                prefetch={false}
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-orange px-7 text-sm font-semibold text-graphite hover:bg-brand-orange-dark hover:text-white"
              >
                <Stethoscope size={16} />
                Diagnosticar um problema
              </Link>
              <Link
                href="/guias"
                prefetch={false}
                className="inline-flex h-12 items-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver guias completos
              </Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[
                { value: String(TOOLS.length), label: "ferramentas grátis" },
                { value: String(totalEstados), label: "estados no IPVA" },
                { value: "100%", label: "no seu navegador" },
                { value: "0", label: "cadastros exigidos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold text-brand-orange">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-white/60">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroCalculator />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          Como funciona
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {COMO_FUNCIONA.map((passo) => (
            <div key={passo.numero}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-graphite text-sm font-bold text-brand-orange">
                {passo.numero}
              </span>
              <h3 className="mt-3 font-semibold text-neutral-900">
                {passo.titulo}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PILARES */}
      <section id="ferramentas" className="bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Por onde começar
            </h2>
            <p className="mt-2 text-neutral-600">
              Três jeitos de usar o site, dependendo do que você precisa
              agora.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {PILARES.map((pilar) => (
              <div
                key={pilar.href}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
                  <pilar.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {pilar.titulo}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-brand-orange-dark">
                  {pilar.contagem}
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  {pilar.descricao}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pilar.exemplos.map((exemplo) => (
                    <Link
                      key={exemplo.href}
                      href={exemplo.href}
                      prefetch={false}
                      className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 hover:border-brand-orange hover:text-brand-orange-dark"
                    >
                      {exemplo.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href={pilar.href}
                  prefetch={false}
                  className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark"
                >
                  Ver {pilar.titulo.toLowerCase()}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANÇA */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
                <point.icon size={20} />
              </span>
              <h3 className="mt-3 font-semibold text-neutral-900">
                {point.title}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIAS EM DESTAQUE */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                Aprenda a fundo
              </h2>
              <p className="mt-2 text-neutral-600">
                Guias completos, no tom que ninguém te conta na concessionária.
              </p>
            </div>
            <Link
              href="/guias"
              prefetch={false}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark hover:underline"
            >
              Ver todos os guias
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {GUIAS_DESTAQUE.map((guia) => (
              <Link
                key={guia.href}
                href={guia.href}
                prefetch={false}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-brand-orange/50 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
                  <BookOpen size={18} />
                </span>
                <h3 className="mt-3 font-semibold text-neutral-900">
                  {guia.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {guia.resumo}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-graphite">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.25), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Não sabe por onde começar?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Se o carro tem um problema, comece pelo diagnóstico. Se é sobre
            dinheiro, comece pelo custo real de posse.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/diagnostico-de-problemas-do-carro"
              prefetch={false}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-orange px-7 text-sm font-semibold text-graphite hover:bg-brand-orange-dark hover:text-white"
            >
              Diagnosticar um problema
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/calculadora-custo-de-posse"
              prefetch={false}
              className="inline-flex h-12 items-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white hover:bg-white/10"
            >
              Calcular custo de posse
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
