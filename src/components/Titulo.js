// Titulo.js
import React from 'react';
import '../styles/Titulo.css';
function Titulo(props) {
  return (
    <h1 className="Titulo">{props.texto}</h1>
  );
}
export default Titulo;

