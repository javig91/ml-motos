import React from "react";
import Logo from '../imgs/logo.png';
import '../styles/Footer.css'
import { Link } from "react-router-dom";
import BotonWhatsAppFooter from "./WhatsAppFooter";
import Instagram from "./instagram";
import MapaLink from "./Ubicacion";
import EnlaceTelefono from "./Telefono";

function Footer() {
    return(
        <div className="div-footer-container">

            <div className="footer-content">

                <img src={ Logo } className='ml-logo' alt='Logo de ML Motos' />

                <div className="local-details">
                    {/* <p>Dirección: Vélez Sársfield 4731 Local 5, Munro
                        <br></br>
                        Teléfono: 4721-9384
                    </p> */}
                    <MapaLink />
                    <EnlaceTelefono />
                    <div className="social-networks">
                        <Instagram />
                        <BotonWhatsAppFooter className="BotonWhatsAppFooter"/>
                    </div>
                    
                </div>

            </div>

            <Link className="javier-gamboa" to="https://www.linkedin.com/in/javiergamboa14/" target="_blank">Diseño y Desarrollo</Link>

        </div>
    )
}

export default Footer;