import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "A lista tem 16 verificações em quatro etapas: documentação e identidade, histórico e inspeção, teste e orçamento, e cuidados antes de pagar. Marque cada item conforme avança e imprima a lista para levar à visita.",
    "Um anúncio e um test-drive não revelam todo o histórico do veículo. A inspeção mecânica e a avaliação documental se complementam; uma não substitui a outra. Se houver divergências, esclareça-as antes de pagar.",
    <>
      Veja o{" "}
      <Link href="/guias/checklist-comprar-carro-usado">
        guia completo de compra de usados
      </Link>
      , aprenda a{" "}
      <Link href="/guias/consultar-recall-e-restricoes">
        consultar recall e restrições
      </Link>{" "}
      e estime o{" "}
      <Link href="/calculadora-custo-transferencia-veiculo">
        custo da transferência
      </Link>
      .
    </>,
  ],
  faq: [
    {
      question: "A lista guarda o que eu marquei?",
      answer:
        "Não. As marcações ficam só na página aberta e não são enviadas a nenhum servidor. Para guardar, imprima a lista antes de fechar a página.",
    },
    {
      question: "Preciso informar a placa ou o CPF do vendedor?",
      answer:
        "Não. O checklist não pede placa, CPF nem dados do vendedor. As consultas de débitos, recall e restrições devem ser feitas nos canais oficiais, com a participação do proprietário.",
    },
    {
      question: "O checklist substitui a vistoria cautelar?",
      answer:
        "Não. Ele organiza o que conferir, mas não avalia o carro. Uma vistoria cautelar ou a avaliação de um mecânico de confiança examinam itens que só um profissional consegue verificar; confira sempre o escopo do laudo.",
    },
  ],
  sources: [
    {
      label: "consulta de recall da Senatran",
      url: "https://www.gov.br/pt-br/servicos/realizar-consulta-sobre-recall-de-veiculos",
    },
    {
      label: "restrições e indicadores de veículos",
      url: "https://www.gov.br/pt-br/servicos/consultar-informacoes-sobre-restricoes-e-indicadores-de-veiculos",
    },
  ],
};
