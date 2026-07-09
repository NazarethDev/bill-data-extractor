export function getAmountToPay(barcode) {

    if (!barcode || barcode.length < 10) {
        return null;
    }

    const cleanBarcode = barcode.replace(/\D/g, "");

    const amount = cleanBarcode.slice(-10);

    const amountInNumber = Number(amount) / 100;

    return amountInNumber.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}