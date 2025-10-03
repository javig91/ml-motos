import React, { useState } from "react";
import { phoneNumber } from "./PhoneNumber";

function BotonWhatsAppFooter() {

    const [hover, setHover] = useState(false)

    const estiloIcono = {
        cursor: "pointer",
        color: hover? "rgb(213 213 213)" : "#fff"
    }

    return (
        <>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            >
                <ion-icon name="logo-whatsapp" style={estiloIcono}></ion-icon>
            </a>
        </>
    )
}

export default BotonWhatsAppFooter;