import { useEffect, useState } from 'react';

const Navbar = () => {
  // Aquí metemos la lógica que tenías en script.js para el scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 34) { // 34px es más o menos el alto de tu top-bar
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
      {/* Barra de anuncios */}
      <div className="top-bar">
        Reserva en web y recibe: Early Check-in, Parking y Wi-Fi gratis *Aplican Restricciones
      </div>

      {/* Navegación */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="logo">Casa Grande</a>
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Habitaciones</a></li>
          <li><a href="#">Actividades en Taxco</a></li>
          <li><a href="#">Galeria</a></li>
          <li><a href="#" className="btn-reservar">Reservar</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;