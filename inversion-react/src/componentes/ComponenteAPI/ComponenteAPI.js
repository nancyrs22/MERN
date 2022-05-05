import React,{useEffect, useState} from "react";
import axios from "axios";

const ComponenteAPI = () => {
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response =>{
                setImagen(response.data.message);
            })
    } );

    return (
        <div>DOG API</div>
    )

    }
export default ComponenteAPI;