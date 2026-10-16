import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "Escolha o tipo de veículo (carro, moto ou caminhão), depois a marca, o modelo e o ano-modelo. A consulta mostra o preço médio da Tabela FIPE, o código FIPE do veículo, o combustível e o mês de referência.",
    "Os dados vêm de uma API pública mantida por terceiros a partir da tabela oficial da Fundação Instituto de Pesquisas Econômicas. A consulta acontece no seu navegador; se o serviço externo estiver fora do ar, a ferramenta avisa com uma mensagem de erro.",
    "A FIPE é uma referência de preço médio de mercado, não o valor de um carro específico. Quilometragem, estado de conservação, opcionais, histórico e região mudam o preço real de compra e venda.",
  ],
  example: [
    "Para negociar um usado, consulte o modelo e o ano-modelo exatos (não o ano de fabricação) e compare com o anúncio. Um preço muito abaixo da FIPE merece atenção redobrada: pode indicar sinistro, débitos, problema de documentação ou golpe.",
    <>
      Depois, conte a depreciação: o guia{" "}
      <Link href="/guias/quanto-o-carro-desvaloriza-por-ano">
        quanto o carro desvaloriza por ano
      </Link>{" "}
      mostra como esse valor tende a cair com o tempo.
    </>,
  ],
  faq: [
    {
      question: "O valor da FIPE é o preço que vou pagar?",
      answer:
        "Não necessariamente. A FIPE é uma média de preços de mercado levantada para aquele modelo e ano-modelo. O preço de um carro específico depende de quilometragem, conservação, região e negociação.",
    },
    {
      question: "Com que frequência a tabela é atualizada?",
      answer:
        "A FIPE publica a tabela mensalmente. O mês de referência aparece junto com o valor consultado.",
    },
    {
      question: "Para que mais serve o valor FIPE?",
      answer:
        "Seguradoras costumam usá-lo como referência para a indenização em caso de perda total, e muitos estados partem de tabelas de mercado para definir a base de cálculo do IPVA. Confira sempre as regras da sua apólice e do seu estado.",
    },
  ],
  sources: [
    { label: "Fundação Instituto de Pesquisas Econômicas — FIPE", url: "https://veiculos.fipe.org.br/" },
  ],
};
