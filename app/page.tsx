import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Carro Sem Surpresa
      </h1>
      <p className="mt-4 max-w-xl text-lg text-neutral-600">
        Ajudamos você a nunca mais ser pego de surpresa pelos custos
        escondidos de comprar, manter ou vender um carro no Brasil.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/calculadora-custo-de-posse"
          className="inline-flex h-11 items-center rounded-md bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Calcular o custo real do meu carro
        </Link>
        <Link
          href="/manutencao-preventiva-vs-corretiva"
          className="inline-flex h-11 items-center rounded-md border border-neutral-300 px-6 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
        >
          Simular manutenção preventiva
        </Link>
        <Link
          href="/gerador-recibo-veiculo"
          className="inline-flex h-11 items-center rounded-md border border-neutral-300 px-6 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
        >
          Gerar recibo de veículo
        </Link>
        <Link
          href="/tabela-ipva-por-estado"
          className="inline-flex h-11 items-center rounded-md border border-neutral-300 px-6 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
        >
          Ver IPVA por estado
        </Link>
      </div>

      <p className="mt-8 text-sm text-neutral-400">
        Guias completos sobre custo de carro chegam na próxima etapa.
      </p>
    </main>
  );
}
