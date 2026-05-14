import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  '/BACKGROUND.png',
  '/BACKGROUND1.jpg',
  '/BACKGROUND2.jpg',
  '/BACKGROUND3.jpg'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); 
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero">
      <div className="carousel-background">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              /* Oscurecemos un poco más el fondo para asegurar que el texto blanco resalte perfecto */
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${slide}')`
            }}
          />
        ))}
      </div>

      <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Slide anterior">&#10094;</button>
      <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Siguiente slide">&#10095;</button>

      {/* NUEVO DISEÑO ELEGANTE Y MINIMALISTA */}
      <div className="hero-content">
        <span className="hero-badge">Patrimonio Histórico</span>
        <h1 className="hero-title">Tu Refugio Colonial en el Corazón de Taxco</h1>
        <p className="hero-subtitle">
          Descubre la tradición, el confort y las mejores vistas panorámicas de la ciudad a solo unos pasos del Zócalo.
        </p>
        
        <div className="hero-actions">
          <Link to="/habitaciones" className="btn-hero-primary">Explorar Habitaciones</Link>
          <Link to="/reservar" className="btn-hero-secondary">Reservar Ahora</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;