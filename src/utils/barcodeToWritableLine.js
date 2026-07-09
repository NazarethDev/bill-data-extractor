export function barcodeToWritableLine(barcode) {
    if (!barcode || barcode.length !== 44) return null;

    const cleanBarcode = barcode.replace(/\D/g, "");

    const banco = cleanBarcode.substring(0, 3);
    const moeda = cleanBarcode.substring(3, 4);
    const dvGeral = cleanBarcode.substring(4, 5);
    const fatorVenc = cleanBarcode.substring(5, 9);
    const valor = cleanBarcode.substring(9, 19);
    const campoLivre1 = cleanBarcode.substring(19, 24);
    const campoLivre2 = cleanBarcode.substring(24, 34);
    const campoLivre3 = cleanBarcode.substring(34, 44);

    const bloco1SemDV = banco + moeda + campoLivre1;
    const bloco2SemDV = campoLivre2;
    const bloco3SemDV = campoLivre3;

    const dv1 = calculaMod10(bloco1SemDV);
    const dv2 = calculaMod10(bloco2SemDV);
    const dv3 = calculaMod10(bloco3SemDV);

    return (
        `${bloco1SemDV.substring(0, 5)}.${bloco1SemDV.substring(5)}${dv1} ` +
        `${bloco2SemDV.substring(0, 5)}.${bloco2SemDV.substring(5)}${dv2} ` +
        `${bloco3SemDV.substring(0, 5)}.${bloco3SemDV.substring(5)}${dv3} ` +
        `${dvGeral} ` +
        `${fatorVenc}${valor}`
    );
}

function calculaMod10(bloco) {
    let somatorio = 0;
    let peso = 2;

    for (let i = bloco.length - 1; i >= 0; i--) {
        let multi = Number(bloco[i]) * peso;
        if (multi > 9) {
            multi = Math.floor(multi / 10) + (multi % 10);
        }
        somatorio += multi;
        peso = peso === 2 ? 1 : 2;
    }

    const resto = somatorio % 10;
    return resto === 0 ? 0 : 10 - resto;
}