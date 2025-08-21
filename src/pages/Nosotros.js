import React from 'react';
import '../styles/Nosotros.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
// import { useState } from 'react';


function Nosotros() {


	return (
		<div className='div-principal'>
			
			<Header className="header_component" />

			<div className='page-content'>

                <div className='map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d586.4566024597958!2d-58.52498953383304!3d-34.53053451875064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0cf30849b7f%3A0xde513677da6cb63b!2sGILERA%20ML%20MOTOS%20HERO!5e0!3m2!1ses-419!2sar!4v1755564699588!5m2!1ses-419!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Ubicación"
                    ></iframe>
                </div>

                <div className='us'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>

			</div>

			<Footer />

		</div>
	);
}

export default Nosotros;