import React, {useEffect, useState} from "react";
import axios from "axios";

const ComponenteAPI = () => {
    const [texto, setTexto] = useState("");
    const [clicks, setClicks] = useState(0);

    const hizoClick=()=>{
        setClicks(clicks+1);
    }

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => {
                setTexto(response.data.message);
            })
    }, [clicks]);

    return(
        <div>
            <p src={texto}></p>
            <br></br>
            <button className="btn btn-primary" onClick={hizoClick}>Mostrar Pokemon</button>
        </div>
    )
}