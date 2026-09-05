export interface CarBodyType {
  id: string;
  nome: string;
}

/**
 * Tipos de carroceria pra personalizar a ferramenta de diagnóstico com
 * uma ilustração do "seu carro" (ver CarBodyIcon). Não muda nenhuma
 * causa/sintoma exibido — o diagnóstico é o mesmo pra qualquer tipo,
 * isso é só cosmético/pessoal.
 */
export const CAR_BODY_TYPES: CarBodyType[] = [
  { id: "hatch", nome: "Hatch" },
  { id: "sedan", nome: "Sedã" },
  { id: "suv", nome: "SUV" },
  { id: "picape", nome: "Picape" },
  { id: "van", nome: "Van/Utilitário" },
];
