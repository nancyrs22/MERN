import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NuevoAlumno from './componentes/NuevoAlumno';
import TodosAlumnos from './componentes/TodosAlumnos';
import ActualizarAlumno from './componentes/ActualizarAlumno';
import Alumno from './componentes/Alumno';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <TodosAlumnos></TodosAlumnos>}></Route>
          <Route path="/nuevo" render={() => <NuevoAlumno></NuevoAlumno>}></Route>
          <Route path="/alumno/:id" exact render={()=><Alumno></Alumno>}></Route>
          <Route path="/alumno/editar/:id" render={()=><ActualizarAlumno></ActualizarAlumno>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
