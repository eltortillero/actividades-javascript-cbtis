import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Usuarios from "./Componentes/Usuarios";
import Usuario from "./Componentes/Usuario";

function App() {
  return(
    <Router>
      <Link to='/'>Usuarios</Link>
      <Routes>
        <Route exact path='/'>
          <Usuarios />
        </Route>
        <Route path='/usuario/:id'>
          <Usuario />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
