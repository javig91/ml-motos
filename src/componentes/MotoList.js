import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/MotoList.css'

function MotoList() {
    const [motos, setMotos] = useState([]);

    useEffect(() => {
        // fetch('https://api.miapp.com/motos')
        fetch('/data/motos.json')
        .then(res => res.json())
        .then(data => setMotos(data));
    }, []);

  return (
    <div className='div-principal'>

        <div className='page-content'>
            <div className="lista-motos">
                {motos.map(moto => (
                    <div 
                    className="moto-card"
                    style={{
                        backgroundImage: `url(${moto.imagenes[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    >
                        {/* <img src={moto.imagen} alt={moto.titulo} /> */}
                        <Link key={moto.id} to={`/motos/${moto.id}`}>
                            <h3>Ficha Técnica</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
}

export default MotoList;
