import { getAmountToPay } from "./getAmountToPay";
import { getExpirationDate } from "./getExpirationDate";
import { normalizeBarcode } from "./normalizeBarcode";
import { barcodeToWritableLine } from "./barcodeToWritableLine";

export function parseBill(barcode) {

    const normalizedBarcode = normalizeBarcode(barcode);

    if (!normalizedBarcode) {
        return null;
    }

    return {
        barcode: normalizedBarcode,
        writableLine: barcodeToWritableLine(normalizedBarcode),
        expirationDate: getExpirationDate(normalizedBarcode),
        amount: getAmountToPay(normalizedBarcode)
    };

}