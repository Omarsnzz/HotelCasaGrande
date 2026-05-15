import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Rooms from './components/Rooms';
import Nosotros from './components/nosotros';
import RoomDetail from './components/RoomDetail';
import Footer from './components/Footer';
import Galeria from './components/Galeria'
import Actividades from './components/actividades';
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
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/habitaciones" element={<Rooms />} />
        <Route path="/habitaciones/:id" element={<RoomDetail />} />
        <Route path="/galeria" element={<Galeria />} />
        
        {/* AQUÍ ESTABA EL ERROR: Cambiamos DummyPage por Actividades */}
        <Route path="/actividades" element={<Actividades />} />
        
        <Route path="/reservar" element={<DummyPage title="Motor de Reservas" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;