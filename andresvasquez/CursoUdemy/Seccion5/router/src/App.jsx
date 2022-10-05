import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from 'react-router-dom'


function App() {
  return (
<Router>

<Routes>

  <Route path="/inicio">
    Estas en el inicio
  </Route>
  <Route path="/">
Esto es la url base
  </Route>
  
</Routes>

</Router>
  );
}

export default App;
