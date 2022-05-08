import { BrowserRouter,Switch, Route } from "react-router-dom";
import ComponenteParametro from "./componentes/ComponenteParametros/ComponenteParametro";
import Home from "./componentes/Home/Home";

const App = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={()=><Home></Home>}></Route>
          <Route path="/:palabra" exact render={(routeProps)=><ComponenteParametro {...routeProps}></ComponenteParametro>}></Route>
          <Route path="/:palabra/:color/:bg" render={(routeProps)=> <ComponenteParametro {...routeProps}></ComponenteParametro>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
