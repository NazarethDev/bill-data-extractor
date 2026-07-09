export function getAmountToPay(barcode) {

    if (!barcode || barcode.length < 10) {
        return null;
    }

    const cleanBarcode = barcode.replace(/\D/g, "");

    const amountStr = cleanBarcode.substring(9, 19);
    const amountInNumber = Number(amount) / 100;

    return amountInNumber.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}