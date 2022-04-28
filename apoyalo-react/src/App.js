import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonaCard from './componentes/PersonaCard/PersonaCard';

class App extends React.Component {
  render()
  {
    return(
      <div className="App">
        <PersonaCard firstName="Doe" lastName="Jane" age="45" hairColor="Black"/>
        <PersonaCard firstName="Smith" lastName="John" age="88" hairColor="Brown"/>
        <PersonaCard firstName="Fillmore" lastName="Millard" age="50" hairColor="Brown"/>
        <PersonaCard firstName="Smith" lastName="Maria" age="62" hairColor="Brown"/>
      </div>
    )
  }

}

export default App;
