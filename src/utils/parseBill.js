import { getAmountToPay } from "./getAmountToPay";
import { getExpirationDate } from "./getExpirationDate";
import { normalizeBarcode } from "./normalizeBarcode";

export function parseBill(barcode) {

    const normalizedBarcode = normalizeBarcode(barcode);

    if (!normalizedBarcode) {
        return null;
    }

    return {
        barcode: normalizedBarcode,
        expirationDate: getExpirationDate(normalizedBarcode),
        amount: getAmountToPay(normalizedBarcode)
    };

}