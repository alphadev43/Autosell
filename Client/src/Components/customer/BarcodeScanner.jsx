import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

const BarcodeScanner = ({ onScan, onClose, onError }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const intervalRef = useRef(null);
  const detectorRef = useRef(null);
  const zxingReaderRef = useRef(null);

  const [error, setError] = useState(null);

  const stopScanner = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (zxingReaderRef.current) {
      zxingReaderRef.current.reset();
      zxingReaderRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  };

  const startScanner = async () => {
    const video = videoRef.current;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      streamRef.current = stream;
      video.srcObject = stream;
      await video.play();

      setError(null);

      /** 1. Native BarcodeDetector */
      if ("BarcodeDetector" in window) {
        detectorRef.current = new BarcodeDetector({
          formats: ["qr_code", "ean_13", "code_128"],
        });

        if (!intervalRef.current) {
          intervalRef.current = setInterval(async () => {
            try {
              const result = await detectorRef.current.detect(video);
              if (result.length > 0) {
                const code = result[0].rawValue;
                onScan(code);
                stopScanner();
              }
            } catch (err) {
              console.warn(err);
            }
          }, 300);
        }
      } else {
        /** 2. ZXing fallback */
        const reader = new BrowserMultiFormatReader();
        zxingReaderRef.current = reader;

        const devices = await reader.listVideoInputDevices();
        if (!devices.length) throw new Error("No camera found");

        reader.decodeFromVideoDevice(devices[0].deviceId, video, (res, err) => {
          if (res) {
            onScan(res.getText());
            stopScanner();
          }
        });
      }
    } catch (err) {
      console.log("Camera error:", err);
      setError(err.message);
      onError && onError(err.message);
    }
  };

  useEffect(() => {
    startScanner();

    return () => stopScanner();
  }, []);

  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden h-[400px]">
      <video ref={videoRef} className="w-full h-full object-cover" muted playsInline />

      {error && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-600 text-white p-4 rounded-lg">
          {error}
        </div>
      )}

      <button
        onClick={() => { stopScanner(); onClose(); }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Stop Scanning
      </button>
    </div>
  );
};

export default BarcodeScanner;
