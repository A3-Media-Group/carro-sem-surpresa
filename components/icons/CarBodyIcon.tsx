/**
 * Ilustração simples (SVG próprio, sem fotos de terceiros) do tipo de
 * carroceria selecionado na ferramenta de diagnóstico — ver
 * lib/carBodyTypes.ts. É só personalização visual: não representa
 * nenhum modelo real, então não tem risco de direito de imagem.
 */

const BODY_PATHS: Record<string, { body: string; wheels: [number, number] }> = {
  hatch: {
    body: "M6,34 L6,25 Q6,19 12,17 L26,17 Q32,9 44,9 L58,9 Q63,9 65,14 L70,17 Q80,19 84,26 L84,34 Z",
    wheels: [22, 74],
  },
  sedan: {
    body: "M6,34 L6,25 Q6,19 12,17 L24,17 Q30,9 42,9 L54,9 Q59,9 61,14 L63,17 L66,20 L84,20 L88,24 L94,24 Q98,24 98,29 L98,34 Z",
    wheels: [22, 82],
  },
  suv: {
    body: "M6,34 L6,21 Q6,13 13,12 L26,12 Q31,6 43,6 L64,6 Q70,6 72,11 L84,12 Q92,13 92,21 L92,34 Z",
    wheels: [22, 76],
  },
  picape: {
    body: "M6,34 L6,24 Q6,15 13,13 L26,13 Q32,7 42,7 L50,7 Q54,7 54,12 L54,19 L76,19 L76,27 L94,27 L94,34 Z",
    wheels: [21, 81],
  },
  van: {
    body: "M6,34 L6,15 Q6,7 14,7 L84,7 Q92,7 92,15 L92,34 Z M19,7 L14,19",
    wheels: [22, 78],
  },
};

export function CarBodyIcon({
  tipo,
  size = 48,
  className = "",
}: {
  tipo: string;
  size?: number;
  className?: string;
}) {
  const config = BODY_PATHS[tipo] ?? BODY_PATHS.hatch;
  const [w1, w2] = config.wheels;

  return (
    <svg
      viewBox="0 0 100 44"
      width={size}
      height={(size * 44) / 100}
      className={className}
      aria-hidden
    >
      <path
        d={config.body}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={w1} cy={34} r={6} fill="currentColor" />
      <circle cx={w2} cy={34} r={6} fill="currentColor" />
    </svg>
  );
}
