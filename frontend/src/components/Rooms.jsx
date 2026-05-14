import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from './PageBanner';

export const roomsData = [
  // Planta Baja
  { id: 1, name: 'Habitación 1', section: 'Planta Baja', beds: '1 matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 10, name: 'Habitación 10', section: 'Planta Baja', beds: '2 individuales', pax: 2, price: 890, image: '/img1.png' },
  { id: 11, name: 'Habitación 11', section: 'Planta Baja', beds: '1 matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 12, name: 'Habitación 12', section: 'Planta Baja', beds: '2 matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  
  // Planta Media
  { id: 2, name: 'Habitación 2', section: 'Planta Media', beds: '2 individuales', pax: 2, price: 890, image: '/img1.png' },
  { id: 4, name: 'Habitación 4', section: 'Planta Media', beds: '1 mat, 1 ind', pax: 3, price: 1000, image: '/img1.png' },
  { id: 5, name: 'Habitación 5', section: 'Planta Media', beds: '1 mat, 1 ind', pax: 3, price: 1000, image: '/img1.png' },

  // Planta Alta
  { id: 27, name: 'Habitación 27', section: 'Planta Alta', beds: '2 matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  { id: 28, name: 'Habitación 28', section: 'Planta Alta', beds: '2 matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  { id: 29, name: 'Habitación 29', section: 'Planta Alta', beds: '2 matrimoniales', pax: 4, price: 1090, image: '/img1.png' },
  { id: 30, name: 'Habitación 30', section: 'Planta Alta', beds: '1 matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 31, name: 'Habitación 31', section: 'Planta Alta', beds: '1 matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 33, name: 'Habitación 33', section: 'Planta Alta', beds: '1 matrimonial', pax: 2, price: 815, image: '/img1.png' },
  { id: 34, name: 'Habitación 34', section: 'Planta Alta', beds: '1 matrimonial', pax: 2, price: 815, image: '/img1.png' },

  // Departamento
  { id: 'dep', name: 'Departamento', section: 'Planta Alta', beds: '1 King, 2 Ind, 1 Mat', pax: 6, price: 3000, details: 'Sala, comedor, cocina...', image: '/img1.png' },

  // Baño Compartido
  { id: 14, name: 'Habitación 14', section: 'Baño Compartido', beds: '1 individual', pax: 1, price: 390, image: '/img1.png' },
  { id: 18, name: 'Habitación 18', section: 'Baño Compartido', beds: '2 individuales', pax: 2, price: 520, image: '/img1.png' },
  { id: 20, name: 'Habitación 20', section: 'Baño Compartido', beds: '2 individuales', pax: 2, price: 520, image: '/img1.png' },
];

const Rooms = () => {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('Todas');

  // Opciones de filtro generadas dinámicamente
  const filters = ['Todas', ...new Set(roomsData.map(room => room.section)), 'Familiares (4+ PAX)'];

  // Lógica de filtrado
  const filteredRooms = roomsData.filter(room => {
    if (activeFilter === 'Todas') return true;
    if (activeFilter === 'Familiares (4+ PAX)') return room.pax >= 4;
    return room.section === activeFilter;
  });

  // Lógica de Etiquetas Inteligentes
  const getBadge = (room) => {
    if (room.id === 'dep') return { text: 'Premium', type: 'gold' };
    if (room.pax >= 4) return { text: 'Familiar', type: 'green' };
    if (room.section === 'Baño Compartido') return { text: 'Económica', type: 'blue' };
    return null;
  };

  return (
    <>
      <PageBanner 
        title="Nuestras Habitaciones" 
        subtitle="Encuentra el espacio perfecto para tu descanso" 
        backgroundImage="/BKROOMS.jpg" 
      />

      <section className="rooms-section" style={{ paddingTop: '40px' }}>
        <div className="container">
          
          {/* BARRA DE FILTROS */}
          <div className="filters-container">
            {filters.map(filter => (
              <button 
                key={filter} 
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="rooms-grid">
            {filteredRooms.map(room => {
              const badge = getBadge(room);
              
              return (
                <div key={room.id} className="room-card-premium">
                  <div className="card-image-wrapper">
                    <img src={room.image} alt={room.name} />
                    <div className="image-overlay"></div>
                    
                    {/* ETIQUETA INTELIGENTE */}
                    {badge && <span className={`room-badge badge-${badge.type}`}>{badge.text}</span>}
                    
                    <div className="price-tag">
                      <span className="currency">$</span>{room.price} <span className="night">/noche</span>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-header">
                      <h3>{room.name}</h3>
                      <span className="floor-label">{room.section}</span>
                    </div>

                    <div className="card-features">
                      <div className="feature">
                        {/* SVG Ícono Cama */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 7v10M21 7v10M6 12v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"/></svg>
                        <span>{room.beds}</span>
                      </div>
                      <div className="feature">
                        {/* SVG Ícono Personas */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span>Hasta {room.pax} Personas</span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <Link to={`/habitaciones/${room.id}`} className="btn-outline">Ver Detalles</Link>
                      <Link to="/reservar" className="btn-solid">Reservar</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredRooms.length === 0 && (
             <p style={{textAlign: 'center', marginTop: '40px'}}>No hay habitaciones que coincidan con este filtro.</p>
          )}

        </div>
      </section>
    </>
  );
};

export default Rooms;