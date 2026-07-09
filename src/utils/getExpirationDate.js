/*export function getExpirationDate(barcode) {

    if (!barcode) return null;

    const cleanBarcode = barcode.replace(/\D/g, "");

    const factor = Number(cleanBarcode.substring(33, 37));

    const baseDate = new Date(2025, 1, 22);

    const days = factor - 1000;

    baseDate.setDate(baseDate.getDate() + days);

    return baseDate.toLocaleDateString("pt-BR");
} */

export function getExpirationDate(barcode) {
    if (!barcode || barcode.length !== 44) return null;

    const cleanBarcode = barcode.replace(/\D/g, "");

    const factor = Number(cleanBarcode.substring(5, 9));

    const baseDate = new Date(2022, 4, 29);

    baseDate.setDate(baseDate.getDate() + factor);

    return baseDate.toLocaleDateString("pt-BR");
}