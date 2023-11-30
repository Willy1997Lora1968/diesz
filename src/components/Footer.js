import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <h2><Link to={props.urlTerminos}>{props.tituloTerminos}</Link></h2>
      <p>{props.textoTerminos}</p>

      <h2>{props.tituloFormulario}</h2>
      <form>
        <label htmlFor="nombre">{props.labelNombre}</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">{props.labelEmail}</label>
        <input type="email" id="email" name="email" required />

        <input type="submit" value={props.textoBoton} />
      </form>
    </footer>
  );
}

export default Footer;
