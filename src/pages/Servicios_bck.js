import React from 'react';
import '../styles/Nosotros.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import { useState } from 'react';


function Servicios() {


  // Estado para las filas de la tabla
  const [datos, setDatos] = useState([]);

  // Estado para los campos del formulario
  const [titular, setTitular] = useState('');
  const [tramite, setTramite] = useState('patentamiento');
  const [estado, setEstado] = useState('terminada');
  
  // Estado para manejar la edición
  const [editando, setEditando] = useState(false);
  const [indexEditando, setIndexEditando] = useState(null);

  // Función para manejar la adición de una nueva fila
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaFila = { titular, tramite, estado };
    if (editando) {
      // Si estamos editando, actualizamos la fila
      const datosActualizados = [...datos];
      datosActualizados[indexEditando] = nuevaFila;
      setDatos(datosActualizados);
      setEditando(false);
    } else {
      // Si no estamos editando, agregamos la nueva fila
      setDatos([...datos, nuevaFila]);
    }

    // Limpiar formulario
    setTitular('');
    setTramite('patentamiento');
    setEstado('terminada');
  };

  // Función para editar una fila
  const handleEdit = (index) => {
    const fila = datos[index];
    setTitular(fila.titular);
    setTramite(fila.tramite);
    setEstado(fila.estado);
    setEditando(true);
    setIndexEditando(index);
  };

  // Función para eliminar una fila
  const handleDelete = (index) => {
    const datosActualizados = datos.filter((_, i) => i !== index);
    setDatos(datosActualizados);
  };

  return (
    <div>
      <h3>{editando ? 'Editar Entrada' : 'Agregar Nueva Entrada'}</h3>
      
      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <label>
          Titular:
          <input
            type="text"
            value={titular}
            onChange={(e) => setTitular(e.target.value)}
            required
          />
        </label>

        <label>
          Trámite:
          <select
            value={tramite}
            onChange={(e) => setTramite(e.target.value)}
          >
            <option value="patentamiento">Patentamiento</option>
            <option value="service">Service</option>
          </select>
        </label>

        <label>
          Estado:
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="terminada">Terminada</option>
            <option value="en curso">En curso</option>
          </select>
        </label>

        <button type="submit">{editando ? 'Actualizar' : 'Agregar'}</button>
      </form>

      {/* Tabla de Datos */}
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Titular</th>
            <th>Trámite</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr key={index}>
              <td>{fila.titular}</td>
              <td>{fila.tramite}</td>
              <td>{fila.estado}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Servicios;