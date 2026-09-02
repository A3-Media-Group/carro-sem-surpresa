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

      <Link
        href="/calculadora-custo-de-posse"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-orange-500 px-6 text-sm font-semibold text-white hover:bg-orange-600"
      >
        Calcular o custo real do meu carro
      </Link>

      <p className="mt-8 text-sm text-neutral-400">
        As demais ferramentas (manutenção, recibo e IPVA por estado) chegam
        nas próximas etapas.
      </p>
    </main>
  );
}
