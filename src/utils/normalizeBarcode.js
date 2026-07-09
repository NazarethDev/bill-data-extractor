export function normalizeBarcode(barcode) {
    if (!barcode) return null;

    const cleanBarcode = barcode.replace(/\D/g, "");

    // Código de barras já está no formato correto
    if (cleanBarcode.length === 44) {
        return cleanBarcode;
    }

    if (cleanBarcode.length === 47) {
        return (
            cleanBarcode.substring(0, 4) +
            cleanBarcode.substring(32, 33) +
            cleanBarcode.substring(33, 47) +
            cleanBarcode.substring(4, 9) +
            cleanBarcode.substring(10, 20) +
            cleanBarcode.substring(21, 31)
        );
    }

    if (cleanBarcode.length === 48) {
        return cleanBarcode;
    }

    return null;
}