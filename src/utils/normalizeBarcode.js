export function normalizeBarcode(barcode) {

    if (!barcode) {
        return null;
    }

    const cleanBarcode = barcode.replace(/\D/g, "");

    // Código de barras já está no formato correto
    if (cleanBarcode.length === 44) {
        return cleanBarcode;
    }

    // Linha digitável de boleto bancário
    if (cleanBarcode.length === 47) {

        return (
            cleanBarcode.substring(0, 4) +
            cleanBarcode.substring(32, 33) +
            cleanBarcode.substring(33, 47)
        );

    }

    // Linha digitável de arrecadação/concessionária
    if (cleanBarcode.length === 48) {
        return cleanBarcode;
    }

    return null;
}