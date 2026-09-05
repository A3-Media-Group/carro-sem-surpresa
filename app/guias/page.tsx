import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Guias sobre o Custo Real de um Carro",
  description:
    "Guias completos e gratuitos pra você entender — e controlar — os custos escondidos de comprar, manter e vender um carro no Brasil.",
};

const guias = [
  {
    href: "/guias/como-calcular-se-carro-cabe-no-orcamento",
    titulo: "Como Calcular se um Carro Cabe no Seu Orçamento",
    resumo:
      "A regra dos 20% da renda, passo a passo, pra evitar o aperto no orçamento depois da compra.",
  },
  {
    href: "/guias/reduzir-custo-por-km-rodado",
    titulo: "5 Formas de Reduzir o Custo por Quilômetro Rodado",
    resumo:
      "O gasto escondido do dia a dia: hábitos simples que baixam o custo por km sem trocar de carro.",
  },
  {
    href: "/guias/faq-custo-de-carro",
    titulo: "FAQ: Perguntas Frequentes Sobre o Custo de um Carro",
    resumo:
      "Depreciação no primeiro ano, manutenção de elétrico e isenção de IPVA — direto ao ponto.",
  },
  {
    href: "/guias/checklist-comprar-carro-usado",
    titulo: "Comprar Carro Usado: Checklist Completo Antes de Fechar Negócio",
    resumo:
      "16 pontos pra checar antes de assinar qualquer coisa — documentação, lataria, test-drive e vistoria.",
  },
  {
    href: "/guias/carro-0km-ou-seminovo",
    titulo: "0km ou Seminovo: Qual Vale Mais a Pena",
    resumo:
      "A resposta muda de acordo com quanto tempo você fica com o carro e quanto roda por mês.",
  },
  {
    href: "/guias/seguro-auto-vale-a-pena",
    titulo: "Seguro Auto: Vale a Pena, Como Funciona e Quanto Custa",
    resumo:
      "O que define o preço da apólice, franquia alta vs. reduzida, e quando faz sentido não ter completo.",
  },
  {
    href: "/guias/carro-com-sinistro-vale-a-pena-comprar",
    titulo: "Carro com Sinistro (Batido): Riscos de Comprar e Como Verificar",
    resumo:
      "O desconto no preço não é generosidade — é o preço do risco que está sendo repassado a você.",
  },
  {
    href: "/guias/ipva-atrasado-multa-e-como-regularizar",
    titulo: "IPVA Atrasado: Multa, Juros e Como Regularizar",
    resumo:
      "Multa diária, juros, negativação e risco de apreensão — e como regularizar em qualquer estado.",
  },
  {
    href: "/guias/licenciamento-atrasado-multa",
    titulo: "Licenciamento Atrasado: Multa e o que Acontece",
    resumo:
      "Atraso de um dia já é infração gravíssima: R$293,47 de multa e 7 pontos na CNH.",
  },
  {
    href: "/guias/assinatura-de-carro-vs-financiamento-vs-a-vista",
    titulo: "Assinatura de Carro vs. Financiamento vs. à Vista",
    resumo:
      "Um jeito de ter carro sem ser dono de nada — veja quando isso compensa e quando não compensa.",
  },
  {
    href: "/guias/carro-eletrico-ou-hibrido-custo-de-manutencao",
    titulo: "Carro Elétrico ou Híbrido: o Custo Real de Manutenção Compensa?",
    resumo:
      "Menos peça pra trocar, mas a conta muda se a bateria sair da garantia.",
  },
  {
    href: "/guias/revisao-fora-da-concessionaria-perde-garantia",
    titulo: "Revisão Fora da Concessionária Perde a Garantia?",
    resumo:
      "O que diz o Código de Defesa do Consumidor — e o que a concessionária não te conta.",
  },
  {
    href: "/guias/quanto-o-carro-desvaloriza-por-ano",
    titulo: "Quanto o Carro Desvaloriza por Ano: Tabela de Depreciação",
    resumo:
      "O gasto que ninguém vê saindo da conta, mas que corrói o patrimônio todo mês.",
  },
];

export default function GuiasPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <PageHeading icon={BookOpen} title="Guias sobre o Custo Real de um Carro">
        Conteúdo gratuito pra você entender o gasto que ninguém te conta —
        antes, durante e depois de ter um carro.
      </PageHeading>

      <div className="mt-10 space-y-4">
        {guias.map((guia) => (
          <Link
            key={guia.href}
            href={guia.href}
            prefetch={false}
            className="group flex items-center justify-between gap-4 rounded-xl border border-neutral-200 p-6 transition hover:border-brand-orange/50 hover:shadow-md"
          >
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                {guia.titulo}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">{guia.resumo}</p>
            </div>
            <ArrowRight
              size={18}
              className="shrink-0 text-brand-orange-dark transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
