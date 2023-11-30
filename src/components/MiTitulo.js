import React from 'react';
import '../styles/MiTitulo.css';
 // Asegúrate de importar tu archivo CSS
import letra from '../image/letra.jpg'; // Importa la imagen

function MiTitulo() {
  return (
    <div className="mi-titulo">
      <img src={letra} alt="Letra" />
    </div>
  );
}

export default MiTitulo;

