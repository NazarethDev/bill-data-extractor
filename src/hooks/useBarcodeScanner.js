import { useEffect, useRef } from "react";
import {
    BrowserMultiFormatReader
} from "@zxing/browser";

import {
    DecodeHintType,
    BarcodeFormat
} from "@zxing/library";


const hints = new Map();

hints.set(
    DecodeHintType.POSSIBLE_FORMATS,
    [
        BarcodeFormat.ITF,
        BarcodeFormat.CODE_128,
        BarcodeFormat.EAN_13,
        BarcodeFormat.EAN_8
    ]
);

hints.set(
    DecodeHintType.TRY_HARDER,
    true
);


const codeReader = new BrowserMultiFormatReader(hints);


export function useBarcodeScanner({
    videoRef,
    enabled,
    onDetected
}) {

    const controlsRef = useRef(null);

    const onDetectedRef = useRef(onDetected);

    onDetectedRef.current = onDetected;


    useEffect(() => {

        let isMounted = true;


        async function startScanner() {

            if (!enabled || !videoRef.current) {
                return;
            }


            try {

                const controls = await codeReader.decodeFromConstraints(

                    {
                        video: {
                            facingMode: {
                                ideal: "environment"
                            },

                            width: {
                                ideal: 1920
                            },

                            height: {
                                ideal: 1080
                            }
                        }
                    },

                    videoRef.current,

                    (result) => {

                        if (!result || !isMounted) {
                            return;
                        }


                        const text = result.getText();


                        if (!text) {
                            return;
                        }


                        console.log(
                            "Código detectado:",
                            text
                        );


                        onDetectedRef.current(text);

                    }

                );


                controlsRef.current = controls;


            } catch (error) {

                console.error(
                    "Erro ao iniciar scanner:",
                    error
                );

            }

        }


        startScanner();


        return () => {

            isMounted = false;


            if (controlsRef.current) {

                controlsRef.current.stop();

                controlsRef.current = null;

            }


            if (videoRef.current) {

                videoRef.current.srcObject = null;

            }

        };


    }, [enabled, videoRef]);

}