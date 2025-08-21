import React from 'react';
import '../styles/Motos.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import MotoList from '../componentes/MotoList';


function Motos() {

	return (
		<div className='div-principal'>
			
			<Header className="header_component" />

			<div className='page-content'>
                <h2>Nuestras Motos</h2>
                <MotoList />
			</div>

			<Footer />

		</div>
	);
}

export default Motos;