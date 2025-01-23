import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/camerapredict.css";

const CameraPredict = () => {
    const [selectedCamera, setSelectedCamera] = useState("");
    const [cameras, setCameras] = useState([]);

    useEffect(() => {
        const getCameras = async () => {
            try {
                // Solicitar permisos para acceder a la cámara sin iniciar la cámara
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                stream.getTracks().forEach(track => track.stop());

                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = devices.filter(device => device.kind === 'videoinput');
                setCameras(videoDevices);
            } catch (err) {
                console.error("Error accessing media devices.", err);
            }
        };

        getCameras();
    }, []);

    const handleCameraChange = (event) => {
        setSelectedCamera(event.target.value);
    };

    return (
        <div className="monitoring-page">
            <button onClick={() => {}}>Iniciar cámara</button>
            <select value={selectedCamera} onChange={handleCameraChange}>
                <option value="" disabled>Seleccione una cámara</option>
                {cameras.map((camera, index) => (
                    <option key={camera.deviceId} value={camera.deviceId}>
                        {camera.label || `Cámara ${index + 1}`}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CameraPredict;