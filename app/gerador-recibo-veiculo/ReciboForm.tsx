"use client";

import { useMemo, useState } from "react";
import { Receipt } from "lucide-react";
import { TextField } from "@/components/ui/TextField";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { Card } from "@/components/ui/Card";
import { PageHeading } from "@/components/ui/PageHeading";
import { gerarReciboPdf, type ReciboData } from "@/lib/pdf/recibo";
import { validateRecibo } from "@/lib/validators/recibo";

const initialData: ReciboData = {
  vendedorNome: "",
  vendedorDocumento: "",
  vendedorEndereco: "",
  compradorNome: "",
  compradorDocumento: "",
  compradorEndereco: "",
  veiculoMarcaModelo: "",
  veiculoAnoFabricacaoModelo: "",
  veiculoCor: "",
  veiculoPlaca: "",
  veiculoRenavam: "",
  veiculoChassi: "",
  veiculoKm: "",
  valor: 0,
  formaPagamento: "",
  dataTransacao: "",
  cidadeUf: "",
};

type FieldKey = keyof ReciboData;

export function ReciboForm() {
  const [data, setData] = useState<ReciboData>(initialData);
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>(
    {}
  );

  const { isValid, errors } = useMemo(() => validateRecibo(data), [data]);

  function setField<K extends FieldKey>(key: K, value: ReciboData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function markTouched(key: FieldKey) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  function errorFor(key: FieldKey) {
    return touched[key] ? errors[key] : undefined;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    gerarReciboPdf(data);
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <PageHeading icon={Receipt} title="Gerador de Recibo de Compra e Venda">
        Preencha os dados abaixo e gere um recibo em PDF, pronto para
        imprimir e assinar. Tudo roda no seu navegador — nada é enviado
        para nenhum servidor.
      </PageHeading>

      <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
        <Card className="space-y-5">
          <h2 className="text-lg font-semibold text-neutral-900">
            Dados do vendedor
          </h2>
          <TextField
            label="Nome completo"
            required
            value={data.vendedorNome}
            onChange={(v) => setField("vendedorNome", v)}
            onBlur={() => markTouched("vendedorNome")}
            error={errorFor("vendedorNome")}
          />
          <TextField
            label="CPF/CNPJ"
            required
            value={data.vendedorDocumento}
            onChange={(v) => setField("vendedorDocumento", v)}
            onBlur={() => markTouched("vendedorDocumento")}
            error={errorFor("vendedorDocumento")}
          />
          <TextField
            label="Endereço (opcional)"
            value={data.vendedorEndereco}
            onChange={(v) => setField("vendedorEndereco", v)}
          />
        </Card>

        <Card className="space-y-5">
          <h2 className="text-lg font-semibold text-neutral-900">
            Dados do comprador
          </h2>
          <TextField
            label="Nome completo"
            required
            value={data.compradorNome}
            onChange={(v) => setField("compradorNome", v)}
            onBlur={() => markTouched("compradorNome")}
            error={errorFor("compradorNome")}
          />
          <TextField
            label="CPF/CNPJ"
            required
            value={data.compradorDocumento}
            onChange={(v) => setField("compradorDocumento", v)}
            onBlur={() => markTouched("compradorDocumento")}
            error={errorFor("compradorDocumento")}
          />
          <TextField
            label="Endereço (opcional)"
            value={data.compradorEndereco}
            onChange={(v) => setField("compradorEndereco", v)}
          />
        </Card>

        <Card className="space-y-5">
          <h2 className="text-lg font-semibold text-neutral-900">
            Dados do veículo
          </h2>
          <TextField
            label="Marca/Modelo"
            required
            placeholder="Ex: Chevrolet Onix 1.0"
            value={data.veiculoMarcaModelo}
            onChange={(v) => setField("veiculoMarcaModelo", v)}
            onBlur={() => markTouched("veiculoMarcaModelo")}
            error={errorFor("veiculoMarcaModelo")}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              label="Ano fabricação/modelo (opcional)"
              placeholder="Ex: 2020/2021"
              value={data.veiculoAnoFabricacaoModelo}
              onChange={(v) => setField("veiculoAnoFabricacaoModelo", v)}
            />
            <TextField
              label="Cor (opcional)"
              value={data.veiculoCor}
              onChange={(v) => setField("veiculoCor", v)}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              label="Placa"
              required
              placeholder="Ex: ABC1D23"
              value={data.veiculoPlaca}
              onChange={(v) => setField("veiculoPlaca", v.toUpperCase())}
              onBlur={() => markTouched("veiculoPlaca")}
              error={errorFor("veiculoPlaca")}
            />
            <TextField
              label="Renavam"
              required
              value={data.veiculoRenavam}
              onChange={(v) => setField("veiculoRenavam", v)}
              onBlur={() => markTouched("veiculoRenavam")}
              error={errorFor("veiculoRenavam")}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              label="Chassi (opcional)"
              value={data.veiculoChassi}
              onChange={(v) => setField("veiculoChassi", v.toUpperCase())}
            />
            <TextField
              label="Km na data da venda (opcional)"
              value={data.veiculoKm}
              onChange={(v) => setField("veiculoKm", v.replace(/\D/g, ""))}
            />
          </div>
        </Card>

        <Card className="space-y-5">
          <h2 className="text-lg font-semibold text-neutral-900">
            Dados da venda
          </h2>
          <CurrencyInput
            label="Valor da venda"
            value={data.valor}
            onChange={(v) => setField("valor", v)}
          />
          {errorFor("valor") && (
            <p className="-mt-3 text-xs text-red-600">{errorFor("valor")}</p>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              label="Data da venda"
              type="date"
              required
              value={data.dataTransacao}
              onChange={(v) => setField("dataTransacao", v)}
              onBlur={() => markTouched("dataTransacao")}
              error={errorFor("dataTransacao")}
            />
            <TextField
              label="Cidade/UF (opcional)"
              placeholder="Ex: São Paulo/SP"
              value={data.cidadeUf}
              onChange={(v) => setField("cidadeUf", v)}
            />
          </div>
          <TextField
            label="Forma de pagamento (opcional)"
            placeholder="Ex: PIX, dinheiro, transferência"
            value={data.formaPagamento}
            onChange={(v) => setField("formaPagamento", v)}
          />
        </Card>

        <div>
          <button
            type="submit"
            disabled={!isValid}
            className="h-11 w-full rounded-md bg-brand-orange px-6 text-sm font-semibold text-graphite hover:bg-brand-orange-dark hover:text-white disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500 sm:w-auto"
          >
            Gerar PDF
          </button>
          <p className="mt-3 text-xs text-neutral-500">
            Este documento não substitui a transferência oficial de
            propriedade no Detran — é só um recibo entre as partes. Preencha
            o Certificado de Registro de Veículo (CRV/ATPV-e) para efetivar
            a transferência.
          </p>
        </div>
      </form>
    </main>
  );
}
