// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Texto from "./components/Texto";
import LeonDeOro from "./components/LeonDeOro";
import Footer from "./components/Footer";
import TerminosYCondiciones from "./components/TerminosYCondiciones";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header titulo="HM & LEI" subtitulo="Presentan" />
        <Texto texto="El león ha sido un símbolo de fuerza y coraje desde tiempos inmemoriales. En nuestra agencia, el 'León de Oro' representa nuestra tenacidad, nuestra pasión por la excelencia y nuestro compromiso con la calidad." />
        <LeonDeOro />
        <Texto texto="Somos una agencia de diseño web apasionada por crear experiencias digitales impactantes. Nuestro equipo de diseñadores y desarrolladores trabaja de la mano para convertir ideas innovadoras en sitios web atractivos y funcionales. Desde el concepto hasta la implementación, nos esforzamos por ofrecer soluciones web personalizadas que reflejen la identidad única de cada cliente. Ya sea que esté buscando una presencia en línea elegante, una tienda en línea robusta o una interfaz de usuario intuitiva, estamos aquí para hacer realidad sus visiones digitales. ¡Confíe en nosotros para llevar su presencia en línea al siguiente nivel!" />
        <Routes>
          <Route path="/ruta-a-terminos-y-condiciones" element={<TerminosYCondiciones />} />
        </Routes>
        <Footer 
          urlTerminos="/ruta-a-terminos-y-condiciones"
          tituloTerminos="Terminos y Condiciones"
          textoTerminos="Haz clic en el título para ver los términos y condiciones."
          tituloFormulario="Formulario de Aceptación"
          labelNombre="Nombre:"
          labelEmail="Correo Electrónico:"
          textoBoton="Aceptar"
        />
      </div>
    </Router>
  );
}

export default App;
