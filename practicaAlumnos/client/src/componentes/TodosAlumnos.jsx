import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TodosAlumnos = () => {

    const [alumnos, setAlumnos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/alumnos/")
            .then(res=>{
                setAlumnos(res.data);
            })
            .catch(err=> console.log(err))
    },[])

    const eliminarAlumno = idAlumno =>{
        axios.delete("http://localhost:8000/api/alumnos/"+idAlumno)
            .then(res=>{
                let nuevaListaAlumnos = alumnos.filter(alumno => alumno._id !== idAlumno);
                setAlumnos(nuevaListaAlumnos);
            })
    }

    return(
        <div>
            <h1>Todos los alumnos</h1>
            <Link className="btn btn-success" to="/nuevo">Nuevo Alumno</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alumnos.map((alumno,index) =>(
                            <tr key={index}>
                                <td>{alumno.nombre}</td>
                                <td>{alumno.apellido}</td>
                                <td>{alumno.edad}</td>
                                <td>{alumno.correo}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/alumno/${alumno._id}`}>Detalle</Link>
                                    <Link className="btn btn-warning" to={`/alumno/editar/${alumno._id}`}>Editar</Link>
                                    <button className="btn btn-danger" onClick={()=>eliminarAlumno(alumno._id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TodosAlumnos;