import React from 'react';
import { Link } from 'react-router-dom';

// Se agrega una propiedad 'image' genérica temporal
const roomsData = [
  { id: 1, name: 'Habitación 1', section: 'Planta Baja', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 10, name: 'Habitación 10', section: 'Planta Baja', beds: '2 camas individuales', pax: 2, price: 890, image: '/img1.png' },
  // ... (MANTÉN EL RESTO DE TUS HABITACIONES AQUÍ, SOLO AGRÉGALES LA PROPIEDAD image: '/img1.png')
  { id: 'dep', name: 'Departamento', section: 'Planta Alta', beds: '1 King, 2 Indiv, 1 Matrimonial', pax: 6, price: 3000, details: 'Sala, comedor, cocina equipada...', image: '/img1.png' },
];

const Rooms = () => {
  const sections = [...new Set(roomsData.map(room => room.section))];

  return (
    <section className="rooms-section">
      <div className="container">
        <h2 className="section-title">Nuestras Habitaciones</h2>
        <p className="section-subtitle">Confort y elegancia en cada nivel</p>

        {sections.map(section => (
          <div key={section} className="room-group">
            <h3 className="floor-title">{section}</h3>
            <div className="rooms-grid">
              {roomsData
                .filter(room => room.section === section)
                .map(room => (
                  <div key={room.id} className="room-card">
                    
                    {/* NUEVO: Imagen de la habitación */}
                    <div className="room-img-container">
                        <img src={room.image} alt={room.name} className="room-card-img" />
                    </div>

                    <div className="room-info">
                      <h4>{room.name}</h4>
                      <p className="room-beds">🛏️ {room.beds}</p>
                      <p className="room-pax">👥 Capacidad: {room.pax} PAX</p>
                    </div>
                    
                    <div className="room-price-box">
                      <span className="currency">$</span>
                      <span className="price">{room.price.toLocaleString()}</span>
                      <span className="per-night">/noche</span>
                    </div>

                    {/* NUEVO: Botón para ir a detalles */}
                    <Link to={`/habitaciones/${room.id}`} className="btn-details">
                        Ver Detalles
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;