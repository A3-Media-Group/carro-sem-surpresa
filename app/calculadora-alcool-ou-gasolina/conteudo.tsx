import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "Em vez da regra genérica dos 70%, a calculadora compara quanto custa rodar um quilômetro com cada combustível no seu carro. Para isso ela precisa do preço do litro de cada um e do consumo que o seu carro faz com cada um.",
    <>
      Se você não sabe o consumo real, meça com a{" "}
      <Link href="/calculadora-consumo-medio">calculadora de consumo médio</Link>{" "}
      — um tanque com gasolina e outro com etanol, no mesmo tipo de trajeto.
    </>,
    "Com a quilometragem mensal, a ferramenta mostra também quanto você economiza por mês escolhendo o combustível mais barato por km, e o preço máximo do etanol para ele continuar compensando.",
  ],
  formula: [
    "custo por km = preço do litro ÷ consumo (km/L)",
    "razão de equilíbrio = consumo com etanol ÷ consumo com gasolina",
    "preço de empate do etanol = razão de equilíbrio × preço da gasolina",
    "economia mensal = |custo/km gasolina − custo/km etanol| × km por mês",
  ],
  example: [
    "Com os valores iniciais do formulário: gasolina a R$ 6,15 e consumo de 12 km/L dão R$ 0,5125 por km; etanol a R$ 4,35 e consumo de 8 km/L dão R$ 0,5438 por km. Nesse cenário, a gasolina custa menos por quilômetro.",
    "A razão de equilíbrio desse carro é 8 ÷ 12 ≈ 0,667. O etanol só compensaria abaixo de 0,667 × 6,15 ≈ R$ 4,10 o litro. Rodando 1.000 km por mês, a diferença é de cerca de R$ 31 mensais a favor da gasolina.",
  ],
  faq: [
    {
      question: "A regra dos 70% está errada?",
      answer:
        "Ela é uma média de mercado, útil como primeira aproximação. Cada carro tem a sua própria razão entre o consumo com etanol e com gasolina; no exemplo acima ela é cerca de 67%, então a regra dos 70% indicaria o etanol quando ele não compensa.",
    },
    {
      question: "Os preços da calculadora são atualizados automaticamente?",
      answer:
        "Não. Os valores iniciais são referências editáveis. Informe o preço que você está vendo no posto; a ANP publica levantamentos semanais que ajudam a comparar regiões.",
    },
    {
      question: "Posso misturar etanol e gasolina no tanque?",
      answer:
        "Carros flex aceitam qualquer proporção, mas a mistura dificulta medir o consumo de cada combustível. Para a comparação ficar confiável, meça cada um em tanques separados. Use sempre o combustível indicado pelo fabricante.",
    },
  ],
  sources: [
    {
      label: "ANP — levantamento de preços de combustíveis",
      url: "https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/precos-revenda-e-de-distribuicao-combustiveis",
    },
  ],
};
