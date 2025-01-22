import React, { useState } from "react";
import axios from "axios";
import "../styles/videopredict.css";
import { showSuccessAlert } from "../helpers/alertas";

const VideoPredict = () => {
    const [originalVideo, setOriginalVideo] = useState(null);
    const [predictedVideo, setPredictedVideo] = useState(null);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Archivo seleccionado:", file);
            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await axios.post('http://localhost:5000/predict_video', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const data = response.data;
                setOriginalVideo(`http://localhost:5000${data.original_video}`);
                setPredictedVideo(`http://localhost:5000${data.predicted_video}`);
                showSuccessAlert("Predicción completada", "El video ha sido procesado exitosamente.");
            } catch (error) {
                console.error("Error al realizar la predicción:", error);
            }
        }
    }

    return (
        <div className="videos-page">
            <button className="predict-vbutton" onClick={() => document.getElementById("file-input").click()}>
                Realizar predicciones
            </button>
            <input
                id="file-input"
                type="file"
                style={{ display: "none" }}
                accept=".mp4, .avi"
                onChange={handleFileChange}
            />
            <div className="video-container">
                <div className="video-box">
                    <h2>Video original</h2>
                    {originalVideo && <video src={originalVideo} controls width="100%" />}
                </div>
                <div className="video-box">
                    <h2>Predicción</h2>
                    {predictedVideo && <video src={predictedVideo} controls width="100%" />}
                </div>
            </div>
        </div>    
    );
};

export default VideoPredict;