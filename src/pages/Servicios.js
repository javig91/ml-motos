import React from 'react';
import '../styles/Servicios.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Servicios() {
  return (
    <div className='div-principal'>
      <Header className="header_component" />

      <div className='page-content'>
        <div className="patent-services">
          <table className="services-table">
            <thead>
              <tr>
                <th>Titular</th>
                <th>Trámite</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laura Fernández</td>
                <td>Patentamiento</td>
                <td>Terminada</td>
              </tr>
              <tr>
                <td>Marcos Gutiérrez</td>
                <td>Service</td>
                <td>En curso</td>
              </tr>
              <tr>
                <td>Daniela López</td>
                <td>Service</td>
                <td>Terminada</td>
              </tr>
              <tr>
                <td>Tomás Ramírez</td>
                <td>Patentamiento</td>
                <td>En curso</td>
              </tr>
              <tr>
                <td>Sofía Herrera</td>
                <td>Service</td>
                <td>En curso</td>
              </tr>
              <tr>
                <td>Nicolás Castro</td>
                <td>Patentamiento</td>
                <td>Terminada</td>
              </tr>
              <tr>
                <td>Julieta Díaz</td>
                <td>Patentamiento</td>
                <td>En curso</td>
              </tr>
              <tr>
                <td>Rodrigo Molina</td>
                <td>Service</td>
                <td>Terminada</td>
              </tr>
              <tr>
                <td>Valentina Sosa</td>
                <td>Patentamiento</td>
                <td>Terminada</td>
              </tr>
              <tr>
                <td>Federico Benítez</td>
                <td>Service</td>
                <td>En curso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Servicios;
