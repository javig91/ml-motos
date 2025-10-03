import React, { useState } from 'react';

function MapaLink() {
    const [hover, setHover] = useState(false)

    const direccion = "Vélez Sársfield 4731 Local 5, Munro";
    const urlMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;

    const estilosUbicacion = {
        cursor: "pointer",
        textDecoration: "none",
        color: hover? "rgb(213 213 213)" : "#fff"
    }

    return (
        <a href={urlMaps} target="_blank" rel="noopener noreferrer" style={estilosUbicacion}
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
        >
            Dirección: Vélez Sársfield 4731 Local 5, Munro
        </a>
    );
}

export default MapaLink;