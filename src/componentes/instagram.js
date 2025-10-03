import React, { useState } from "react";

function Instagram() {

    const [hover, setHover] = useState(false)

    const estiloIcono = {
        cursor: "pointer",
        color: hover? "rgb(213 213 213)" : "#fff"
    }

    return (
        <>
            <a href="https://www.instagram.com/ml.motos.concesionaria" target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            >
                <ion-icon name="logo-instagram" style={estiloIcono}></ion-icon>
            </a>
        </>
    )
}

export default Instagram;