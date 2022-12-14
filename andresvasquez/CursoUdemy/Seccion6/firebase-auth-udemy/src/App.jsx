import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Admin from './components/Admin';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <h1>Hola</h1>
<Router>
    <Menu></Menu>
<Routes>

  <Route exact to="/" component={Inicio}></Route>
  
  <Route to="/" component={Admin}></Route>
  
  <Route to="/" component={Login}></Route>

</Routes>

</Router>
    </div>
  );
}

export default App;
