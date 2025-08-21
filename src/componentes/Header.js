import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Logo from '../imgs/logo.webp';
import { useState } from 'react';

function Header() {

    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

  return (
    <div className='div-header-container'>

        <div className='link_home_button'>
            <Link className='link_go_home' to="/">
                <img src={ Logo } className='ml-logo' alt='Logo de ML Motos' />
            </Link>
            <button className='button-index'
                onClick={toggleMenu}>
                <ion-icon name="list-outline"></ion-icon>
            </button>
        </div>

        <nav className={`nav-header ${menuOpen ? 'nav-header-none' : ''}`}>
            <ul>
                <li><Link to="/Nosotros">Nosotros</Link></li>
                <li><Link to="/Motos">Motos</Link></li>
                {/* <li><Link to="/Accesorios">Accesorios</Link></li> */}
                <li><Link to="/Servicios">Trámites / Service</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>

    </div>
  );
}

export default Header;