import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL = 'https://nivelacion.onrender.com/api/tareas/';

const CompTareaMostrar = () => {

    const [tarea, setTarea] = useState([])
    useEffect(() => {
        getTarea();
    }, []);

    // funcion mostrar clientes
    const getTarea = async () => {
        const datos = await axios.get(URL)
        setTarea(datos.data);
    }

    //funcion eliminar clientes
    const eliminarTarea = async (id) => {
        await axios.delete(`${URL}${id}`);
        getTarea();
    }  
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/tareas/agregar' className='btn btn-primary mt-2 mb-2'>
                        <i className="fa-solid fa-user-plus">Agregar</i></Link>
        
                    <table className='table'>
                        <thead className='tablethebg'>
                            <tr>
                            <th>Nombre</th> <th>Responsable</th> <th>Fecha</th> <th>Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarea.map( (tareas, index) => (
                                <tr key = {index}>
                                    <td> {tareas.nombre} </td>
                                    <td> {tareas.responsable} </td>
                                    <td> {tareas.fecha} </td>
                                    <td> {tareas.descripcion} </td>
                                    <td>
                                        <Link to={`/tareas/editar/${tareas._id}`} className='btn btn-success mt-2 mb-2'>
                                            <i className="fa-solid fa-file-pen">Editar</i> </Link>
        
                                        <button onClick={() => eliminarTarea(tareas._id)} className='btn btn-danger mt-2 mb-2'>
                                            <i className="fa-solid fa-trash-can">Eliminar</i> </button>  
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        
        </div>
    )
}
export default CompTareaMostrar;