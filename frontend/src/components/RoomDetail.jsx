import { useParams, Link } from 'react-router-dom';
import { roomsData } from './Rooms';

const RoomDetail = () => {
  const { id } = useParams();
  // Buscamos la habitación que coincida con el ID de la URL
  const room = roomsData.find(r => String(r.id) === id);

  if (!room) return <div style={{paddingTop: '150px', textAlign: 'center'}}>Habitación no encontrada</div>;

  return (
    <div className="room-detail-page" style={{ paddingTop: '120px', minHeight: '100vh', paddingInline: '5%' }}>
      <Link to="/habitaciones" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>← Volver a Habitaciones</Link>
      
      <div className="detail-container" style={{ display: 'flex', gap: '50px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div className="detail-gallery" style={{ flex: '1 1 500px' }}>
          <img src={room.image} alt={room.name} style={{ width: '100%', borderRadius: '15px' }} />
          {/* Aquí podrías mapear un array de más fotos en el futuro */}
        </div>

        <div className="detail-info" style={{ flex: '1 1 400px' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', fontSize: '3rem' }}>{room.name}</h1>
          <p style={{ fontSize: '1.2rem', marginBlock: '20px' }}>{room.beds} | Capacidad para {room.pax} personas</p>
          
          <div className="description">
            <h3>Descripción</h3>
            <p>{room.details || "Disfruta de una estancia inolvidable en esta acogedora habitación ubicada en el corazón de Taxco. Cuenta con todas las comodidades necesarias para tu descanso."}</p>
          </div>

          <div className="price-tag" style={{ marginBlock: '30px', fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
            ${room.price} <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>por noche</span>
          </div>

          <Link to="/reservar" className="btn-reservar" style={{ display: 'inline-block', textAlign: 'center', width: '100%' }}>
            Reservar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;