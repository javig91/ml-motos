import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Home.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import { useState } from 'react';
import gilera from '../imgs/marcasGilera.png'
import gileraHover from '../imgs/marcasGileraHover.png'
import voge from '../imgs/marcasVoge.png'
import vogeHover from '../imgs/marcasVogeHover.png'
import hero from '../imgs/marcasHero.png'
import heroHover from '../imgs/marcasHeroHover.png'

import bannerHome from '../imgs/banner_index.png'

import motosCreditos from '../imgs/motos_creditos.png'


function Home() {

	const [hoveredGilera, setHoveredGilera] = useState(false);
	const [hoveredVoge, setHoveredVoge] = useState(false);
	const [hoveredHero, setHoveredHero] = useState(false);

	return (
		<div className='div-principal'>
			
			<Header className="header_component" />

			<div className='page-content'>
				<div className='fondo_index'>

					<div>
						<p className='Moto-Modelo'>SMASH <br></br> FULL 110</p>
						<p className='Conocela'>Conocela</p>
					</div>

					<div className='marcas_container'>

						<div className='gilera-container'
							onMouseEnter={() => setHoveredGilera(true)}
							onMouseLeave={() => setHoveredGilera(false)}
						>

							<div className={`gilera_div ${hoveredGilera ? 'gilera_div_opacity' : ''}`}>
								<img className='gilera' src={ gilera } alt='Gilera' />
							</div>

							<div className={`gileraHover_div ${hoveredGilera ? 'gileraHover_div_bckColor' : ''}`} >
								<img className='gilera_hover' src={ gileraHover } alt='Gilera' />
							</div>

						</div>


						<div className='voge-container'
							onMouseEnter={() => setHoveredVoge(true)}
							onMouseLeave={() => setHoveredVoge(false)}
						>

							<div className={`voge_div ${hoveredVoge ? 'voge_div_opacity' : ''}`}>
								<img className='voge' src={ voge } alt='Voge' />
							</div>

							<div className={`vogeHover_div ${hoveredVoge? 'vogeHover_div_bckColor' : ''}`} >
								<img className='voge_hover' src={ vogeHover } alt='Voge' />
							</div>

						</div>

						<div className='hero-container'
							onMouseEnter={() => setHoveredHero(true)}
							onMouseLeave={() => setHoveredHero(false)}
						>

							<div className={`hero_div ${hoveredHero? 'heroHover_div' : ''}`}>
								<img className='hero' src={ hero } alt='Hero' />
							</div>

							<div className={`heroHover_div ${hoveredHero? 'heroHover_div_bckColor' : ''}`} >
								<img className='hero_hover' src={ heroHover } alt='Hero' />
							</div>
						</div>

					</div>

				</div>

				<div className='banner-home'>
					<img src={bannerHome} alt='Banner con leyenda' />
				</div>

				<div className='creditos_personales'>
					<h3>CRÉDITOS PERSONALES<br></br><span className='solo_dni'>¡SOLO CON DNI!</span></h3>
					<div className='fondo_credsPersonales'>
						<p className='concreta_suenos'>¡Concretá tus sueños!</p>
						<p className='click_moto'>Estás a un click de tener tu<br></br>moto en cuotas fijas y en pesos!</p>
						<img className='moto_creditos' src={motosCreditos} alt='Motos Creditos' ></img>
					</div>
				</div>

				<div className='accesorios'>
					<p>Accesorios</p>
				</div>

			</div>

			<Footer />

		</div>
	);
}

export default Home;