import React, { useState, useEffect, useCallback } from 'react';
import PageBanner from './PageBanner';

// Base de datos de fotos (¡Asegúrate de que estas imágenes existan en tu carpeta public!)
const galleryData = [
  { id: 1, src: '/backNosotros.jpg', category: 'Exteriores', alt: 'Fachada del Hotel' },
  { id: 2, src: '/interiorcolonial.jpg', category: 'Interiores', alt: 'Patio Principal' },
  { id: 3, src: '/detalle.jpg', category: 'Detalles', alt: 'Herrería y Arquitectura' },
  { id: 4, src: '/img1.png', category: 'Vistas', alt: 'Vista Panorámica de Taxco' },
  { id: 5, src: '/BACKGROUND.png', category: 'Exteriores', alt: 'Terraza' },
  { id: 6, src: '/BACKGROUND2.jpg', category: 'Habitaciones', alt: 'Cama Colonial' },
  { id: 7, src: '/BACKGROUND3.jpg', category: 'Vistas', alt: 'Atardecer' },
  { id: 8, src: '/BACKGROUND1.jpg', category: 'Interiores', alt: 'Pasillos' },
];

const Galeria = () => {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['Todas', ...new Set(galleryData.map(item => item.category))];

  const filteredImages = activeFilter === 'Todas' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  // Funciones del Lightbox
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  // Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <>
      <PageBanner 
        title="Nuestra Galería" 
        subtitle="Un recorrido visual por la historia y belleza de Casa Grande" 
        backgroundImage="/interiorcolonial.jpg" 
      />

      <section className="gallery-section" style={{ padding: '60px 5%', backgroundColor: 'var(--bg-light)', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="filters-container" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(cat);
                  setLightboxIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div 
                key={img.id} 
                className="gallery-item" 
                onClick={() => openLightbox(index)}
              >
                {/* Asegurarse de que la imagen ocupe todo el contenedor */}
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="gallery-overlay">
                  <span>Ampliar ⤢</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>

          <img 
            src={filteredImages[lightboxIndex].src} 
            alt={filteredImages[lightboxIndex].alt} 
            className="lightbox-content" 
            onClick={(e) => e.stopPropagation()} 
          />

          <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </>
  );
};

export default Galeria;