import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  Fuel,
  Route,
  ShieldCheck,
  Wrench,
  BookOpen,
  Check,
  Search,
} from "lucide-react";
import { HeroCalculator } from "@/components/home/HeroCalculator";
import { TOOLS } from "@/lib/tools";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = { alternates: { canonical: "/" } };
const journeys = [
  {
    title: "Vou comprar um carro",
    label: "ANTES DA CHAVE",
    icon: ShieldCheck,
    text: "Confira o usado, compare o preço e descubra se a conta cabe no bolso.",
    href: "/checklist-carro-usado",
    links: [
      { href: "/consulta-tabela-fipe", label: "Consultar FIPE" },
      {
        href: "/simulador-financiamento-veiculo",
        label: "Simular financiamento",
      },
    ],
  },
  {
    title: "Quero gastar menos",
    label: "NO DIA A DIA",
    icon: Fuel,
    text: "Compare combustíveis e entenda para onde vai o dinheiro a cada quilômetro.",
    href: "/calculadora-alcool-ou-gasolina",
    links: [
      { href: "/calculadora-consumo-medio", label: "Medir consumo" },
      { href: "/calculadora-custo-viagem", label: "Planejar uma viagem" },
    ],
  },
  {
    title: "Preciso cuidar do carro",
    label: "SEM DEIXAR PARA DEPOIS",
    icon: Wrench,
    text: "Organize a manutenção e entenda os sintomas antes de conversar com a oficina.",
    href: "/manutencao-preventiva-vs-corretiva",
    links: [
      {
        href: "/diagnostico-de-problemas-do-carro",
        label: "Entender um sintoma",
      },
      {
        href: "/guias/consultar-recall-e-restricoes",
        label: "Verificar recall",
      },
    ],
  },
];
export default function Home() {
  return (
    <main className="home-page">
      <section className="motor-hero">
        <div className="motor-container hero-grid">
          <div className="hero-copy">
            <span className="section-kicker">
              <span className="signal-dot" /> MAIS CONTROLE. MENOS SURPRESAS.
            </span>
            <h1>
              Seu próximo carro.
              <br />
              <em>
                Sua próxima viagem.
                <br />
                Nenhuma surpresa.
              </em>
            </h1>
            <p>
              Entenda quanto custa comprar, manter e usar um carro.
              Faça as contas hoje. Dirija com mais tranquilidade amanhã.
            </p>
            <div className="hero-buttons">
              <Link
                href="/ferramentas"
                prefetch={false}
                className="motor-button"
              >
                Encontre sua ferramenta <ArrowUpRight size={18} />
              </Link>
              <Link href="/guias" prefetch={false} className="quiet-link">
                Explore os guias <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={14} /> Sem cadastro
              </span>
              <span>
                <Check size={14} /> Cálculos gratuitos
              </span>
              <span>
                <Check size={14} /> Dados editáveis
              </span>
            </div>
          </div>
          <div className="dashboard-preview">
            <div className="dashboard-top">
              <span>
                <Calculator size={15} /> SEU CARRO, EM NÚMEROS
              </span>
              <span className="live-label">SIMULAÇÃO</span>
            </div>
            <HeroCalculator />
            <p className="dashboard-caption">
              O preço da etiqueta é só o começo.
            </p>
          </div>
        </div>
        <div className="road-line" aria-hidden="true" />
      </section>
      <div className="quick-lane">
        <div className="motor-container">
          <span>ACESSO RÁPIDO</span>
          <Link href="/consulta-tabela-fipe">
            Tabela FIPE <ArrowUpRight size={14} />
          </Link>
          <Link href="/calculadora-alcool-ou-gasolina">
            Etanol ou gasolina <ArrowUpRight size={14} />
          </Link>
          <Link href="/calculadora-custo-viagem">
            Custo de viagem <ArrowUpRight size={14} />
          </Link>
          <Link href="/checklist-carro-usado">
            Checklist do usado <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <section className="motor-container tool-search-section" aria-label="Buscar ferramentas">
        <div>
          <span className="section-kicker">VAMOS RESOLVER?</span>
          <h2>O que você precisa descobrir?</h2>
        </div>
        <form action="/ferramentas" className="home-search" role="search">
          <Search size={20} aria-hidden="true" />
          <label htmlFor="home-tool-search" className="sr-only">Buscar ferramenta</label>
          <input id="home-tool-search" name="q" type="search" placeholder="Ex.: combustível, FIPE, viagem…" maxLength={120} />
          <button type="submit" aria-label="Buscar ferramentas"><ArrowUpRight size={21} /></button>
        </form>
      </section>
      <section className="motor-container home-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">QUAL É O SEU PRÓXIMO PASSO?</span>
            <h2>Um caminho para cada momento.</h2>
          </div>
          <p>
            Comece pela sua dúvida.
            <br />
            Encontre a próxima decisão.
          </p>
        </div>
        <div className="journey-grid">
          {journeys.map((j) => (
            <article className="journey-card" key={j.title}>
              <div className="journey-top">
                <j.icon size={24} />
                <span>{j.label}</span>
              </div>
              <h3>
                <Link href={j.href}>
                  {j.title} <ArrowUpRight size={19} />
                </Link>
              </h3>
              <p>{j.text}</p>
              <div className="journey-links">
                {j.links.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="motor-container">
        <div className="trip-promo">
          <div>
            <span className="section-kicker">
              NOVA FERRAMENTA · PLANEJE A ESTRADA
            </span>
            <h2>
              A viagem começa
              <br />
              com uma boa conta.
            </h2>
            <p>
              Combustível, pedágios, estacionamento e divisão entre passageiros.
              Veja a estimativa antes de sair.
            </p>
            <Link className="motor-button" href="/calculadora-custo-viagem">
              Calcular minha viagem <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="route-art" aria-hidden="true">
            <Route size={150} strokeWidth={1} />
            <span>
              SAÍDA <i /> DESTINO
            </span>
          </div>
        </div>
      </section>
      <section className="motor-container home-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              CONHECIMENTO QUE VAI COM VOCÊ
            </span>
            <h2>Antes de decidir, entenda.</h2>
          </div>
          <Link className="quiet-link" href="/guias">
            Todos os {GUIDES.length} guias <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="reading-grid">
          {GUIDES.slice(-4).map((g, i) => (
            <Link href={g.href} className="reading-card" key={g.href}>
              <div className={`reading-cover cover-${i}`}>
                <BookOpen size={44} strokeWidth={1} />
                <span>GUIA PRÁTICO / 0{i + 1}</span>
              </div>
              <div className="reading-body">
                <h3>{g.titulo}</h3>
                <p>{g.resumo}</p>
                <span className="quiet-link">
                  Ler o guia <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="trust-band">
        <div className="motor-container">
          <div>
            <ShieldCheck size={26} />
            <h2>Clareza em cada etapa.</h2>
          </div>
          <p>
            {TOOLS.length} ferramentas gratuitas. Premissas visíveis e conteúdo
            com referências para você conferir.
          </p>
          <Link href="/sobre" className="quiet-link">
            Conheça nossos critérios <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
