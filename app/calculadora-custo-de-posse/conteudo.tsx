import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "O custo de ter um carro vai muito além da parcela e do combustível. A calculadora soma, em base mensal, seis despesas: depreciação, IPVA, seguro, combustível, manutenção e estacionamento ou pedágios.",
    "Depreciação, IPVA e seguro são calculados como percentuais anuais do valor do veículo e divididos por 12. O IPVA usa a alíquota do estado escolhido, a partir da nossa tabela de referência. Combustível e manutenção dependem de quantos quilômetros você roda por mês.",
    "No fim, a ferramenta mostra o custo por quilômetro e compara com o que você gastaria rodando a mesma distância em aplicativos de transporte, a um preço médio por km.",
  ],
  formula: [
    "depreciação/mês = valor do veículo × 12% ÷ 12",
    "IPVA/mês = valor do veículo × alíquota do estado ÷ 12",
    "seguro/mês = valor do veículo × % anual do seguro ÷ 12",
    "combustível/mês = (km por mês ÷ consumo) × preço do combustível",
    "manutenção/mês = km por mês × R$ 0,12",
    "custo por km = total mensal ÷ km por mês",
  ],
  formulaNote: (
    <>
      Os 12% de depreciação e os R$ 0,12/km de manutenção são médias
      simplificadas. Para ver a manutenção item a item, use o simulador de{" "}
      <Link href="/manutencao-preventiva-vs-corretiva">
        manutenção preventiva vs. corretiva
      </Link>
      .
    </>
  ),
  example: [
    "Com os valores iniciais — carro de R$ 60.000 em SP (IPVA de 4%), 1.000 km por mês, gasolina a R$ 6,15 com 12 km/L, seguro de 4,5% ao ano e R$ 150 de estacionamento e pedágios:",
    "Depreciação R$ 600 + IPVA R$ 200 + seguro R$ 225 + combustível R$ 512,50 + manutenção R$ 120 + estacionamento R$ 150 = R$ 1.807,50 por mês, ou cerca de R$ 1,81 por quilômetro.",
    "Os mesmos 1.000 km em aplicativo, a R$ 2,30/km, custariam R$ 2.300. Nesse cenário, o carro próprio sai mais barato — mas a conta se inverte para quem roda pouco.",
  ],
  faq: [
    {
      question: "Por que a depreciação entra se eu não pago por ela todo mês?",
      answer:
        "Porque ela aparece quando você vende ou troca o carro: o valor de revenda é menor que o de compra. Diluir essa perda por mês mostra quanto do seu patrimônio o carro consome enquanto você usa.",
    },
    {
      question: "A parcela do financiamento entra na conta?",
      answer:
        "Não diretamente. A calculadora mede o custo de uso e de posse do veículo. Os juros de um financiamento são um custo adicional; simule-os no simulador de financiamento e some ao resultado.",
    },
    {
      question: "O valor do seguro é uma cotação?",
      answer:
        "Não. O percentual é uma estimativa sobre o valor do veículo. O preço real da apólice depende de perfil, região, modelo e coberturas; troque o percentual pelo da sua cotação para um resultado mais fiel.",
    },
  ],
};
