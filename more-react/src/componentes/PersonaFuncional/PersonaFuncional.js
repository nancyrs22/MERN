import React, {useState} from "react";

const PersonaFuncional = ({nombre,apellido,lugar}) =>{
    const [state,setState] = useState(
        {
            edoCivil:"Soltero"
        }
    )

    const cambiarEdoCivil = () =>{
        if(state.edoCivil ==="Soltero")
        {
            setState({edoCivil: "Casado"});
        }
        else
        {
            setState({edoCivil:"Soltero"});
        }
    }

    return(
        <div className="card">
            <h4>Componente Funcional</h4>
            <h2>{nombre} {apellido}</h2>
            <p id="lugar">{lugar}</p>
            <p>Estado Civil:{state.edoCivil}</p>
            <button className="btn btn-warning">Boton Persona</button>
                <button className="btn btn-danger">Boton Persona</button>
            </div>
    )
}

export default PersonaFuncional;