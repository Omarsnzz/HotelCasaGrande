import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual automáticamente

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Columna 1: Contacto y Ubicación */}
        <div className="footer-col">
          <h4>Hotel Casa Grande</h4>
          <p className="footer-desc">
            Un encuentro con la historia en el corazón de Taxco de Alarcón.
          </p>
          <ul className="contact-info">
            <li>📍 Plazuela de San Juan 7, Col. Centro, Taxco</li>
            <li>📞 +52 (777) 123 4567</li>
            <li>✉️ reservas@hotelcasagrande.com</li>
          </ul>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h4>Explorar</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nuestra Historia</Link></li>
            <li><Link to="/habitaciones">Habitaciones</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
          </ul>
        </div>

        {/* Columna 3: Legal y Ayuda */}
        <div className="footer-col">
          <h4>Ayuda e Información</h4>
          <ul className="footer-links">
            <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
            <li><Link to="/privacidad">Aviso de Privacidad</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Hotel Casa Grande Taxco. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;