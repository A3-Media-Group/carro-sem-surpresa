import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "Preencha os dados do vendedor, do comprador, do veículo e da negociação, e o gerador monta um recibo de compra e venda em PDF, pronto para imprimir e assinar. São obrigatórios: nome e CPF/CNPJ das duas partes, marca/modelo, placa, Renavam, valor e data da venda.",
    "O PDF é gerado no seu próprio navegador. Nenhum dado digitado é enviado a servidores do site, e não é preciso cadastro.",
    "Imprima duas vias, assine com o comprador e guarde uma cópia com o comprovante de pagamento. O recibo registra o acordo entre as partes; ele não substitui a transferência no Detran.",
  ],
  example: [
    "Na venda de um carro por R$ 45.000, o recibo identifica vendedor e comprador, o veículo pela placa e pelo Renavam, o valor, a forma de pagamento e a data. Com esse registro, as duas partes têm prova do que foi combinado e de quando a posse mudou de mãos.",
    <>
      Antes de assinar, siga o{" "}
      <Link href="/checklist-carro-usado">checklist do carro usado</Link> e
      reserve o dinheiro da{" "}
      <Link href="/calculadora-custo-transferencia-veiculo">transferência</Link>
      .
    </>,
  ],
  faq: [
    {
      question: "O recibo substitui a transferência no Detran?",
      answer:
        "Não. A propriedade só muda oficialmente com a transferência no Detran, feita com a autorização de transferência (ATPV-e). O comprador tem 30 dias para registrar a transferência, e o vendedor deve comunicar a venda.",
    },
    {
      question: "Preciso reconhecer firma no recibo?",
      answer:
        "O recibo gerado aqui é um documento particular entre as partes. O reconhecimento de firma é exigido no documento de transferência em alguns estados; confira o procedimento no Detran.",
    },
    {
      question: "Os dados que eu digito ficam salvos?",
      answer:
        "Não. Tudo é processado no navegador e descartado quando você fecha a página. Se quiser guardar, salve o PDF gerado.",
    },
  ],
};
