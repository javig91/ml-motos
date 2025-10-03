import React, { useState } from "react";
import { phoneNumber } from "./PhoneNumber";

function BotonWhatsApp() {

    const [hover, setHover] = useState(false)

    const estiloBoton = {
        cursor: "pointer",
        position: "absolute",
        bottom: "3vh",
        right: "0",
        padding: "25px"
    }

    const estiloIcono = {
        position: "absolute",
        width: "60%",
        height: "60%",
        padding: ".25rem",
        left: "0",
        top: "0",
        color: "#fff",
        borderRadius: "15px",
        backgroundColor: hover? "#016301ff" : "green",
        transition: "background-color 0.5s"
    }

    return (
        <>
            <a href={`https://wa.me/${phoneNumber}`} style={estiloBoton} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            >
                <ion-icon name="logo-whatsapp" style={estiloIcono}></ion-icon>
            </a>
        </>
    )
}

export default BotonWhatsApp;