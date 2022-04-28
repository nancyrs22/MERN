import React from "react";

class PersonaCard extends React.Component{

    constructor(props)
    {
        super(props);
        this.state ={
            age:props.age
        }
    }

    aumentarEdad=()=>
    {
        this.setState({age:this.state.age+1});
    }

    render()
    {
        const{firstName, lastName, age, hairColor} = this.props;
        

        return(
            <div className="card">
                <h2>{lastName} {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button className="btn btn-success" onClick={this.aumentarEdad}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonaCard;