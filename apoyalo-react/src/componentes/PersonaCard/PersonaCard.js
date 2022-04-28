import React from "react";

class PersonaCard extends React.Component{

    render()
    {
        const{firstName, lastName, age, hairColor} = this.props;

        return(
            <div className="">
                <h2>{firstName} {lastName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonaCard;