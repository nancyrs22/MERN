import React, {useState} from "react";

const PersonaFuncional = ({nombre,apellido,lugar}) =>{

    const [edoCivil,setEdoCivil] = useState("Soltero");

    const cambiarEdoCivil = () =>{
        if(edoCivil ==="Soltero")
        {
            setEdoCivil("Casado");
        }
        else
        {
            setEdoCivil("Soltero");;
        }
    }

    return(
        <div className="card">
            <h4>Componente Funcional</h4>
            <h2>{nombre} {apellido}</h2>
            <p id="lugar">{lugar}</p>
            <p>Edo Civil: {edoCivil}</p>
            <button className="btn btn-warning">Boton Persona</button>
                <button className="btn btn-danger">Boton Persona</button>
            </div>
    )
}

export default PersonaFuncional;