import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "Digite o sintoma com suas palavras — “barulho ao frear”, “carro não liga”, “luz no painel”, “cheiro de gasolina” — e a ferramenta procura entre 30 sintomas comuns, organizados por sistema do carro.",
    "Para cada sintoma, ela mostra as causas mais prováveis, o nível de urgência, uma faixa de custo estimada e as perguntas a fazer ao mecânico antes de autorizar o reparo. Alguns sintomas trazem alertas de golpes comuns em oficinas.",
    "O conteúdo é educativo e vale para carros a combustão de qualquer marca. Ele não substitui a inspeção de um profissional: serve como um segundo olhar para você chegar à oficina sabendo o que perguntar.",
  ],
  example: [
    "Ao buscar “barulho ao frear”, a ferramenta lista como causa mais provável a pastilha de freio desgastada (estimativa de R$ 150 a R$ 450), seguida de sujeira entre pastilha e disco e de disco empenado. Entre as perguntas sugeridas está pedir para ver a pastilha e o disco desgastados antes da troca, e perguntar se só a pastilha não resolve.",
    <>
      Se o diagnóstico apontar manutenção atrasada, compare o custo de agir
      agora com o de esperar no simulador de{" "}
      <Link href="/manutencao-preventiva-vs-corretiva">
        manutenção preventiva vs. corretiva
      </Link>
      .
    </>,
  ],
  faq: [
    {
      question: "O diagnóstico vale para o meu modelo de carro?",
      answer:
        "As causas listadas são comuns em carros a combustão de qualquer marca. O tipo de carroceria escolhido só personaliza a ilustração; detalhes específicos do seu modelo precisam ser confirmados por um mecânico.",
    },
    {
      question: "As faixas de custo são um orçamento?",
      answer:
        "Não. São estimativas nacionais aproximadas de peça e mão de obra para carros populares. Use para perceber se um orçamento está muito fora do razoável, não como preço fechado.",
    },
    {
      question: "Como evitar ser enganado na oficina?",
      answer:
        "Peça orçamento por escrito antes do serviço, pergunte por que cada peça precisa ser trocada, peça para ver a peça antiga e, em reparos caros, busque uma segunda opinião.",
    },
  ],
};
