import React from "react";
import logoWeb from '../imgs/logo.png'
import '../styles/Logo.css'

function Logo() {
    return (
        <div className='ml-logo-contenedor'>
            <img src={logoWeb} className='ml-logo' alt='Logo de ML Motos' />
        </div>
    )
};

export default Logo;