import type { ToolContent } from "@/components/tools/ToolPage";

export const conteudo: ToolContent = {
  howItWorks: [
    "Transferir a propriedade de um carro usado tem custos próprios, separados do preço do veículo. A calculadora soma os itens mais comuns: taxa de transferência do Detran, vistoria, reconhecimento de firma, troca de placas e, se você contratar, despachante.",
    "Todos os campos vêm com estimativas nacionais e podem ser editados. A taxa do Detran muda bastante de um estado para outro, e nem toda transferência exige vistoria ou placas novas — a troca costuma acontecer quando o carro muda de município ou de estado ou ainda usa placa do modelo antigo.",
    "Use o total para negociar o preço e para reservar o dinheiro antes de fechar a compra. Confirme sempre os valores e o procedimento no Detran do estado onde o carro será registrado.",
  ],
  formula: [
    "total = taxa do Detran + vistoria + reconhecimento de firma + placas + despachante",
  ],
  example: [
    "Com os valores iniciais do formulário — taxa de R$ 286, vistoria de R$ 115 e reconhecimento de firma de R$ 20, sem placas nem despachante — a transferência custa R$ 421.",
    "Se o carro vier de outro estado e precisar de placas novas (estimativa de R$ 250), o total sobe para R$ 671. Débitos pendentes, como IPVA e multas, não entram nessa conta e precisam estar quitados.",
  ],
  faq: [
    {
      question: "Quem paga a transferência, comprador ou vendedor?",
      answer:
        "Normalmente o comprador, porque é ele quem registra o veículo no próprio nome. Isso pode ser negociado; o importante é deixar combinado por escrito antes do pagamento.",
    },
    {
      question: "Qual é o prazo para transferir?",
      answer:
        "O Código de Trânsito Brasileiro dá 30 dias ao comprador para registrar a transferência. Passado esse prazo, há multa. O vendedor também deve comunicar a venda ao Detran para não responder por multas e débitos posteriores.",
    },
    {
      question: "Preciso de despachante?",
      answer:
        "Não é obrigatório. Em muitos estados o processo pode ser feito diretamente no Detran ou nos canais digitais. O despachante cobra pelo serviço de organizar documentos e agendamentos; por isso o campo vem zerado.",
    },
  ],
  sources: [
    {
      label: "Código de Trânsito Brasileiro (Lei 9.503/1997)",
      url: "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm",
    },
  ],
};
