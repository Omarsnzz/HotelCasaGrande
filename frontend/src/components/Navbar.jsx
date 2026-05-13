import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  // El Navbar cambia a fondo blanco si se hace scroll O si no estamos en el Home
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
      {/* Lógica Senior: Solo renderiza la barra de anuncios en el Home */}
      {isHomePage && (
        <div className="top-bar">
          Reserva en web y recibe: Early Check-in, Parking y Wi-Fi gratis *Aplican Restricciones
        </div>
      )}

      <nav id="navbar" className={navClass} style={!isHomePage ? { top: '0' } : {}}>
        <Link to="/" className="logo">Casa Grande</Link>
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