import logo from './logo.svg';
import React from 'react';
import './App.css';
import Lista from './componentes/lista/lista';

class App extends React.Component{
  render()
  {
    return(
      <div>
        <Lista></Lista>
      </div>
    )
  }
}

export default App;
