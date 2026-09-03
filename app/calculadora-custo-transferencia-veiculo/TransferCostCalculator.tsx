"use client";

import { useMemo, useState } from "react";
import { FileStack } from "lucide-react";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { PageHeading } from "@/components/ui/PageHeading";
import { Card } from "@/components/ui/Card";
import { computeTransferCost } from "@/lib/calculators/transferCost";
import { defaultTransferCosts } from "@/lib/config";
import { formatBRL } from "@/lib/format";

export function TransferCostCalculator() {
  const [taxaTransferencia, setTaxaTransferencia] = useState<number>(
    defaultTransferCosts.taxaTransferencia
  );
  const [vistoria, setVistoria] = useState<number>(
    defaultTransferCosts.vistoria
  );
  const [reconhecimentoFirma, setReconhecimentoFirma] = useState<number>(
    defaultTransferCosts.reconhecimentoFirma
  );
  const [novasPlacas, setNovasPlacas] = useState(0);
  const [despachante, setDespachante] = useState(0);

  const result = useMemo(
    () =>
      computeTransferCost({
        taxaTransferencia,
        vistoria,
        reconhecimentoFirma,
        novasPlacas,
        despachante,
      }),
    [taxaTransferencia, vistoria, reconhecimentoFirma, novasPlacas, despachante]
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <PageHeading icon={FileStack} title="Custo de Transferência de Veículo">
        Comprou ou vendeu um carro? A transferência tem um custo próprio,
        separado do valor do veículo — e ninguém avisa isso antes.
      </PageHeading>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <CurrencyInput
            label="Taxa de transferência (Detran)"
            value={taxaTransferencia}
            onChange={setTaxaTransferencia}
            hint="Varia por estado: SP ~R$ 319, MG ~R$ 155, média nacional ~R$ 286."
          />
          <CurrencyInput
            label="Vistoria"
            value={vistoria}
            onChange={setVistoria}
            hint="Nem todo estado exige. Quando exige, costuma ficar entre R$ 80 e R$ 150."
          />
          <CurrencyInput
            label="Reconhecimento de firma"
            value={reconhecimentoFirma}
            onChange={setReconhecimentoFirma}
          />
          <CurrencyInput
            label="Novas placas"
            value={novasPlacas}
            onChange={setNovasPlacas}
            hint="Só se precisar trocar (ex: mudança de estado ou município). Deixe R$ 0,00 se não precisar."
          />
          <CurrencyInput
            label="Despachante (opcional)"
            value={despachante}
            onChange={setDespachante}
            hint="Deixe R$ 0,00 se for fazer você mesmo."
          />
        </form>

        <div className="space-y-6">
          <Card className="text-center">
            <p className="text-sm text-neutral-500">Custo total estimado</p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
              {formatBRL(result.total)}
            </p>
          </Card>

          <Card>
            <ul className="space-y-2 text-sm">
              {result.breakdown.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between text-neutral-700"
                >
                  <span>{item.label}</span>
                  <span className="font-medium">{formatBRL(item.value)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <p className="text-sm text-neutral-600">
            O DPVAT atualmente é <strong>R$ 0,00</strong> pra todas as
            categorias de veículo — não entra nessa conta.
          </p>

          <p className="text-xs text-neutral-500">
            Valores estimados para fins informativos. As taxas mudam por
            estado e ao longo do ano — confirme sempre no site oficial do
            Detran do seu estado antes de decidir.
          </p>
        </div>
      </div>
    </main>
  );
}
