import React from "react";
import { useParams } from "react-router-dom";

const ComponenteParametro = (props) => {

    const {palabra,color,bg} = useParams();

    return (
        <div className="container">
            <p style={color ? {color:color, backgroundColor: bg}:null}>
                La palabra es: {palabra}
            </p> 
        </div>
    )

}

export default ComponenteParametro;