import React from 'react';

const Actividades = () => {
  const destinos = [
    {
      titulo: "Parroquia de Santa Prisca",
      descripcion: "Símbolo de la opulencia minera del siglo XVIII, mandada a construir por José de la Borda. Sus retablos de oro de 24 quilates son el faro que guía a los viajeros.",
      categoria: "Cultura",
      icono: "⛪",
      imagen: "/santaprisca.jpg"
    },
    {
      titulo: "Mina Prehispánica",
      descripcion: "Un viaje al centro de la tierra donde se conservan vetas reales de plata y cuarzo. Un espacio rústico que narra cómo los antiguos habitantes extraían metales.",
      categoria: "Aventura",
      icono: "⛏️",
      imagen: "/mina.jpg"
    },
    {
      titulo: "Museo de Arte Virreinal",
      descripcion: "Joya de estilo mudéjar donde se hospedó Alexander von Humboldt. Alberga objetos del esplendor religioso, desde túnicas hasta piezas de valor incalculable.",
      categoria: "Historia",
      icono: "🏛️",
      imagen: "/museo.jpg"
    },
    {
      titulo: "Pozas Azules de Atzala",
      descripcion: "Jacuzzis naturales de color azul profundo rodeados de vegetación selvática. Un oasis revitalizante lejos del bullicio urbano.",
      categoria: "Naturaleza",
      icono: "💦",
      imagen: "/posas.jpg"
    },
    {
      titulo: "Grutas de Cacahuamilpa",
      descripcion: "Catedrales subterráneas con bóvedas de hasta 70 metros de altura. Un recorrido entre figuras caprichosas como 'El Trono' o 'La Fuente'.",
      categoria: "Naturaleza",
      icono: "🦇",
      imagen: "/grutas.jpg"
    },
    {
      titulo: "El Cristo Monumental",
      descripcion: "Situado en la cima del Cerro de Atachi, esta estatua de 5 metros vigila el valle. Es el lugar preferido para ver el atardecer en la ciudad.",
      categoria: "Mirador",
      icono: "✝️",
      imagen: "/cristo.jpg"
    },
    {
      titulo: "El Teleférico",
      descripcion: "Ascenso suave para apreciar la ingeniería 'imposible' de Taxco, observando cómo las casas desafían la gravedad en las laderas empinadas.",
      categoria: "Mirador",
      icono: "🚠",
      imagen: "/teleferico.jpg"
    },
    {
      titulo: "Parque recreativo el Huixteco",
      descripcion: "Es el pulmón verde de la ciudad y el lugar preferido para quienes buscan contacto directo con la naturaleza y deportes de aventura.",
      categoria: "Aventura",
      icono: "⛰️",
      imagen: "/huixteco.jpg"
    },
    {
      titulo: "Zócalo - Plaza Borda",
      descripcion: "Es el corazón vibrante y el punto de reunión principal de este Pueblo Mágico. Es considerado uno de los espacios públicos más pintorescos de México.",
      categoria: "Cultura",
      icono: "🏢",
      imagen: "/zocalo.jpg"
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Banner Principal*/}
      <header 
        style={{ 
          backgroundImage: "url('/banneracti.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginTop: '0'
        }}
      >
        {/* Capa oscura superpuesta para que el texto resalte sobre la imagen */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        
        <div className="banner-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '4rem', textShadow: '2px 4px 8px rgba(0,0,0,0.8)' }}>Taxco de Alarcón</h1>
          <p style={{ fontSize: '1.5rem', textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}>Capital Mundial de la Plata</p>
          <div style={{ width: '80px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '20px auto', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }}></div>
        </div>
      </header>

      {/* Contenedor principal del contenido */}
      <div className="actividades-container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        
        {/* Introducción - Elevada ligeramente sobre el banner */}
        <section className="actividades-intro" style={{ position: 'relative', zIndex: 2 }}>
          <p>
            Pueblo Mágico de estilo colonial con un relieve montañoso que regala paisajes únicos de 
            casas blancas con techos de teja roja y estrechas calles empedradas que suben y bajan por los cerros.
          </p>
        </section>

        {/* Rejilla de Actividades */}
        <div className="rooms-grid">
          {destinos.map((destino, index) => (
            <article key={index} className="room-card-premium">
              
              {/* Contenedor de la Imagen */}
              <div className="card-image-wrapper">
                <img src={destino.imagen} alt={destino.titulo} />
                <div className="image-overlay"></div>
                
                {/* Etiqueta de Categoría */}
                <div className={`room-badge ${
                  destino.categoria === 'Cultura' || destino.categoria === 'Historia' ? 'badge-gold' : 
                  destino.categoria === 'Naturaleza' || destino.categoria === 'Aventura' ? 'badge-green' : 'badge-blue'
                }`}>
                  {destino.categoria}
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="card-content">
                <div className="card-header" style={{ marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px', fontSize: '1.6rem' }}>{destino.icono}</span>
                    {destino.titulo}
                  </h3>
                </div>
                
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: '1' }}>
                  {destino.descripcion}
                </p>
              </div>

            </article>
          ))}
        </div>

        {/* Sección Sensorial */}
        <section className="sensory-section">
          <div className="sensory-content">
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-color)', fontSize: '2.5rem', marginBottom: '20px' }}>
              Caminar por Taxco
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '15px' }}>
              Una experiencia sensorial única: el piso de piedra de río llamado "empedrado granadino" con diseños 
              de flores y estrellas guía tus pasos.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              Mientras avanzas, verás los famosos "Vochos" blancos subir cuestas imposibles, mientras el sonido 
              del martilleo sobre el metal en los talleres de plata crea la banda sonora perfecta.
            </p>
          </div>
          <div className="sensory-quote">
            <blockquote>
              "En cada esquina hay un taller donde el alma de la ciudad se funde con el metal."
            </blockquote>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Actividades;