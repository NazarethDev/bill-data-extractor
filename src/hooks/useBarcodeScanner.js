import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const codeReader = new BrowserMultiFormatReader();

export function useBarcodeScanner({ videoRef, enabled, onDetected }) {
    const controlsRef = useRef(null);
    const onDetectedRef = useRef(onDetected);

    onDetectedRef.current = onDetected;

    useEffect(() => {
        let isMounted = true;

        async function startScanner() {
            if (!enabled || !videoRef.current) return;

            try {
                const controls = await codeReader.decodeFromVideoDevice(
                    undefined,
                    videoRef.current,
                    (result) => {
                        if (!result || !isMounted) return;

                        const text = result.getText();

                        if (!text) return;

                        controls.stop();
                        controlsRef.current = null;

                        onDetectedRef.current(text);
                    }
                );

                controlsRef.current = controls;
            } catch (err) {
                console.error(err);
            }
        }

        startScanner();

        return () => {
            isMounted = false;

            controlsRef.current?.stop();
            controlsRef.current = null;

            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        };
    }, [enabled, videoRef]);
}