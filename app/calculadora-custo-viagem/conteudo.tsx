import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    <>
      Informe o consumo medido em estrada. Se ainda não o conhece, use a{" "}
      <Link href="/calculadora-consumo-medio">calculadora de consumo médio</Link>
      . A distância pode vir do seu aplicativo de rotas. Confira os pedágios
      nas concessionárias responsáveis e considere deslocamentos no destino.
    </>,
    "A distância informada é só a ida. Marcando ida e volta, a calculadora dobra a distância e, portanto, o combustível; pedágios, estacionamento e outras despesas devem ser informados como totais da viagem.",
    <>
      Para conhecer também os custos de propriedade, use a{" "}
      <Link href="/calculadora-custo-de-posse">
        calculadora de custo real de posse
      </Link>
      .
    </>,
  ],
  formula: [
    "litros = distância total ÷ consumo (km/L)",
    "combustível = litros × preço do litro",
    "total = combustível + pedágios + estacionamento + outras despesas",
    "por pessoa = total ÷ número de pessoas",
  ],
  example: [
    "Exemplo: 300 km, consumo de 12 km/L e gasolina a R$ 6/L exigem 25 litros, ou R$ 150. Com R$ 40 de pedágios, o total é R$ 190; dividido entre duas pessoas, R$ 95 para cada uma.",
    "Marcando ida e volta, a distância vira 600 km: 50 litros, R$ 300 de combustível e R$ 340 no total com os mesmos pedágios — R$ 170 por pessoa.",
  ],
  faq: [
    {
      question: "A calculadora busca preços ou pedágios automaticamente?",
      answer:
        "Não. Você informa os preços e despesas para simular seu percurso. A ANP oferece referências de preços médios, mas o valor no posto pode ser diferente.",
    },
    {
      question: "Ida e volta dobra todos os valores?",
      answer:
        "Somente a distância e, portanto, o combustível. Pedágios e demais despesas devem ser informados como totais da viagem.",
    },
  ],
  sources: [
    {
      label: "levantamento de preços da ANP",
      url: "https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/precos-revenda-e-de-distribuicao-combustiveis",
    },
  ],
};
