import { useState, useEffect, useCallback } from 'react';

// Centralizamos las rutas de las imágenes en un arreglo
const slides = [
  '/BACKGROUND.png',
  '/BACKGROUND1.jpg',
  '/BACKGROUND2.jpg',
  '/BACKGROUND3.jpg'
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useCallback memoriza la función para evitar re-renderizados innecesarios
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    // La misma fórmula que tenías, adaptada al estado de React para evitar negativos
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Control del temporizador de 7 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); 

    // Limpieza del intervalo: vital para aplicaciones escalables
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${slide}')`
            }}
          />
        ))}
      </div>

      <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Slide anterior">
        &#10094;
      </button>
      <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Siguiente slide">
        &#10095;
      </button>

      {/* Tarjeta de oferta respetando el diseño Glassmorphism */}
      <div className="offer-card">
        <h1>¡EN EL CENTRO DE LA CIUDAD A UNOS METROS DEL ZÓCALO!</h1>
        
        <div className="discounts">
          <div className="discount-item">
            <span className="discount-percent">35%</span>
            <span className="discount-nights">1 Noche</span>
          </div>
          <div className="discount-item">
            <span className="discount-percent">40%</span>
            <span className="discount-nights">2 Noches</span>
          </div>
          <div className="discount-item">
            <span className="discount-percent">45%</span>
            <span className="discount-nights">3+ Noches</span>
          </div>
        </div>

        <p className="offer-footer">
          <strong>Reserva sin riesgo:</strong> tarifas 100% reembolsables.<br />
          Con la tranquilidad de poder cambiar de plan cuando quieras.
        </p>
      </div>
    </section>
  );
};

export default Hero;