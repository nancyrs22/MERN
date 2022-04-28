import React,{useState} from "react";

const Formulario = () =>
{
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [email,setEmail] =useState("");
    const [hizoSubmit,setHizoSubmit] = useState(false);
    
    const crearUsuario = (e) =>{
        e.preventDefault();
        console.log("Nombre: "+nombre+", Apellido: "+apellido+"Email: "+email);
        setNombre("");
        setApellido("");
        setEmail("");
        setHizoSubmit(true);
    }

    const mensaje=()=>
    {
        if(hizoSubmit)
        {
            return "Gracias por sus datos";
        }
        else{
            return "Favor de llenar sus datos";
        }
    }

    return(
        <form onSubmit={crearUsuario}>
            <h2>Crear Usuario</h2>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" className="form-control" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input className="form-control" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <input type="submit" className="btn btn-success" value="Crea Usuario"/>
            {mensaje()}
        </form>
    )

}

export default Formulario;