import Image from "next/image";

export function Brand() {
  return (
    <span className="brand-lockup">
      <Image src="/brand-mark.svg" alt="" width={48} height={48} priority />
      <span className="brand-name">carro<span>sem surpresa<span className="brand-period">.</span></span></span>
    </span>
  );
}
