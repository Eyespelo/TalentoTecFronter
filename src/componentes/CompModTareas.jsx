import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = 'https://nivelacion.onrender.com/api/tareas/';

const CompModTareas = () => {

    const [nombre, setNombre] = useState('')
    const [responsable, setResponsable] = useState('')
    const [fecha, setFecha] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const navigate = useNavigate();

    const modificarTarea = async (e) => {
        e.preventDeFault()
        await axios.put(`${URL}${id}`, {
        nombres: nombre, responsable: responsable, fecha: fecha,
        descripcion: descripcion
        })
        navigate('/tareas')
    }
        useEffect(() => {
            getTareasByID();
        }, []);

    const getTareasByID = async () => {
        const res = await axios.get(`${URL}${id}`)
        setNombre(res.data.nombre)
        setResponsabe(res.data.responsable)
        setFecha(res.data.fecha)
        setDescripcion(res.data.descripcion)

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
                        type='number' className='from-control' />
        
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

export default CompModTareas;
