import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "A calculadora usa o método do tanque cheio: encha o tanque, zere o hodômetro parcial, rode normalmente e, no abastecimento seguinte, encha o tanque de novo. Os litros que couberam na bomba são os litros consumidos naquele trecho.",
    "Informe os quilômetros rodados entre os dois abastecimentos, os litros repostos e o preço pago por litro. O resultado mostra o consumo em km/L e quanto cada quilômetro custou só de combustível.",
    "Repita a medição em dois ou três tanques e anote se o uso foi mais urbano ou de estrada. Uma única medição pode oscilar por causa do trânsito, do ar-condicionado ou da bomba que desarmou antes.",
  ],
  formula: [
    "consumo (km/L) = km rodados ÷ litros abastecidos",
    "custo por km (R$) = (litros × preço do litro) ÷ km rodados",
  ],
  example: [
    "Com os valores iniciais do formulário — 400 km rodados e 32 litros repostos — o consumo é 400 ÷ 32 = 12,5 km/L.",
    "Com a gasolina a R$ 6,15, o tanque custou 32 × 6,15 = R$ 196,80. Dividindo por 400 km, cada quilômetro saiu por cerca de R$ 0,49 em combustível.",
  ],
  faq: [
    {
      question: "Posso usar o computador de bordo em vez do tanque cheio?",
      answer:
        "Pode como referência, mas o computador de bordo é uma estimativa do próprio carro e costuma ter alguma diferença em relação ao consumo medido na bomba. O tanque cheio mede o que você realmente pagou.",
    },
    {
      question: "Por que meu consumo ficou abaixo do informado pelo fabricante?",
      answer:
        "Os números de etiqueta seguem um ciclo de teste padronizado. Trânsito, carga, calibragem dos pneus, ar-condicionado e estilo de condução mudam o resultado no dia a dia. Se a queda for grande e repentina sem mudança de rotina, vale levar o carro a uma oficina.",
    },
    {
      question: "Onde uso o consumo medido?",
      answer:
        "Nas outras calculadoras do site: na comparação entre álcool e gasolina, no custo de viagem e no custo real de posse. Com o seu consumo real, as estimativas ficam bem mais próximas da sua conta.",
    },
  ],
  formulaNote: (
    <>
      Com o consumo em mãos, compare combustíveis na calculadora de{" "}
      <Link href="/calculadora-alcool-ou-gasolina">álcool ou gasolina</Link>{" "}
      ou estime o gasto de um percurso na{" "}
      <Link href="/calculadora-custo-viagem">calculadora de viagem</Link>.
    </>
  ),
  sources: [
    {
      label: "Inmetro — PBE Veicular",
      url: "https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica/veiculos-automotivos-pbe-veicular",
    },
  ],
};
