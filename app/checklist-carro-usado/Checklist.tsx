"use client";
import { useState } from "react";
const groups = [
  {
    title: "Documentação e identidade",
    items: [
      "Conferi se vendedor e proprietário são a mesma pessoa ou se há representação válida.",
      "Comparei placa e chassi com a documentação, sem compartilhar dados pessoais em sites desconhecidos.",
      "Consultei débitos e restrições nos canais oficiais, com a participação do proprietário.",
      "Verifiquei campanhas de recall e comprovantes de atendimento.",
    ],
  },
  {
    title: "Histórico e inspeção",
    items: [
      "Pedi histórico de manutenção, notas e manual do veículo.",
      "Agendei avaliação com mecânico independente de minha confiança.",
      "Avaliei a necessidade de vistoria cautelar e conferi o escopo do laudo.",
      "Conferi pneus, iluminação e funcionamento dos equipamentos com apoio profissional.",
    ],
  },
  {
    title: "Teste e orçamento",
    items: [
      "Fiz test-drive autorizado em condições seguras e observei ruídos e alertas do painel.",
      "Comparei preço, estado de conservação e referência FIPE do modelo e ano corretos.",
      "Cotei seguro antes de fechar a compra.",
      "Incluí transferência, manutenção inicial e reserva para imprevistos no orçamento.",
    ],
  },
  {
    title: "Antes de pagar",
    items: [
      "Registrei preço, condições e responsabilidades por escrito.",
      "Conferi o beneficiário do pagamento e esclareci divergências antes de transferir valores.",
      "Confirmei com o Detran o procedimento de transferência aplicável.",
      "Guardei comprovantes e combinei a entrega das chaves e documentos.",
    ],
  },
];
export function Checklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <div className="my-7 rounded-xl bg-graphite p-6 text-white">
        <p aria-live="polite" className="font-semibold">
          {checked.length} de {total} verificações marcadas
        </p>
        <progress
          className="mt-3 h-2 w-full accent-amber-500"
          value={checked.length}
          max={total}
          aria-label="Progresso do checklist"
        />
        <p className="mt-3 text-xs text-white/70">
          Marcar todos os itens não certifica o veículo. Esta lista organiza a
          sua conferência e não substitui avaliação profissional.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <fieldset
            key={g.title}
            className="rounded-xl border border-neutral-200 bg-white p-6"
          >
            <legend className="px-2 font-bold">{g.title}</legend>
            {g.items.map((item) => (
              <label
                className="flex cursor-pointer items-start gap-3 py-3 text-sm leading-relaxed"
                key={item}
              >
                <input
                  type="checkbox"
                  checked={checked.includes(item)}
                  onChange={(e) =>
                    setChecked((old) =>
                      e.target.checked
                        ? [...old, item]
                        : old.filter((x) => x !== item),
                    )
                  }
                  className="mt-1 h-5 w-5 shrink-0 accent-amber-700"
                />
                {item}
              </label>
            ))}
          </fieldset>
        ))}
      </div>
      <div className="no-print mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          className="motor-button"
          onClick={() => window.print()}
        >
          Imprimir ou salvar em PDF
        </button>
        <button
          type="button"
          className="quiet-link min-h-11"
          onClick={() => setChecked([])}
        >
          Limpar marcações
        </button>
        <span className="text-xs text-neutral-600">
          As marcações ficam nesta página e são apagadas ao recarregar.
        </span>
      </div>
    </>
  );
}
