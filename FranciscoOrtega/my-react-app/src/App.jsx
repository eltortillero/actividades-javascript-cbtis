import React from 'react';
import './App.css';
import Hola from './components/hola';
import Contador from './components/contador';
import Temperatura from './components/Temperatura';
import Formulariop from './components/formulariop';

function App() {
  return (
    <div className="App">
    <h1>Titulo de mi primer proyecto</h1>
    <Hola></Hola>
    <Contador></Contador>
    <Temperatura></Temperatura>
    <Formulariop></Formulariop>
    </div>

  );
}

export default App;
