import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css'
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Motos from './pages/Motos';
import MotoDetalle from './componentes/MotoDetalle';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';


function App() {
    return (
        // <Router basename="/ml-motos">
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route path="/motos" element={<Motos />} />
                    <Route path="/motos/:id" element={<MotoDetalle />} />
                    <Route path="/Servicios" element={ <Servicios />} />
                    <Route path="/Contacto" element={ <Contacto />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;