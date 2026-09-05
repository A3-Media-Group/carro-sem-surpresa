import {
  Calculator,
  FileStack,
  Fuel,
  Gauge,
  HandCoins,
  Landmark,
  Receipt,
  Scale,
  Siren,
  Stethoscope,
  Tag,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Tool {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Lista única das ferramentas do site — usada na home (cards) e no
 * menu de navegação (Header/MobileNav), pra nunca ficar uma
 * desincronizada da outra quando uma ferramenta nova entrar.
 */
export const TOOLS: Tool[] = [
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
  {
    href: "/simulador-consorcio-financiamento-vista",
    icon: Scale,
    title: "Consórcio vs. Financiamento vs. à Vista",
    description:
      "Três jeitos de pagar o mesmo carro lado a lado, pelo custo total — não só pelo valor da parcela.",
  },
  {
    href: "/calculadora-custo-transferencia-veiculo",
    icon: FileStack,
    title: "Custo de Transferência",
    description:
      "Taxa do Detran, vistoria, reconhecimento de firma e placas — o custo de transferir a propriedade do carro.",
  },
  {
    href: "/calculadora-consumo-medio",
    icon: Gauge,
    title: "Consumo Médio Real",
    description:
      "Km rodado ÷ litros abastecidos — o consumo de verdade do seu carro, pra usar nas outras calculadoras.",
  },
  {
    href: "/diagnostico-de-problemas-do-carro",
    icon: Stethoscope,
    title: "Diagnóstico de Problemas",
    description:
      "Digite o sintoma do seu carro e veja as causas prováveis, o nível de urgência e o que perguntar antes de autorizar o reparo — pra não ser enganado pelo mecânico.",
  },
];
