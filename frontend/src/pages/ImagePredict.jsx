import React from "react";
import axios from "axios";

const ImagePredict = () => {
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
                        alert(res.data.message);
                    });
            } catch (error) {
                console.error("Error al realizar la petición:", error);
            }
        }
    };

    return (
        <div className="image-page">
            <h1>Página de Imágenes</h1>
            <button onClick={() => document.getElementById("file-input").click()}>
                Realizar predicciones
            </button>
            <input
                id="file-input"
                type="file"
                style={{ display: "none" }}
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ImagePredict;