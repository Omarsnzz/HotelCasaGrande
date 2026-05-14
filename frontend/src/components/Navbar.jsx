import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const navClass = (scrolled || !isHomePage) ? 'scrolled' : '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 34);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isHomePage && (
        <div className="top-bar">
          Reserva en web y recibe: Early Check-in, Parking y Wi-Fi gratis *Aplican Restricciones
        </div>
      )}

      <nav id="navbar" className={navClass} style={!isHomePage ? { top: '0' } : {}}>
        
        {/* NUEVO: Contenedor del Logo + Texto */}
        <Link to="/" className="brand-container">
          {/* Asegúrate de que logo.png esté en la carpeta public */}
          <img src="/logo.png" alt="Logo Casa Grande" className="navbar-logo" />
          <span className="logo-text">Casa Grande</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/habitaciones">Habitaciones</Link></li>
          <li><Link to="/actividades">Actividades en Taxco</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/reservar" className="btn-reservar">Reservar</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;