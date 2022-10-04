import React from 'react';

function App() {
  return (
   <div>
    <h1>Propiedades de los componentes</h1> 
<hr/>

    <div className="row">
      <div className="col">
        <cards 
        imagen="https://lorempixel.com/150/150"
        titulo="Titulo card 1"
        texto="Texto de la Card 1"/>

      </div>
      <div className="col">
      <cards 
        imagen="https://lorempixel.com/150/150"
        titulo="Titulo card 2"
        texto="Texto de la Card 2"/>

      </div>
    <div className="col">
    <cards 
        imagen="https://lorempixel.com/150/150"
        titulo="Titulo card 3"
        texto="Texto de la Card 3"/>
      </div> 
    </div>
    </div>
  );
}

export default App;