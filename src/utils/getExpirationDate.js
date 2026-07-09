export function getExpirationDate(barcode) {
    if (!barcode || barcode.length !== 44) return null;

    const cleanBarcode = barcode.replace(/\D/g, "");
    const factor = Number(cleanBarcode.substring(5, 9));

    if (factor === 0) return "Sem data de vencimento";

    if (factor >= 1000 && factor < 2500) {
        const baseDate = new Date(2025, 1, 22);
        const daysToAdd = factor - 1000;
        baseDate.setDate(baseDate.getDate() + daysToAdd);
        return baseDate.toLocaleDateString("pt-BR");
    }

    const baseDate = new Date(1997, 9, 7); 
    baseDate.setDate(baseDate.getDate() + factor);
    
    return baseDate.toLocaleDateString("pt-BR");
}