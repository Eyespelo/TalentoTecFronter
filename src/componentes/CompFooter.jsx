import React from "react";
import redes from '../Imagenes/redes.png';

const CompFooter = () => {
    return (

        <div>
        <div className="card-body">
        <h5 className="card-title">Direccion calle 113 #23-4</h5>
        <p className="card-text">correo pruebaproyecto@gmail.com - telefono 56354532- 310009736</p>
        <img src={redes} className="App-logo1" alt="logo" />
        </div>
        <div className="card-footer text-muted">
        lunes - viernes horario 8am - 6pm
        </div>

        </div>

    )
}
export default CompFooter;