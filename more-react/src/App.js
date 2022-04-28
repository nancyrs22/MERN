import logo from './logo.svg';
import './App.css';
import React from 'react';
import Persona from './componentes/Persona/Persona';
import OtroComponente from './componentes/OtroComponente/OtroComponente';

class App extends React.Component {

  render()
  {
    return (
      <div className="App">
        <h1>Componente de clase</h1>
        <Persona nombre="Helena" apellido="de Troya" lugar="Lima"/>
        <Persona nombre="Juana" apellido="de Arco" lugar="Paris"/>
        <Persona nombre="Pedro" apellido="Paramo" lugar="Nueva Yorck"/>
        <OtroComponente>
          <ul>
            <li>Esta es una lista del elemento hijo</li>
          </ul>
          <p>
            Este es otro elemento hijo
          </p>
        </OtroComponente>
        <button className="btn btn-success" onClick={() =>alert("Hiciste click!")}>Haz click aqui</button>
      </div>
    );
  }
  
}

export default App;
