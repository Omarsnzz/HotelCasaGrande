import React from 'react';
import { Link } from 'react-router-dom';

export const roomsData = [
  // Planta Baja
  { id: 1, name: 'Habitación 1', section: 'Planta Baja', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 10, name: 'Habitación 10', section: 'Planta Baja', beds: '2 camas individuales', pax: 2, price: 890, image: '/img1.png' },
  { id: 11, name: 'Habitación 11', section: 'Planta Baja', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 12, name: 'Habitación 12', section: 'Planta Baja', beds: '2 camas matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  
  // Planta Media
  { id: 2, name: 'Habitación 2', section: 'Planta Media', beds: '2 camas individuales', pax: 2, price: 890, image: '/img1.png' },
  { id: 4, name: 'Habitación 4', section: 'Planta Media', beds: '1 matrimonial y 1 individual', pax: 3, price: 1000, image: '/img1.png' },
  { id: 5, name: 'Habitación 5', section: 'Planta Media', beds: '1 matrimonial y 1 individual', pax: 3, price: 1000, image: '/img1.png' },

  // Planta Alta
  { id: 27, name: 'Habitación 27', section: 'Planta Alta', beds: '2 camas matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  { id: 28, name: 'Habitación 28', section: 'Planta Alta', beds: '2 camas matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  { id: 29, name: 'Habitación 29', section: 'Planta Alta', beds: '2 camas matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  { id: 30, name: 'Habitación 30', section: 'Planta Alta', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 31, name: 'Habitación 31', section: 'Planta Alta', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 33, name: 'Habitación 33', section: 'Planta Alta', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 34, name: 'Habitación 34', section: 'Planta Alta', beds: '1 cama matrimonial', pax: 2, price: 815, image: '/img1.png' },

  // Departamento
  { id: 'dep', name: 'Departamento', section: 'Planta Alta', beds: '1 King, 2 Indiv, 1 Matrimonial', pax: 6, price: 3000, details: 'Sala, comedor, cocina equipada...', image: '/img1.png' },

  // Baño Compartido
  { id: 14, name: 'Habitación 14', section: 'Baño Compartido', beds: '1 cama individual', pax: 1, price: 390, image: '/img1.png' },
  { id: 18, name: 'Habitación 18', section: 'Baño Compartido', beds: '2 camas individuales', pax: 2, price: 520, image: '/img1.png' },
  { id: 20, name: 'Habitación 20', section: 'Baño Compartido', beds: '2 camas individuales', pax: 2, price: 520, image: '/img1.png' },
];

const Rooms = () => {
  const sections = [...new Set(roomsData.map(room => room.section))];

  return (
    <section className="rooms-section">
      <div className="container">
        <h2 className="section-title">Nuestras Habitaciones</h2>
        <p className="section-subtitle">Explora nuestras opciones en Taxco</p>

        {sections.map(section => (
          <div key={section} className="room-group">
            <h3 className="floor-title">{section}</h3>
            <div className="rooms-grid">
              {roomsData
                .filter(room => room.section === section)
                .map(room => (
                  <div key={room.id} className="room-card">
                    <div className="room-img-container">
                      <img src={room.image} alt={room.name} className="room-card-img" />
                    </div>
                    <div className="room-info">
                      <h4>{room.name}</h4>
                      <p>🛏️ {room.beds}</p>
                      <p>👥 {room.pax} PAX</p>
                    </div>
                    <div className="room-price-box">
                      <span className="price">${room.price}</span>
                      <span className="per-night">/noche</span>
                    </div>
                    <Link to={`/habitaciones/${room.id}`} className="btn-details">Ver detalles</Link>
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