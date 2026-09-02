/**
 * Cliente para a API pública da FIPE (parallelum.com.br/fipe), mantida
 * por terceiros a partir dos dados oficiais da Fundação Instituto de
 * Pesquisas Econômicas. Gratuita, sem chave de API, mas é uma
 * dependência externa — se ela cair ou mudar de formato, esta
 * ferramenta para de funcionar até ser ajustada.
 *
 * Todas as chamadas acontecem no navegador do usuário (client-side),
 * então funcionam normalmente com o export estático do site.
 */

export type FipeVehicleType = "carros" | "motos" | "caminhoes";

const FIPE_BASE_URL = "https://parallelum.com.br/fipe/api/v1";

export interface FipeOption {
  codigo: string;
  nome: string;
}

export interface FipeValueResult {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel?: string;
}

async function fipeFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${FIPE_BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`A FIPE respondeu com erro (${res.status}).`);
  }
  return res.json() as Promise<T>;
}

export function fetchBrands(
  vehicleType: FipeVehicleType
): Promise<FipeOption[]> {
  return fipeFetch<FipeOption[]>(`/${vehicleType}/marcas`);
}

export async function fetchModels(
  vehicleType: FipeVehicleType,
  brandCode: string
): Promise<FipeOption[]> {
  const data = await fipeFetch<{ modelos: FipeOption[] }>(
    `/${vehicleType}/marcas/${brandCode}/modelos`
  );
  return data.modelos;
}

export function fetchYears(
  vehicleType: FipeVehicleType,
  brandCode: string,
  modelCode: string
): Promise<FipeOption[]> {
  return fipeFetch<FipeOption[]>(
    `/${vehicleType}/marcas/${brandCode}/modelos/${modelCode}/anos`
  );
}

export function fetchValue(
  vehicleType: FipeVehicleType,
  brandCode: string,
  modelCode: string,
  yearCode: string
): Promise<FipeValueResult> {
  return fipeFetch<FipeValueResult>(
    `/${vehicleType}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
  );
}
