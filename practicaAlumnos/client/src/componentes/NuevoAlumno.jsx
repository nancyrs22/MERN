import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoAlumno = () =>{
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [correo,setCorreo] = useState("");
    const history = useHistory();

        const guardarAlumno = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/alumnos/", {
            nombre,apellido,edad,correo
        })
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err=> {
                console.log(err);
            });
    }

    return(
        <div>  
            <h1>Nuevo Alumno</h1>
            <form onSubmit={guardarAlumno}>
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

export default NuevoAlumno;

