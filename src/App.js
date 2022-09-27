import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layouts/Home';
import Nosotros from './layouts/Nosotros';
import Servicios from './layouts/Servicios';
import Contacto from './layouts/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>

        
        
  );
}

export default App;
