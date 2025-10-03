import React, { useState } from 'react';

function EnlaceTelefono() {
    const telDeLinea  = "4721-9384"
    const [hover, setHover] = useState(false)

    const estilosHover = {
        cursor: "pointer",
        textDecoration: "none",
        color: hover? "rgb(213 213 213)" : "#fff"
    }

  return (
    <a href={`tel:${telDeLinea}`} style={estilosHover}
    onMouseEnter={() => {setHover(true)}}
    onMouseLeave={() => {setHover(false)}}
    >
      Llamar al {telDeLinea}
    </a>
  );
}

export default EnlaceTelefono;