import React from "react";
import Logo from '../imgs/logo.png';
import '../styles/Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className="div-footer-container">

            <div className="footer-content">

                <img src={ Logo } className='ml-logo' alt='Logo de ML Motos' />

                <div className="local-details">
                    <p>Dirección: Vélez Sársfield 4731 Local 5, Munro
                        <br></br>
                        Teléfono: 4721-9384
                    </p>
                    <Link to="https://www.instagram.com/ml.motos.concesionaria" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                    
                </div>

            </div>

            <Link className="javier-gamboa" to="https://www.instagram.com/javi.gamboa14" target="_blank">Diseño y Desarrollo</Link>

        </div>
    )
}

export default Footer;