import React, { useState } from "react";
import axios from "axios";
import "../styles/camerapredict.css";

const CameraPredict = () => {
  const [camera, setCamera] = useState("0");

  const startPrediction = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict_realtime", { camera });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error starting prediction:", error.response.data.error);
    }
  };

  return (
    <div className="camera-predict-container">
      <select value={camera} onChange={(e) => setCamera(e.target.value)}>
        <option value="0">Camara1</option>
        <option value="1">Camara2</option>
      </select>
      <button onClick={startPrediction}>Iniciar Predicción</button>
      <p className="exit-instruction">Para salirse de la ventana presione la tecla 'q'</p>
    </div>
  );
};

export default CameraPredict;