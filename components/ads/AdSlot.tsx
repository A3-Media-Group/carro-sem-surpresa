export type AdPosition = "header" | "in-between" | "sidebar" | "footer";

const SIZE_CLASSES: Record<AdPosition, string> = {
  header: "min-h-[50px] sm:min-h-[90px] w-full",
  "in-between": "min-h-[100px] w-full",
  sidebar: "min-h-[250px] w-full",
  footer: "min-h-[50px] sm:min-h-[90px] w-full",
};

interface AdSlotProps {
  position: AdPosition;
  className?: string;
}

/**
 * Placeholder visual de anúncio, com aviso "Publicidade" bem visível.
 * Nenhum código real do Google AdSense entra aqui ainda — isso só é
 * adicionado depois de configurar a conta, os slots e o consentimento
 * aplicável. Os placeholders são opcionais para revisão de layout;
 * não constituem integração com o AdSense.
 */
export function AdSlot({ position, className = "" }: AdSlotProps) {
  // Enable preview placeholders explicitly; never show empty ad boxes to readers.
  if (process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS !== "true") return null;
  return (
    <div
      role="complementary"
      aria-label="Espaço publicitário"
      className={`flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-neutral-300 bg-neutral-50 text-neutral-500 ${SIZE_CLASSES[position]} ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest">
        Publicidade
      </span>
    </div>
  );
}
