// Imagen1.js
import React from 'react';
import '../styles/Imagen1.css'; // Importa el archivo CSS
import lora from '../image/lora.jpg'; // Importa la imagen

function Imagen1() {
  return (
    <div className="imagen">
      <img src={lora} alt="Siglas LEI corresponden al nombre del autor" />
    </div>
  );
}

export default Imagen1;
