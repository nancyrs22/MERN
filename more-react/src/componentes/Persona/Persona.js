import React from "react";

class Persona extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            edoCivil: "Soltero"
        }
    }
    
    hizoClick=()=>
    {
        alert("Hizo click Persona");
    }

    hizoClick2 = (e,nombre)=>
    {
        alert("Hizo click en "+nombre);
    }

    cambiarEdoCivil = () =>
    {
        if(this.state.edoCivil ==="Soltero")
        {
            this.setState({edoCivil:"Casado"});
        }
        else
        {
            this.setState({edoCivil:"Soltero"});
        }
    }

    render()
    {
        const {nombre,apellido,lugar} = this.props
        return(
            <div className="card">
                {/* <h2>Helena de Troya</h2>
                <p id="lugar">Lima</p> */}
                {/* <h2>{this.props.nombre} {this.props.apellido}</h2>
                <p>{this.props.lugar}</p> */}
                <h2>{nombre} {apellido}</h2>
                <p id="lugar">{lugar} {lugar ==="Paris" ? "Oh la la!":"Wow!"}</p>
                <p>Estado Civil: {this.state.edoCivil}</p>
                {/* <button className="btn btn-warning" onClick={this.hizoClick}>Boton Persona</button> */}
                <button className="btn btn-warning" onClick={this.cambiarEdoCivil}>Boton Persona</button>
                <button className="btn btn-danger" onClick={(e)=>this.hizoClick2(e,nombre)}>Boton Persona</button>
            </div>

        )
    }

    /**
     * MONTAJE
     * constructor()
     * render()
     * componentDidMount()
     * 
     * ACTUALIZACION
     * shouldComponentUpdate()
     * render()
     * componentDidUpdate
     * 
     * DESMONTAJE
     * componentWillUnmount()
     */
}

export default Persona;