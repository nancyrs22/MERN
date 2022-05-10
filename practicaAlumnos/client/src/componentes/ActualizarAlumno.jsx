import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const ActualizarAlumno = () =>{
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [correo,setCorreo] = useState("");
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/alumnos/"+id)
            .then(res=>{
                console.log(res.data);
                setNombre(res.data.nombre);
                setApellido(res.data.apellido);
                setEdad(res.data.edad);
                setCorreo(res.data.correo);
            })
            .catch(err=>console.log(err));
    },[])

    const actualizarAlumno = e =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/alumnos/"+id,{
            nombre,apellido, edad, correo
        })
            .then(res => history.push("/"))
            .catch(err=>console.log(err));
    }

    return(
        <div>  
            <h1>Editar Alumno</h1>
            <form onSubmit={actualizarAlumno}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre: </label>
                    <input id="nombre" name="nombre" type="text" className="form-control" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido: </label>
                    <input id="apellido" name="apellido" type="text" className="form-control" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input id="edad" name="edad" type="number" className="form-control" value={edad} onChange={(e)=> setEdad(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo: </label>
                    <input id="correo" name="correo" type="text" className="form-control" value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar"/>
            </form>
        </div>
    )
}

export default ActualizarAlumno;