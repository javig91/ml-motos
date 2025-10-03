import { useState } from "react";
import '../styles/MotoDetalle.css'
import { phoneNumber } from "./PhoneNumber";

function BotonCredito() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", apellido: "", dni: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { nombre, apellido, dni } = formData;

    if (!nombre || !apellido || !dni) {
        alert("Por favor completa todos los campos o verifica la información cargada");
    return;
    }

    
    const dniSoloNumeros = /^\d+$/;

    if (!dniSoloNumeros.test(dni)) {
        alert("El DNI debe contener solo números");
    return;
    }

    // const phoneNumber = "5491176099163";

    const message = `Hola ML Motos! Quiero consultar por un Crédito Personal. Mi nombre completo es ${nombre} Apellido: ${apellido} y DNI: ${dni}`;

    const url = `https://wa.me/${ phoneNumber }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="modal-credito">
        {/* Botón inicial */}
        <button
        onClick={() => setShowForm(true)}
        className="button-modal"
        >
        Consulta por tu Crédito Personal
        </button>

        {showForm && (
            <div className="modal-form">
                <div className="modal-form-window">
                    <h2 className="">Completa el formulario y envianos tus datos por WhatsApp</h2>

                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        className=""
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="dni"
                        placeholder="Documento"
                        onChange={handleChange}
                    />

                    <div className="buttons_send_form">

                        <button
                        onClick={() => setShowForm(false)}
                        >
                        Cancelar
                        </button>

                        <button
                        onClick={handleSubmit}
                        >
                        Enviar
                        </button>

                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

export default BotonCredito;