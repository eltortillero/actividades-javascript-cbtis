import React from 'react';
import Cards from './components3/cards'

function App() {
  return (
   <div>
    <h1>Propiedades de los componentes</h1> 
<hr/>

    <div className="row">
      <div className="col">
        <Cards 
        imagen="https://image.shutterstock.com/image-illustration/img-file-isolated-on-abstract-260nw-1553569532.jpg"
        titulo="Titulo card 1"
        texto="Texto de la Card 1"/>

      </div>
      <div className="col">
      <cards 
        imagen="https://image.shutterstock.com/image-illustration/img-file-isolated-on-abstract-260nw-1553569532.jpg"
        titulo="Titulo card 2"
        texto="Texto de la Card 2"/>

      </div>
    <div className="col">
    <Cards 
        imagen="https://image.shutterstock.com/image-illustration/img-file-isolated-on-abstract-260nw-1553569532.jpg"
        titulo="Titulo card 3"
        texto="Texto de la Card 3"/>
      </div> 
    </div>
    </div>
  );
}

export default App;
