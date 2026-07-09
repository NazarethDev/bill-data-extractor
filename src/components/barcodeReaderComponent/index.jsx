import { useRef } from "react";
import { useBarcodeScanner } from "../../hooks/useBarcodeScanner";

export default function BarcodeScanner({
    barcode,
    setBarcode,
    showCamera,
    setShowCamera
}) {

    const videoRef = useRef(null);


    useBarcodeScanner({
        videoRef,
        enabled: showCamera,

        onDetected: (code) => {
            setBarcode(code);
            setShowCamera(false);
        }
    });

    return (

        <div className="card bg-black border-secondary shadow">

            <div className="card-body">

                <div className="row g-3">


                    <div className="col-12">

                        <label className="form-label text-light">
                            Código de barras
                        </label>


                        <input
                            className="form-control form-control-lg bg-dark text-light border-secondary"
                            value={barcode}
                            onChange={(e) => setBarcode(e.target.value)}
                            placeholder="Digite ou escaneie"
                        />

                    </div>



                    <div className="col-12">

                        <button
                            className={`btn w-100 ${showCamera
                                    ? "btn-danger"
                                    : "btn-primary"
                                }`}
                            onClick={() => setShowCamera(!showCamera)}
                        >

                            <i
                                className={`bi ${showCamera
                                        ? "bi-camera-video-off"
                                        : "bi-camera-video"
                                    } me-2`}
                            />

                            {
                                showCamera
                                    ? "Fechar câmera"
                                    : "Ler código"
                            }

                        </button>

                    </div>



                    {
                        showCamera && (

                            <div className="col-12">

                                <div className="ratio ratio-16x9">

                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        className="rounded object-fit-cover"
                                    />

                                </div>

                            </div>

                        )
                    }


                </div>

            </div>

        </div>

    );
}