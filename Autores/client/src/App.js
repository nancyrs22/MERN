import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ActualizarAutor from './componentes/ActualizarAutor';
import NuevoAutor from './componentes/NuevoAutor';
import TodosAutores from './componentes/TodosAutores';
import Error from './componentes/Error';
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=><TodosAutores></TodosAutores>}></Route>
          <Route path="/nuevo" render={()=> <NuevoAutor></NuevoAutor>}></Route>
          <Route path="/autor/editar/:id" render={() =><ActualizarAutor></ActualizarAutor>}></Route>
          <Route path="/error" render={() => <Error></Error>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
