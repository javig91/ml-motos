import React, { useState } from 'react';
import '../styles/Contacto.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import BotonWhatsApp from '../componentes/WhatsApp';


function Contacto() {

    const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar envío
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // acá podrías hacer fetch/axios a una API o enviar a backend
  };

    return (
        <div className='div-principal'>
            
            <Header className="header_component" />

            <div className='page-content'>
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
                <BotonWhatsApp />
            </div>

            <Footer />

        </div>
    );
}

export default Contacto;