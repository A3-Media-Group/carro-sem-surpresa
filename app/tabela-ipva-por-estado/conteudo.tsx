import Link from "next/link";
import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "A tabela reúne a alíquota de IPVA para carro de passeio nas 27 unidades da federação (26 estados e o Distrito Federal), com busca por nome ou sigla. Itens marcados como estimativa ainda não foram confirmados em fonte oficial e precisam ser conferidos na Sefaz do estado.",
    "O IPVA é um imposto estadual: cada estado define a alíquota, o calendário e os descontos. Por isso o mesmo carro paga valores diferentes dependendo de onde está registrado.",
    <>
      A coluna de idade mostra a imunidade nacional para veículos com 20 anos
      ou mais de fabricação. Estados podem ter benefícios mais favoráveis. Para
      ver o efeito do IPVA no orçamento mensal, use a calculadora de{" "}
      <Link href="/calculadora-custo-de-posse">custo real de posse</Link>.
    </>,
  ],
  formula: ["IPVA anual = valor venal do veículo × alíquota do estado"],
  formulaNote:
    "O valor venal é definido pelo estado a cada ano, normalmente a partir de tabelas de preço médio de mercado. O valor exato do seu carro está no aviso de cobrança ou no site da Sefaz.",
  example: [
    "Um carro com valor venal de R$ 60.000 registrado em São Paulo ou Minas Gerais, onde a alíquota de referência para carro de passeio é 4%, paga R$ 2.400 de IPVA no ano, ou R$ 200 por mês se você diluir a despesa.",
    "Muitos estados oferecem desconto para pagamento em cota única ou parcelamento em algumas vezes; as regras mudam a cada exercício.",
  ],
  faq: [
    {
      question: "Carro com 20 anos não paga IPVA em nenhum estado?",
      answer:
        "Pela imunidade nacional que vale a partir de 2026, carros de passeio, picapes e veículos mistos com 20 anos ou mais de fabricação são imunes ao IPVA. A imunidade nacional não elimina isenções estaduais mais favoráveis; confirme os requisitos locais.",
    },
    {
      question: "O que acontece se eu atrasar o IPVA?",
      answer:
        "O estado cobra multa e juros, que variam conforme a legislação local, e o débito pode impedir o licenciamento do veículo. Veja o guia sobre IPVA atrasado para entender como regularizar.",
    },
    {
      question: "Por que alguns estados aparecem como estimativa?",
      answer:
        "Porque a alíquota ainda não foi confirmada em fonte oficial nesta tabela. As leis de IPVA mudam com frequência; confirme sempre no site da Sefaz ou do Detran antes de decidir.",
    },
  ],
};
