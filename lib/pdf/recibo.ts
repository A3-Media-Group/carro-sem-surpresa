import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { formatBRL } from "../format";

export interface ReciboData {
  compradorNome: string;
  compradorDocumento: string;
  compradorEndereco: string;
  vendedorNome: string;
  vendedorDocumento: string;
  vendedorEndereco: string;
  veiculoMarcaModelo: string;
  veiculoAnoFabricacaoModelo: string;
  veiculoCor: string;
  veiculoPlaca: string;
  veiculoRenavam: string;
  veiculoChassi: string;
  veiculoKm: string;
  valor: number;
  formaPagamento: string;
  /** Data no formato yyyy-mm-dd, como vem de <input type="date">. */
  dataTransacao: string;
  cidadeUf: string;
}

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function formatDataExtenso(iso: string): string {
  if (!iso) return "data não informada";
  const [ano, mes, dia] = iso.split("-").map(Number);
  if (!ano || !mes || !dia) return iso;
  return `${dia} de ${MESES[mes - 1]} de ${ano}`;
}

/** jspdf-autotable anexa `lastAutoTable` na instância do doc em tempo de execução. */
interface DocComAutoTable extends jsPDF {
  lastAutoTable: { finalY: number };
}

/**
 * Gera o PDF do recibo de compra e venda de veículo e dispara o
 * download no navegador (via jsPDF `doc.save`). Roda inteiramente no
 * cliente — nenhum dado do formulário é enviado a um servidor.
 */
export function gerarReciboPdf(data: ReciboData) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const marginX = 48;
  const contentWidth = pageWidth - marginX * 2;
  let cursorY = 56;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("RECIBO DE COMPRA E VENDA DE VEÍCULO", pageWidth / 2, cursorY, {
    align: "center",
  });
  cursorY += 36;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  const valorFormatado = formatBRL(data.valor);
  const paragrafo =
    `Eu, ${data.vendedorNome}, portador(a) do CPF/CNPJ nº ${data.vendedorDocumento}` +
    `${data.vendedorEndereco ? `, residente/sediado(a) em ${data.vendedorEndereco}` : ""}, ` +
    `doravante denominado(a) VENDEDOR(A), declaro para os devidos fins que vendi a ` +
    `${data.compradorNome}, portador(a) do CPF/CNPJ nº ${data.compradorDocumento}` +
    `${data.compradorEndereco ? `, residente/sediado(a) em ${data.compradorEndereco}` : ""}, ` +
    `doravante denominado(a) COMPRADOR(A), o veículo abaixo descrito, pela quantia de ` +
    `${valorFormatado}${data.formaPagamento ? `, paga via ${data.formaPagamento}` : ""}, ` +
    `tendo recebido, neste ato, a importância total referente à negociação, dando ao ` +
    `COMPRADOR(A) plena, geral e irrevogável quitação.`;

  const linhas = doc.splitTextToSize(paragrafo, contentWidth);
  doc.text(linhas, marginX, cursorY);
  cursorY += linhas.length * 15 + 16;

  autoTable(doc, {
    startY: cursorY,
    head: [["Dados do veículo", ""]],
    body: [
      ["Marca/Modelo", data.veiculoMarcaModelo || "—"],
      ["Ano de fabricação/modelo", data.veiculoAnoFabricacaoModelo || "—"],
      ["Cor", data.veiculoCor || "—"],
      ["Placa", data.veiculoPlaca || "—"],
      ["Renavam", data.veiculoRenavam || "—"],
      ["Chassi", data.veiculoChassi || "—"],
      ["Km na data da venda", data.veiculoKm ? `${data.veiculoKm} km` : "—"],
      ["Valor da venda", valorFormatado],
    ],
    theme: "grid",
    styles: { fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255] },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 160 } },
    margin: { left: marginX, right: marginX },
  });

  cursorY = (doc as DocComAutoTable).lastAutoTable.finalY + 36;

  doc.setFontSize(11);
  const localData = `${data.cidadeUf || "_______________"}, ${formatDataExtenso(data.dataTransacao)}.`;
  doc.text(localData, marginX, cursorY);
  cursorY += 64;

  const assinaturaLargura = (contentWidth - 40) / 2;
  doc.line(marginX, cursorY, marginX + assinaturaLargura, cursorY);
  doc.line(
    marginX + assinaturaLargura + 40,
    cursorY,
    marginX + assinaturaLargura * 2 + 40,
    cursorY
  );
  cursorY += 16;
  doc.setFontSize(10);
  doc.text(`${data.vendedorNome || "Vendedor(a)"} — VENDEDOR(A)`, marginX, cursorY);
  doc.text(
    `${data.compradorNome || "Comprador(a)"} — COMPRADOR(A)`,
    marginX + assinaturaLargura + 40,
    cursorY
  );

  cursorY += 40;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  const aviso = doc.splitTextToSize(
    "Este documento é um recibo de compra e venda entre as partes e não substitui a " +
      "transferência oficial de propriedade do veículo. É obrigatório comunicar a venda " +
      "e efetivar a transferência junto ao Detran do seu estado, preenchendo o " +
      "Certificado de Registro de Veículo (CRV/ATPV-e).",
    contentWidth
  );
  doc.text(aviso, marginX, cursorY);

  const nomeArquivo = `recibo-veiculo-${data.veiculoPlaca || "sem-placa"}.pdf`
    .toLowerCase()
    .replace(/\s+/g, "-");
  doc.save(nomeArquivo);
}
