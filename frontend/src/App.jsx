import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Rooms from './components/Rooms';
// 1. Agrega esta línea para importar tu archivo (verifica que la ruta sea correcta)
import Nosotros from './components/nosotros';
import './index.css';

const Home = () => (
  <>
    <Hero />
    <Welcome />
  </>
);

const DummyPage = ({ title }) => (
  <div style={{ paddingTop: '150px', textAlign: 'center', height: '100vh' }}>
    <h1 style={{ color: 'var(--primary-color)' }}>{title}</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 2. Cambia DummyPage por tu componente Nosotros */}
        <Route path="/nosotros" element={<Nosotros />} />
        
        <Route path="/habitaciones" element={<Rooms />} />
        
        {/* RUTA DINÁMICA: Atrapa cualquier ID de habitación */}
        <Route path="/habitaciones/:id" element={<DummyPage title="Detalles de Habitación (En desarrollo)" />} />
        
        <Route path="/actividades" element={<DummyPage title="Actividades en Taxco" />} />
        <Route path="/galeria" element={<DummyPage title="Galería" />} />
        <Route path="/reservar" element={<DummyPage title="Motor de Reservas" />} />
      </Routes>
    </Router>
  );
}

export default App;