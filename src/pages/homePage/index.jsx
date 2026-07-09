import { useState } from "react";

import BarcodeScanner from "../../components/barcodeReaderComponent";
import BillData from "../../components/billDataComponent";

export default function Home() {

    const [barcode, setBarcode] = useState("");
    const [showCamera, setShowCamera] = useState(false);


    return (

        <main className="min-vh-100 bg-dark text-light">

            <div className="container py-4">

                <div className="row justify-content-center">

                    <div className="col-12 col-sm-11 col-md-8 col-lg-6">


                        <div className="text-center mb-4">

                            <h1 className="display-6 fw-bold">
                                <i className="bi bi-upc-scan me-2"></i>
                                Leitor de boleto
                            </h1>

                            <p className="text-secondary mb-0 text-light">
                                Escaneie ou informe o código de barras
                            </p>

                        </div>



                        <div className="row g-4">

                            <div className="col-12">

                                <BarcodeScanner
                                    barcode={barcode}
                                    setBarcode={setBarcode}
                                    showCamera={showCamera}
                                    setShowCamera={setShowCamera}
                                />

                            </div>



                            <div className="col-12">

                                <BillData
                                    barcode={barcode}
                                />

                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </main>

    );
}