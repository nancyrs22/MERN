import React, {useState} from 'react';

const ComponenteFuncional = ({num, aumento: aumProp}) => {
    /*
    
    props = {
        num: 5,
        aumento: 2
    }
     */
    const [numero, setNumero] = useState(num); //useState() -> LISTA [Variable que enviamos, Funcion que modifica]
    
    const [aumento, setAumento] = useState(aumProp);

    const aumentaNumero = () => {
        setNumero(numero+aumento);
    }

    return(
        <div>
            <h1>{numero}</h1>
            <button onClick={aumentaNumero} className="btn btn-primary">Aumenta</button>
        </div>
    )

}

export default ComponenteFuncional