import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NuevoProducto from './componentes/NuevoProducto';
import TodosProductos from "./componentes/TodosProductos";
import Producto from './componentes/Producto';
import ActualizarProducto from './componentes/ActualizarProducto';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <TodosProductos/>}></Route>
          <Route path="/nuevo" render={() => <NuevoProducto/>}></Route>
          <Route path="/producto/:id" exact render={(routeProps)=> <Producto {...routeProps}></Producto>}></Route>
          <Route path="/producto/editar/:id" render={()=><ActualizarProducto></ActualizarProducto>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
