import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoProducto = () =>{
    const [nombre, setNombre] = useState("");
    const [precio,setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const history = useHistory();

    //Funcion para guardar conexion a backend
    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos",{
            nombre,precio,descripcion
            // name:nombre,             es otra forma de hacerlo si se quisiera poner otro nombre de variable
            // price:precio,
            // description:descripcion
        })
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    }

    return(
        <div>
            <h1>Nuevo producto</h1>
            <form onSubmit={guardarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre: </label>
                    <input id="nombre" name="nombre" type="text" className="form-control" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio: </label>
                    <input id="precio" name="precio" type="text" className="form-control" value={precio} onChange={(e)=> setPrecio(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripcion: </label>
                    <input id="descripcion" name="descripcion" type="text" className="form-control" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}/>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar"></input>
            </form>
        </div>
    )
}

export default NuevoProducto;