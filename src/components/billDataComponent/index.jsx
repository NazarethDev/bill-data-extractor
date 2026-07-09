import { useState } from "react";

import { copyToClipboard } from "../../utils/copyToClipboard";
import { parseBill } from "../../utils/parseBill";

import Toast from "../messageToast/index";


export default function BillData({ barcode }) {


    const bill = parseBill(barcode);

    const [toast, setToast] = useState("");



    if (!bill) {
        return null;
    }



    async function handleCopy(value) {

        const copied = await copyToClipboard(value);


        if (copied) {

            setToast("Copiado com sucesso!");

            setTimeout(() => {
                setToast("");
            }, 2000);

        }

    }



    function CopyField({ label, value }) {

        return (

            <div className="mb-3">

                <label className="small text-secondary">
                    {label}
                </label>


                <div className="input-group">


                    <input
                        className="form-control bg-dark text-light border-secondary"
                        value={value}
                        readOnly
                    />


                    <button
                        className="btn btn-outline-light"
                        onClick={() => handleCopy(value)}
                    >

                        <i className="bi bi-copy"></i>

                    </button>


                </div>

            </div>

        );

    }



    return (

        <div className="card bg-black border-secondary shadow">

            <div className="card-body">


                <h3 className="h4 mb-4">

                    <i className="bi bi-receipt me-2"></i>

                    Dados do boleto

                </h3>



                <div className="row g-3">


                    <div className="col-12">

                        <CopyField
                            label="Código de barras"
                            value={bill.barcode}
                        />

                    </div>



                    <div className="col-12 col-md-6">

                        <CopyField
                            label="Vencimento"
                            value={bill.expirationDate}
                        />

                    </div>



                    <div className="col-12 col-md-6">

                        <CopyField
                            label="Valor"
                            value={bill.amount}
                        />

                    </div>


                </div>


            </div>

        </div>

    );

}