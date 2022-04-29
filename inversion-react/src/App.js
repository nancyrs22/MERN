import logo from './logo.svg';
import './App.css';
import PersonaCard from './componentes/PersonaCard/PersonaCard';
import React from 'react';

class App extends React.Component {
  render()
  {
    return(
      <div className="App">
        <PersonaCard firstName="Jane" lastName = "Doe" age={45} hairColor={"Black"}/>
        <PersonaCard firstName="John" lastName = "Smith" age={88} hairColor={"Brown"}/>
        <PersonaCard firstName="Millard" lastName = "Fillmore" age={50} hairColor={"Brown"}/>
        <PersonaCard firstName="Maria" lastName = "Smith" age={62} hairColor={"Brown"}/>
      </div>
    );
  }
}

export default App;
