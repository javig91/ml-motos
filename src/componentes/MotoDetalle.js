import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/MotoDetalle.css'
import Header from './Header';
import Footer from './Footer';
import BotonCredito from "./BotonCredito";

function MotoDetalle() {
    const { id } = useParams();
    const [moto, setMoto] = useState(null);

    useEffect(() => {
    fetch('/data/motos.json')
        .then(res => res.json())
        .then(data => {
        const encontrada = data.find(m => m.id === id);
        setMoto(encontrada);
        });
    }, [id]);

    if (!moto) return <p>Cargando...</p>;
    return (
        <div className='div-principal'>
            <Header className="header_component" />

            <div className='page-content'>
                <div className="moto-details">

                    <div className="photo-payments">

                        <div className="moto-carrousel">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }} >
                                {moto.imagenes.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img} alt={`${moto.titulo} ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="payments">
                            <h1>{moto.titulo}</h1>
                            <div className="medios-de-pago">
                                <p>Medios de Pago</p>
                                <div className="ionicons_payments">
                                    <ion-icon name="cash-outline"></ion-icon>
                                    <ion-icon name="card-outline"></ion-icon>
                                </div>
                            </div>
                            
                            <div className="price-moto">
                                <p className="price-moto-text">Precio al contado: <strong>$000.000</strong></p>
                                <p className="price-moto-text">Precio de lista: <strong>$000.000</strong></p>
                            </div>

                            <div className="quotas">
                                <h4>Tarjetas de crédito</h4>
                                <p>3 cuotas fijas de <strong>$000.000</strong></p>
                                <p>6 cuotas fijas de <strong>$000.000</strong></p>
                                <p>12 cuotas fijas de <strong>$000.000</strong></p>
                            </div>

                            <div className="contact-credit">
                                <BotonCredito />
                            </div>

                        </div>

                    </div>

                    <div className="moto-features">
                        <p className="features-description">{ moto.Descripcion }</p>
                        <p className="features">Características</p>

                        <div className="features-details">

                            <div className="features-rows">
                                <p>Potencia</p>
                                <p>{ moto.PotenciaMaxima }</p>
                            </div>
                            <div className="features-rows">
                                <p>Cilindrada</p>
                                <p>{ moto.Cilindrada }</p>
                            </div>
                            <div className="features-rows">
                                <p>Peso</p>
                                <p>{ moto.Peso }</p>
                            </div>
                            <div className="features-rows">
                                <p>Litros de combustible</p>
                                <p>{ moto.LitrosCombustible }</p>
                            </div>
                            <div className="features-rows">
                                <p>Sistema de arranque</p>
                                <p>{ moto.SistemaDeArranque }</p>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>            
            
            <Footer />
        </div>
    );
}

export default MotoDetalle;
