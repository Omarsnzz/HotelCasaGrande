import React from 'react';
import './nosotros.css'; // ¡Importante! Aquí conectamos el diseño

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      {/* Hero Section */}
      <section className="nosotros-hero">
        <img 
          src="/backNosotros.jpg" 
          alt="Hotel Casa Grande Taxco" 
          className="nosotros-hero-bg"
        />
        <div className="nosotros-hero-content">
          <h1>Hotel Casa Grande</h1>
          <p>"Un encuentro con la historia en el corazón de Taxco de Alarcón"</p>
        </div>
      </section>

      {/* Introducción y Ubicación */}
      <section className="nosotros-section grid-2-col">
        <div className="nosotros-text">
          <h2>Nuestra Esencia</h2>
          <p>
            El Hotel Casa Grande de Taxco es un alojamiento de estilo colonial e interés histórico situado en el corazón de Taxco de Alarcón. 
            Es una opción bastante práctica para quienes buscan comodidad, arquitectura tradicional y proximidad inmediata a la vida cultural y comercial.
          </p>
          <div className="info-box">
            <h3>Ubicación Privilegiada</h3>
            <p>Plazuela de San Juan 7, Col. Centro. Nuestra posición céntrica permite recorrer a pie el centro histórico y sus empedradas calles.</p>
          </div>
        </div>
        <div className="nosotros-gallery">
          {/* Asegúrate de tener estas imágenes en tu carpeta "public" */}
          <img src="/interiorcolonial.jpg" alt="Interior Colonial" className="gallery-img top-img" />
          <img src="/detalle.jpg" alt="Detalle Arquitectónico" className="gallery-img bottom-img" />
        </div>
      </section>

      {/* Historia Section */}
      <section className="nosotros-section bg-light">
        <div className="nosotros-history">
          <h2 className="center-text">Un Legado desde 1571</h2>
          
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-year">1571</div>
              <div className="timeline-content">
                <h3>Origen y Antigüedad</h3>
                <p>
                  La propiedad data del año 1571, en pleno periodo del Virreinato de la Nueva España. Fue concebida como una de las grandes casonas para la población de altos recursos vinculados al auge minero. Su arquitectura destaca por patios y murales empedrados laterales hechos con guijarros, una joya protegida por el INAH.
                </p>
              </div>
            </div>

            <div className="timeline-item border-left">
              <h3 className="italic-text">Testigo de la Historia de México</h3>
              <div className="history-grid">
                <div className="history-card">
                  <h4>Independencia</h4>
                  <p>José María Morelos y Pavón utilizó esta propiedad como cuartel militar durante su paso por la región.</p>
                </div>
                <div className="history-card">
                  <h4>Revolución</h4>
                  <p>Siglos más tarde, el caudillo del sur, Emiliano Zapata, también estableció allí un cuartel para sus tropas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios y Puntos de Interés */}
      <section className="nosotros-section grid-2-col">
        <div className="services-box">
          <h3><span className="icon">🛎️</span> Comodidades y Servicios</h3>
          <ul>
            <li><span className="dot">•</span> <strong>Habitaciones:</strong> Suites con baño privado, ducha, Wi-Fi y TV.</li>
            <li><span className="dot">•</span> <strong>Servicios Generales:</strong> Recepción 24h, asistencia turística y caja de seguridad.</li>
          </ul>
        </div>

        <div className="poi-box">
          <h3><span className="icon">📍</span> Cerca de Nosotros</h3>
          <p>A pocos minutos caminando:</p>
          <ul className="bullet-list">
            <li>Plaza Borda (Plaza Principal)</li>
            <li>Parroquia de Santa Prisca y San Sebastián</li>
            <li>Museo Casa Figueroa</li>
            <li>Museo de Arte Virreinal</li>
          </ul>
        </div>
      </section>

      {/* Footer / Cierre */}
      <footer className="nosotros-footer">
        <p className="footer-title">Hotel Casa Grande de Taxco</p>
        <p>Patrimonio, Historia y Confort</p>
      </footer>
    </div>
  );
};

export default Nosotros;