import React from "react";

const PersonaCard = persona =>
{
    return(
        <div>
        <h1>{persona.lastName}, {persona.firstName}</h1>
        <p>Age: {persona.age}</p>
        <p>Hair Color: {persona.hairColor}</p>
    </div>
    )

}

export default PersonaCard;