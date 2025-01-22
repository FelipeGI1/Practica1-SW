import React, { useState } from "react";
import axios from "axios";
import "../styles/imagepredict.css";
import Swal from "sweetalert2";

const ImagePredict = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [predictedImage, setPredictedImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Archivo seleccionado:", file);
            const formData = new FormData();
            formData.append("file", file);

            try {
                axios
                    .post("http://127.0.0.1:5000/predict", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((res) => {
                        console.log("Respuesta del servidor:", res.data);
                        setOriginalImage(`http://127.0.0.1:5000${res.data.original_image}`);
                        setPredictedImage(`http://127.0.0.1:5000${res.data.predicted_image}`);
                        Swal.fire({
                            title: "Predicción realizada",
                            icon: "success",
                        });
                    });
            } catch (error) {
                console.error("Error al realizar la petición:", error);
            }
        }
    };

    return (
        <div className="image-page">
            <button className="predict-button" onClick={() => document.getElementById("file-input").click()}>
                Realizar predicciones
            </button>
            <input
                id="file-input"
                type="file"
                style={{ display: "none" }}
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
            />
            <div className="image-container">
                <div className="image-box">
                    <h2>Imagen original</h2>
                    {originalImage && <img src={originalImage} alt="Imagen original" />}
                </div>
                <div className="image-box">
                    <h2>Predicción</h2>
                    {predictedImage && <img src={predictedImage} alt="Predicción" />}
                </div>
            </div>     
        </div>
    );
};

export default ImagePredict;