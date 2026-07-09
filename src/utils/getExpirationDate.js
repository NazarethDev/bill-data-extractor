export function getExpirationDate(barcode) {
    if (!barcode || barcode.length !== 44) return null;

    const cleanBarcode = barcode.replace(/\D/g, "");
    const factor = Number(cleanBarcode.substring(5, 9));

    if (factor === 0) return "Sem data de vencimento";

    const baseDate = new Date(2022, 1, 22); 

    const daysToAdd = factor - 1000;
    baseDate.setDate(baseDate.getDate() + daysToAdd);

    return baseDate.toLocaleDateString("pt-BR");
}