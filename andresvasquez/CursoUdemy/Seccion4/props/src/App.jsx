import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
   <div>
    <h1>Propiedades de los componentes: Escudo de Oaxaca</h1> 
<hr/>

    <div className="row">
      <div className="col">
        <Cards 
        imagen="https://www.elsoldezacatecas.com.mx/cultura/jzlot5-escudo-de-armas-de-oaxaca/ALTERNATES/LANDSCAPE_1140/Escudo%20de%20armas%20de%20Oaxaca"
        titulo="Titulo card 1"
        texto="Texto de Card 1"/>

      </div>
      <div className="col">
      <Cards 
        imagen="https://www.elsoldezacatecas.com.mx/cultura/jzlot5-escudo-de-armas-de-oaxaca/ALTERNATES/LANDSCAPE_1140/Escudo%20de%20armas%20de%20Oaxaca"
        titulo="Titulo card 2"
        texto="Texto de Card 2"/>

      </div>
    <div className="col">
    <Cards 
        imagen="https://www.elsoldezacatecas.com.mx/cultura/jzlot5-escudo-de-armas-de-oaxaca/ALTERNATES/LANDSCAPE_1140/Escudo%20de%20armas%20de%20Oaxaca"
        titulo="Titulo card 3"
        texto="Texto de card 3"/>
      </div> 
    </div>
    </div>
  );
}

export default App;