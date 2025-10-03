import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/MotoList.css'

function MotoList() {
    const [motos, setMotos] = useState([]);
    const [motosOrdenadas, setMotosOrdenadas] = useState([]);
    const [criterioOrden, setCriterioOrden] = useState('nombre');

    useEffect(() => {
        // fetch('https://api.miapp.com/motos')
        // fetch('/data/motos.json')
        fetch(`${process.env.PUBLIC_URL}/data/motos.json`)
        .then(res => {
            if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
        setMotos(data);
        setMotosOrdenadas(data);
        })
        .catch(err => console.error("Error cargando el JSON:", err));
    }, []);

    const parseCilindrada = (str) => {
        const match = str.match(/[\d.]+/);
        return match ? parseFloat(match[0]) : 0;
    };

    const parseCombustible = (str) => {
        const match = str.match(/[\d.]+/);
        return match ? parseFloat(match[0]) : 0;
    };

    const ordenarMotos = (criterio) => {
        let ordenadas = [...motos];

        switch (criterio) {
            case 'nombre':
            ordenadas.sort((a, b) => a.titulo.localeCompare(b.titulo));
            break;

            case 'cilindrada-asc':
            ordenadas.sort((a, b) => parseCilindrada(a.Cilindrada) - parseCilindrada(b.Cilindrada));
            break;

            case 'cilindrada-desc':
            ordenadas.sort((a, b) => parseCilindrada(b.Cilindrada) - parseCilindrada(a.Cilindrada));
            break;

            case 'combustible-asc':
            ordenadas.sort((a, b) => parseCombustible(a.LitrosCombustible) - parseCombustible(b.LitrosCombustible));
            break;

            default:

            break;
        }

        setMotosOrdenadas(ordenadas);
    };

    const handleChangeOrden = (e) => {
        const nuevoCriterio = e.target.value;
        setCriterioOrden(nuevoCriterio);
        ordenarMotos(nuevoCriterio);
    };

    return (
        <div className='div-principal'>

            <div className="orden-dropdown">
                <label htmlFor="orden-select">Ordenar por:</label>
                <select id="orden-select" value={criterioOrden} onChange={handleChangeOrden}>
                    <option value="nombre">Nombre (A-Z)</option>
                    <option value="cilindrada-asc">Cilindrada ↑</option>
                    <option value="cilindrada-desc">Cilindrada ↓</option>
                    <option value="cilindrada-desc">Litros de Combustible ↑</option>
                </select>
            </div>

            <div className='page-content'>
                <div className="lista-motos">
                    {motosOrdenadas.map(moto => (
                        <div
                        key={moto.id}
                        className="moto-card"
                        style={{
                        backgroundImage: `url(${moto.imagenes[0]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                        }}
                        >
                            <Link to={`/motos/${moto.id}`}>
                            <h3>{moto.titulo}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="orden-botones">
                <p>Ordene las motos a su preferencia</p>
                <button onClick={ordenarPorTitulo}>Nombre</button>
                <button onClick={ordenarPorCilindradaAsc}>Cilindrada ↑</button>
                <button onClick={ordenarPorCilindradaDesc}>Cilindrada ↓</button>
                <button onClick={LitrosCombustibleAsc}>Litros de Combustible ↑</button>
            </div> */}

            {/* <div className='page-content'>
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
                            <Link key={moto.id} to={`/motos/${moto.id}`}>
                                <h3>{moto.titulo}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div> */}

        </div>
  );
}

export default MotoList;
