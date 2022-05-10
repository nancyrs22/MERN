import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Alumno = () => {
    const {id} = useParams();
    const [alumno, setAlumno] = useState({});

    useEffect(()=>{

        axios.get("http://localhost:8000/api/alumnos/"+id)
            .then(res=>{
                console.log(res.data);
                setAlumno(res.data);
            })
            .catch(err=>console.log(err));
    }, [])

    return(
        <div className="card">
            <h1>{alumno.apellido}, {alumno.nombre}</h1>
            <p>
                Edad: {alumno.edad}
                <br></br>
                Correo: {alumno.correo}
            </p>
            <Link to="/" className="btn btn-primary">Regresar</Link>
        </div>
    )
}

export default Alumno;