import React from "react";

class OtroComponente extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>Este es otro componente de clase</h2>
                <div className="contendedor-hijos">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default OtroComponente;