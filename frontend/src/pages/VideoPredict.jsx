import React from "react";
import "../styles/videopredict.css";

const VideoPredict = () => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Archivo seleccionado:", file);
            const formData = new FormData();
            formData.append("file", file);
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
                </div>
                <div className="video-box">
                    <h2>Predicción</h2>
                </div>
            </div>
        </div>    
    );
};

export default VideoPredict;