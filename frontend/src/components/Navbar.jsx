import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Detecta en qué ruta estamos

  // Si no estamos en la página de inicio ("/"), forzamos el estilo "scrolled"
  const isHomePage = location.pathname === '/';
  const navClass = (scrolled || !isHomePage) ? 'scrolled' : '';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 34) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        Reserva en web y recibe: Early Check-in, Parking y Wi-Fi gratis *Aplican Restricciones
      </div>

      <nav id="navbar" className={navClass}>
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