import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  Fuel,
  HandCoins,
  Landmark,
  Lock,
  Receipt,
  ShieldCheck,
  Siren,
  Sparkles,
  Tag,
  Wrench,
} from "lucide-react";
import ipvaData from "@/lib/data/ipva-por-estado.json";

const TOOLS = [
  {
    href: "/calculadora-custo-de-posse",
    icon: Calculator,
    title: "Custo Real de Posse",
    description:
      "Depreciação, IPVA, seguro, combustível e manutenção somados — o custo mensal de verdade do seu carro.",
  },
  {
    href: "/manutencao-preventiva-vs-corretiva",
    icon: Wrench,
    title: "Manutenção Preventiva vs. Corretiva",
    description:
      "Veja o que está vencendo no seu carro e quanto você economiza fazendo o preventivo em vez de esperar quebrar.",
  },
  {
    href: "/gerador-recibo-veiculo",
    icon: Receipt,
    title: "Gerador de Recibo",
    description:
      "Recibo de compra e venda em PDF, pronto pra imprimir e assinar. Tudo no seu navegador, sem cadastro.",
  },
  {
    href: "/tabela-ipva-por-estado",
    icon: Landmark,
    title: "IPVA por Estado",
    description:
      "Alíquota e regra de isenção de todos os 27 estados, com busca rápida por nome ou sigla.",
  },
  {
    href: "/calculadora-alcool-ou-gasolina",
    icon: Fuel,
    title: "Álcool ou Gasolina",
    description:
      "Com o consumo real do seu carro, não a regra genérica dos 70%, descubra o que compensa abastecer.",
  },
  {
    href: "/simulador-financiamento-veiculo",
    icon: HandCoins,
    title: "Financiamento vs. à Vista",
    description:
      "Parcela, total pago e quanto disso é só juros — o custo real de financiar em vez de comprar à vista.",
  },
  {
    href: "/tabela-multas-transito",
    icon: Siren,
    title: "Multas de Trânsito",
    description:
      "Valor e pontos na CNH das infrações mais comuns, com busca rápida.",
  },
  {
    href: "/consulta-tabela-fipe",
    icon: Tag,
    title: "Consulta Tabela FIPE",
    description:
      "Preço médio de mercado de carros, motos e caminhões, por marca, modelo e ano.",
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
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            <Sparkles size={14} className="text-brand-orange" />
            100% grátis, sem cadastro
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Carro <span className="text-brand-orange">Sem Surpresa</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Ajudamos você a nunca mais ser pego de surpresa pelos custos
            escondidos de comprar, manter ou vender um carro no Brasil.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/calculadora-custo-de-posse"
              prefetch={false}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-orange px-7 text-sm font-semibold text-graphite hover:bg-brand-orange-dark hover:text-white"
            >
              Calcular o custo real do meu carro
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/guias"
              prefetch={false}
              className="inline-flex h-12 items-center rounded-md border border-white/25 px-7 text-sm font-semibold text-white hover:bg-white/10"
            >
              Ver guias completos
            </Link>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 text-left sm:grid-cols-4">
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
      </section>

      {/* FERRAMENTAS */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            As {TOOLS.length} ferramentas
          </h2>
          <p className="mt-2 text-neutral-600">
            Cada uma resolve um gasto específico que costuma pegar o
            motorista brasileiro de surpresa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              prefetch={false}
              className="group flex flex-col rounded-2xl border border-neutral-200 p-6 transition hover:border-brand-orange/50 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-brand-orange-dark">
                <tool.icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {tool.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">
                {tool.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark">
                Usar agora
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CONFIANÇA */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <div key={point.title}>
                <point.icon size={24} className="text-brand-orange-dark" />
                <h3 className="mt-3 font-semibold text-neutral-900">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIAS EM DESTAQUE */}
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
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
              className="group flex flex-col rounded-2xl border border-neutral-200 p-6 transition hover:border-brand-orange/50 hover:shadow-md"
            >
              <BookOpen size={20} className="text-brand-orange-dark" />
              <h3 className="mt-3 font-semibold text-neutral-900">
                {guia.titulo}
              </h3>
              <p className="mt-2 flex-1 text-sm text-neutral-600">
                {guia.resumo}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
