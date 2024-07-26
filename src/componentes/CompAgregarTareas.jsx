import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'https://nivelacion.onrender.com/api/tareas/';

const CompAgregarTareas = () => {

    const [nombre, setNombre] = useState('')
    const [responsable, setResponsable] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate();

// funcion guardar

    const guardarTarea = async(e) => {
        e.preventDefault()
        await axios.post(URL, {
            nombre: nombre, responsable: responsable, fecha: fecha,
            descripcion: descripcion
        })
        navigate('/tareas')
    }

    return (
        <div>
            <h3>Formulario Guardar Tareas </h3>
            <form onSubmit={guardarTarea}>
        
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)}
                        type='text' className='from-control' />
        
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Responsable</label>
                    <input value={responsable} onChange={(e) => setResponsable(e.target.value)}
                        type='text' className='from-control' />
        
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input value={fecha} onChange={(e) => setFecha(e.target.value)}
                        type='Date' className='from-control' />
        
                </div>
        
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
                    type='text' className='from-control' />
                
                </div>
                
                <button type="submit" className="btn btn-primary"> Guardar</button>
            </form>
        </div>
    )
}

export default CompAgregarTareas;
